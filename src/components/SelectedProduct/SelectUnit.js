import { View,Text,ScrollView,TouchableOpacity } from "react-native";
import Colors from "../../../assets/Color";
import { postData } from "../../services/ServerServices";
import { useEffect, useState } from 'react';
export default function SelectUnit({product,setProduct}){
    const [unitsComponent,setUnitsComponent]=useState([])
    const [selectedProduct,setSelectedProduct]=useState(product)
    const handleSelectedProduct=(items)=>{
        setProduct(items)
        setSelectedProduct(items)
    }
     useEffect(function(){
        const setInitialData = async()=>{
            var res = await postData('userinterface/fetch_all_product_byproductid',{productid:product.productid})
         setUnitsComponent(res.data)
   }
   setInitialData()
    },[product.productid])
const products = [{weight:'20kg',price:200,offerprice:150},{weight:'20kg',price:200,offerprice:150},{weight:'20kg',price:200,offerprice:150},{weight:'20kg',price:200,offerprice:150},{weight:'20kg',price:200,offerprice:150}]
    const units = ()=>{
        return unitsComponent.map((items)=>{
            return(<View style={{padding:10}}>
                <TouchableOpacity onPress={()=>handleSelectedProduct(items)}>
                <View style={{borderColor:Colors.darkGreen,borderWidth:items.productlistid==selectedProduct.productlistid?3:1,width:115,height:75,position:'relative',borderRadius:10}}>
                   <View style={{alignItems:'center',top:20}}>
                   <Text style={{fontSize:13}}>{items.weight}{items.pricetypename}</Text> 
                   <View style={{flexDirection:'row'}}>
                   <View><Text style={{fontWeight:'bold',color:Colors.black,fontSize:14}}>&#8377;{items.offerprice}  </Text></View>
                   <View><Text style={{textDecorationLine:'line-through',fontSize:14}}>&#8377;{items.price}</Text></View>
                   </View>
                   </View>
                   <View style={{position:'absolute',left:'20%',top:-10,zIndex:1,borderWidth:0.8,width:70,height:25,borderRadius:10,backgroundColor:Colors.darkGreen,borderColor:Colors.darkGreen,alignItems:'center',padding:2}}>
                    <Text style={{color:Colors.white,fontSize:13,fontWeight:'bold'}}>{(((items.price-items.offerprice)/items.price)*100).toFixed(0)}%  OFF</Text>
                   </View>
                </View>
                </TouchableOpacity>
                </View>)
        })
    }
    return(<View>  
        <View style={{padding:10,marginTop:'2%'}}>
         <Text style={{fontWeight:600,fontSize:15}}>Select Unit</Text>
        <View style={{ flexDirection: 'row',marginTop:'3%' }}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {units()}
        </ScrollView>   
        </View>
        </View>
    </View>)
}