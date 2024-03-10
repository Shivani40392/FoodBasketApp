import { ScrollView,View, Text, Dimensions, Image, TouchableOpacity} from  "react-native";
import { ServerURL } from "../services/ServerServices";
const { width, height } = Dimensions.get('window')
import Colors from "../../assets/Color";
import PlusMinusButton from "./PlusMinusButton";
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from "react-redux";
export default function SingleProductComponent({data,refresh,setRefresh}){
  const navigation=useNavigation()
  const dispatch=useDispatch()
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
    return(<View style={{margin:10}}>
        <View style={{alignItems:'center',borderWidth:1,borderColor:'#a4b0be',width:width*0.42,height:height*0.35,borderRadius:10}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('SelectedProduct',{product:data})}}>
        <Image
       style={{ resizeMode: 'contain', width: 100, height: 100 }}
       source={{ uri:`${ServerURL}/images/${data.image}` }} />
      <Text style={{marginVertical:10,fontWeight:'bold'}}>{data.productname.substring(0,8)+'...'} {data.weight}{data.pricetypename}</Text>
      <View style={{justifyContent:'flex-end',width:width*0.3}}>
        <Text style={{color:Colors.red,fontWeight:'bold',textDecorationLine:'line-through'}}>&#8377;{data.price}</Text>
        <Text style={{fontWeight:'bold',color:Colors.black}}>&#8377;{data.offerprice}</Text>
        <Text style={{fontWeight:'bold',color:Colors.darkGreen}}>Save &#8377;{data.price - data.offerprice}</Text>
      </View>
      </TouchableOpacity>
      <View style={{marginVertical:10}}>
        <PlusMinusButton onChange={(value)=>handleQtyChange(value,data)} data={data}  title={'ADD'} bgColor={Colors.darkGreen} forColor={Colors.white} width={width*0.28}/>
      </View>
      </View>
    </View>)
}