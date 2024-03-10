import { View,Text,Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import ImageComponent from "../components/SelectedProduct/ImageComponent";
import Time from '../components/SelectedProduct/Time';
import SelectUnit from '../components/SelectedProduct/SelectUnit';
import PlusMinusButton from '../components/PlusMinusButton';
import { useDispatch } from "react-redux";
import Colors from '../../assets/Color';
const {width,height}=Dimensions.get('window')
import { useSelector } from 'react-redux';
import FloatingCart from '../components/FloatingCart';
export  default function Selectedproduct(props){
   const [product,setProduct]=useState(props.route.params.product)
   const[refresh,setRefresh]=useState(false)
   var images=product.images.split(",")
   var image=product.image.split(",")
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
   }
    
    return(<View >
        <View 
        style={{position:'relative'}}>
        <ImageComponent images={images} image={image} />
        <View style={{flexDirection:'row',width:width*0.79}}>
       <Time product={product}/>
       <View style={{marginVertical:10,marginTop:'9%'}}>
        <PlusMinusButton onChange={(value)=>handleQtyChange(value,product)} data={product}  title={'ADD'} bgColor={Colors.darkGreen} forColor={Colors.white} width={width*0.15}/>
      </View>
      </View>
       <SelectUnit setProduct={setProduct} product={product}/>
       { keys?.length>=1? <FloatingCart height={height*0.83}/>:<></>}
       </View>
       
    </View>)
}