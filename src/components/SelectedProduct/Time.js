import { View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import Colors from "../../../assets/Color";
export default function Time ({product}){
    return(<View>
        <View style={{padding:10}}>
        <Text style={{color:Colors.black,fontWeight:'bold',fontSize:17,marginBottom:15}}>{product.productname} {product.weight }{product.pricetypename}</Text>
        <View style={{flexDirection:'row'}} > 
             <Icon name={'stopwatch'} style={{fontSize:20,marginLeft:'2%'}} />
             <Text style={{marginLeft:4}}>10min</Text>
       </View>
       </View>
    </View>)
}