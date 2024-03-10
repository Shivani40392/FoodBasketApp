import { View,Text,Dimensions,ScrollView } from 'react-native';
const {width,height}=Dimensions.get('window')
import Colors from '../../../assets/Color';
import Button from '../Button';
import { useState,useEffect } from 'react';
import NumberDailog from '../NumberDailog';
import { getKey } from '../../storage/AsyncStroage';
import RazorpayCheckout from 'react-native-razorpay'
import { getStoreData } from '../../storage/AsyncStroage';
import { useSelector } from 'react-redux';
import { ServerURL } from '../../services/ServerServices';
export default function Tip(){
   const[status,setStatus]=useState(false)
   const [user, setUser] = useState('');
   const product=useSelector(state=>state.cart)
   var values=Object.values(product)
    var total=((values.reduce((a,b)=>{
        return (a+b.offerprice*b.qty)
    },0))+15)*100
    console.log(total)
  useEffect(() => {
    async function fetchData() {
      try {
        const mobileno = await getKey();
        const userData = await getStoreData(mobileno);
        setUser(userData);
      } catch (error) {
        // Handle any errors that might occur during the data fetching process
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 
   var options = {
     description: 'Credits towards consultation',
     image:`${ServerURL}/images/targetlogo.png`,
     currency: 'INR',
     key: 'rzp_test_GQ6XaPC6gMPNwH', // Your api key
     amount: total,
     name: user.fullname,
     prefill: {
       email: 'void@razorpay.com',
       contact: user.phonenumber,
       name: 'Gwalior Basket'
     },
     theme: {color: '#F37254'}
   }
   const handlePayment=()=>{
     RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          console.log(`Error: ${error.code} | ${error.description}`);
        });
   }
   const handleClick=async()=>{
     var key=null
    key=await getKey()
    if(key==null){
     setStatus(true)
    }
    else{
     handlePayment()
    }
   }
    return(<View>
         <View style={{width:width*0.92,marginLeft:1,marginTop:10,backgroundColor:Colors.white,padding:14,borderRadius:18}}>
          <View>
            <Text style={{fontSize:20,color:Colors.black,fontWeight:'bold',marginBottom:3}}>Tip your delivery partner</Text>
            <Text>Your Kindness means alot 100% of your tip will got directly to your delivery partner.</Text>
          
           <View style={{flexDirection:'row',marginTop:3,marginBottom:10}}>
            <View style={{borderColor:'#dfe4ea',borderRadius:16,borderWidth:1,padding:4,width:70,height:30,alignItems:'center',marginRight:10}}>
            <Text>&#128512; &#8377;10</Text>
            </View>
            <View style={{borderColor:'#dfe4ea',borderRadius:16,borderWidth:1,padding:4,width:70,height:30,alignItems:'center',marginRight:10}}>
            <Text>&#128519; &#8377;50</Text>
            </View>
            <View style={{borderColor:'#dfe4ea',borderRadius:16,borderWidth:1,padding:4,width:70,height:30,alignItems:'center',marginRight:10}}>
            <Text>&#128525; &#8377;100</Text>
            </View>
            <View style={{borderColor:'#dfe4ea',borderRadius:16,borderWidth:1,padding:4,width:80,height:30,alignItems:'center',marginRight:10}}>
            <View style={{flexDirection:'row'}}>
            <Text >&#128293;</Text>
            <Text>Custom</Text>
            </View>
            </View>


         
           </View>
           <Button onPress={handleClick} title={'Make Your Payment'} forColor={Colors.white} bgColor={Colors.darkGreen}/>
          
          </View>
          <NumberDailog  setStatus={setStatus} status={status}/>
         </View>
    </View>)
}