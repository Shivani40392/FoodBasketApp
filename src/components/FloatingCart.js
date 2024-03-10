import { View, Text, Dimensions,TouchableOpacity} from  "react-native";
import styles from "./FloatingCartCSS";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
const {width, height} = Dimensions.get('window');
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
export default function FloatingCart(props){
    var cart=useSelector(state=>state.cart)
    const navigation=useNavigation()
    var keys=Object.keys(cart)
    var value=Object.values(cart)
    var totalamount=value.reduce((p1,p2)=>{
    var amt= p2.offerprice>0?p2.offerprice:p2.price 
    return p1+amt
    },0)
   return(<View style={{position:'absolute',top:props.height,zIndex:1}}>
     <TouchableOpacity onPress={()=>{navigation.navigate('DeliveryCart')}}>
    <View style={styles.position}>
      <View  style={styles.view}>
        <View style={styles.row}>
          <Icons name={'cart-variant'} style={styles.icon}/>
         <View style={styles.item}>
          <Text style={styles.text}>{keys.length} item</Text>
          <Text style={styles.text}>&#8377;{totalamount}</Text>
         </View>
        </View>
        <View style={styles.row}>
            <Text style={styles.cart}>View Cart</Text>
            <Icons name={'arrow-right-thick'} style={styles.arrow}/>
        </View>
      </View> 
    </View>
    </TouchableOpacity>
   </View>)
}