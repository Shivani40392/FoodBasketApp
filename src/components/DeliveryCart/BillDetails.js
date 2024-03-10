import {View,Dimensions,Text} from 'react-native'
const {width,height}=Dimensions.get('window')
import Colors from '../../../assets/Color'
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome5"
import MCI from "react-native-vector-icons/MaterialCommunityIcons"
export default function BillDetails(){
    var product=useSelector(state=>state.cart)
    var values=Object.values(product)
    var total=values.reduce((a,b)=>{
        return (a+b.offerprice*b.qty)
    },0)
    var atotal=values.reduce((a,b)=>{
        return (a+b.price*b.qty)
    },0)
    return(<View>
        <View style={{width:width*0.92,marginLeft:1,marginVertical:13,backgroundColor:Colors.white,padding:14,borderRadius:18,}}>
          <View style={{alignItems:'center'}}><Text style={{color:Colors.black,fontSize:18,fontWeight:'bold'}}>Bill Details</Text></View>

          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Icon name={"list-alt"}  style={{fontSize:20,marginRight:5}}/>
          <Text>Sum Total</Text>
          </View>

           <View >
            <Text style={{marginLeft:'auto'}}>&#8377;{total}</Text>
            <Text style={{textDecorationLine:'line-through',marginLeft:'auto'}}>&#8377;{atotal}</Text>
           </View>
          </View>

    
          <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:12}}>
          <View style={{flexDirection:'row'}}>
          <MCI name={"moped"}   style={{fontSize:20,marginRight:5}}/>
          <Text>Delivery Charge</Text>
          </View>

           <View >
            <Text style={{marginLeft:'auto'}}>&#8377;15</Text>
           
           </View>
          </View>


          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{alignItems:'center'}} >
         
          <Text style={{fontSize:16,fontWeight:'bold',color:Colors.black}}>Grand Total</Text>
          </View>

           <View >
            <Text style={{fontWeight:'bold',color:Colors.black,marginLeft:'auto'}}>&#8377;{total+15}</Text>
            <Text style={{textDecorationLine:'line-through',fontWeight:'bold',color:Colors.black,marginLeft:'auto'}}>&#8377;{atotal+15}</Text>
           </View>
          </View>


        </View>
    </View>)
}