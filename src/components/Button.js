import { useEffect , useState } from 'react';
import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
const Button = ({title,width,bgColor,forColor,onPress = ()=>{}})=>{
    return (<View>
        <TouchableOpacity onPress={onPress}>
            <View style={{padding:10,backgroundColor:bgColor,width:width,justifyContent:'center',borderRadius:5,alignItems:'center'}}>
             <Text style={{color:forColor,fontWeight:'bold',fontSize:12}}>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>)
}
export default Button