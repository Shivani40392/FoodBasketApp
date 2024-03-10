import { useState } from "react"
import { TouchableOpacity, View,Dimensions} from "react-native"
import { Text } from "react-native";
import Button from "./Button";
import Colors from "../../assets/Color";
import { useSelector } from "react-redux";
const {width,height} = Dimensions.get('window')
export default function PlusMinusButton(props){
    var cart=useSelector(state=>state.cart)
    var qty=cart[props.data.productlistid]?.qty
     var tqty=0
    if(qty!=undefined)
     tqty=qty
    const [value,setValue] = useState(tqty)
   const plus = ()=>{
   
    if (value < 5) {
        
        setValue(prev => prev + 1)
        props.onChange(value+1)
     }
   }
   const minus = ()=>{
    if (value > 0) { setValue(prev => prev - 1) 
        props.onChange(value-1)}
   }
   return(<>{!value?<Button onPress={()=>{plus()}} title={'ADD'} bgColor={Colors.darkGreen} forColor={Colors.white} width={props.width} style={{justifyContent:'center',alignItems:'center' }}/>:
   <View style={{flexDirection: "row", alignItems: "center" }}>
    <TouchableOpacity onPress={()=>{plus()}}>
    <View  style={{width:width*0.08,justifyContent:'center',alignSelf:'center',alignItems:'center',backgroundColor:Colors.darkGreen,height:35,borderTopLeftRadius:5,borderBottomLeftRadius:5}}><Text style={{color:Colors.white}}>+</Text></View>
    </TouchableOpacity>
    <View style={{borderWidth:0.6,borderColor:Colors.darkGreen,width:width*0.08, backgroundColor: Colors.white, height:34.4,justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
    <Text>{value}</Text>
    </View>
    <TouchableOpacity onPress={()=>{minus()}}>
    <View  style={{width:width*0.08,justifyContent:'center',alignSelf:'center',alignItems:'center',backgroundColor:Colors.darkGreen,height:35,borderTopRightRadius:5,borderBottomRightRadius:5}}><Text style={{color:Colors.white}}>-</Text></View>
    </TouchableOpacity>
   </View>
   }
   </>)
}