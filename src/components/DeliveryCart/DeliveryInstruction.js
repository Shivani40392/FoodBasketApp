import {View,Text,Dimensions,ScrollView} from 'react-native'
const {width,height}=Dimensions.get('window')
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Colors from '../../../assets/Color'
export default function DeliveryInstruction(){
    const deliveryinstructions = [
        { id: 1, icon: "microphone", topic: 'Record', line: 'Press Here To Hold.' },
        { id: 1, icon: "phone-off", topic: ' ', line: 'Avoid Calling.' },
        { id: 1, icon: "bell-off", topic: ' ', line: "Don't Ring The Bell." },
        { id: 1, icon: "message-bulleted-off", topic: ' ', line: "Don't Message." },
        { id: 1, icon: "truck-delivery", topic: ' ', line: 'Deliver Item Safely.' },
    ]
    const instruction=()=>{
        return deliveryinstructions.map((item)=>{
            return(<View>
                <View style={{borderColor:'#dfe4ea',borderRadius:10,borderWidth:1,padding:4,width:90,height:90,alignItems:'center',marginRight:10}}>
              <View style={{flexDirection:'row'}}>      
              <Icons name={item.icon} style={{fontSize:25}}/>
              <Text>{item.topic}</Text>
              </View>
              <Text style={{marginTop:4,fontSize:13}}>{item.line}</Text>
              </View>
            </View>)
        })
    }
    return(<View>
       <View style={{width:width*0.92,marginLeft:1,marginTop:10,backgroundColor:Colors.white,padding:14,borderRadius:18}}>
       <View style={{flexDirection:'row'}}>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {instruction()}
        </ScrollView> 
       </View>
       </View>
    </View>)
}