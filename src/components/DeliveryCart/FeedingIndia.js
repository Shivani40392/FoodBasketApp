import {View,Text,Dimensions} from 'react-native'
import Colors from '../../../assets/Color'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
const {width,height}=Dimensions.get('window')
export default function FeedingIndia(){
  return(<View>
     <View style={{width:width*0.92,marginLeft:1,backgroundColor:Colors.white,padding:14,borderRadius:18,flexDirection:'row'}}>
         <View style={{alignItem:'center',justifyContent:'center'}}>
         <Icons name={'food'} style={{fontSize:25,marginRight:10}}/>
         </View>
         <View>
            <Text style={{fontSize:19,fontWeight:'bold',color:Colors.black}}>Feeding India Donation</Text>
            <Text>{"Working towards a malnutrition free India.Feeding India is a initiate to give donation to the NGO's basically help in Working for malnution free india".substring(0,45) +" ..."} </Text>
         </View>
    </View>
  </View>)
}