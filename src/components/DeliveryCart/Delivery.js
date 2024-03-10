import { View,Text,Dimensions,ScrollView,Image } from 'react-native';
import Colors from '../../../assets/Color';
const {width,height}=Dimensions.get('window')
import Icons from 'react-native-vector-icons/Fontisto'
import { ServerURL } from '../../services/ServerServices';
import PlusMinusButton from '../PlusMinusButton';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

export default function Delivery(props){
    
    var product=useSelector(state=>state.cart)
    var values=Object.values(product)
   var products=[{id:1,image:'kissan.png',productname:'kissan fruit jam',weight:'500g',price:132,offerprice:100,qty:1},
   {id:2,image:'kissan.png',productname:'kissan fruit jam kissan fruit jam kissan fruit jam kissan fruit jam',weight:'500 g',price:132,offerprice:100,qty:1},
   {id:3,image:'kissan.png',productname:'kissan fruit jam',weight:'500 g',price:132,offerprice:100,qty:1},
   {id:4,image:'kissan.png',productname:'kissan fruit jam',weight:'500 g',price:132,offerprice:100,qty:1},
   {id:5,image:'kissan.png',productname:'kissan fruit jam',weight:'500 g',price:132,offerprice:100,qty:1}]
   const[refresh,setRefresh]=useState(false)
   const dispatch=useDispatch()   
   var cart=useSelector(state=>state.cart)
   var keys=Object.keys(cart)
   const handleQtyChange=(value,product)=>{
    if(value==0){
       dispatch({type:'DELETE_CART',payload:[product.productlistid,product]})
    }
    else{
      product['qty']=value
      dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
    }
    setRefresh(!refresh)
    props.setRefresh(!refresh)
  }
   function showProduct(){
    return values.map((item)=>{
        return(
            <View style={{marginBottom:20,flexDirection:'row'}}>
                <View style={{borderColor:'#dfe4ea',borderRadius:10,borderWidth:1,padding:4,width:90,height:90,alignItems:'center',marginRight:10}}>
                <Image
                    style={{ resizeMode: 'contain', width: 80, height:80 }}
                    source={{ uri:`${ServerURL}/images/${item.image}` }} />
                </View>
                <View style={{width:'71%', height: 90,borderRadius:10,padding:1,marginTop:1 }}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{width:'50%'}}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={{fontSize:16,color:Colors.black,fontWeight:300}}>{item.productname}</Text>
                    <Text style={{color:Colors.black,fontWeight:300,marginVertical:5}}>{item.weight}{item.pricetypename}</Text>
                    <Text style={{color:Colors.black,fontWeight:500}}>&#8377;{item.offerprice} </Text>
                    </View>
                    <View style={{marginTop:'16%'}}><PlusMinusButton onChange={(value)=>handleQtyChange(value,item)} data={item}  title={'ADD'} bgColor={Colors.darkGreen} forColor={Colors.white} width={width*0.15}/></View>
                    </View>
                </View>   
               
            </View>
        )
    })
   }
   return(<View>
   
    <View style={{width:width*0.92,marginLeft:1,marginTop:10,backgroundColor:Colors.white,padding:14,borderRadius:18}}>
     <View style={{flexDirection:'row',marginBottom:15}}>
       <View style={{backgroundColor:'#f1f2f6',width:50,height:50,borderRadius:10,alignItems:'center',justifyContent:'center'}}><Icons name={'stopwatch'} style={{fontSize:28}} /></View>
       
       <View style={{marginLeft:'10%'}}>
        <Text style={{color:Colors.black,fontSize:20,fontWeight:'bold'}}>
            Delivery in 20 minutes
        </Text>
        <Text>
            7 Items
        </Text>
       </View>
     </View>
     {
        showProduct()
     }
    </View>
    
   </View>)
}