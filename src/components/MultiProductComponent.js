import { View,FlatList,Dimensions,Text } from 'react-native';
const { width, height } = Dimensions.get('window')
import Colors from '../../assets/Color';
import SingleProductComponent from '../components/SingleProductComponent';
import styles from './MultiProductComponentCSS'
export default function MultipleProductComponent({products,title,refresh,setRefresh}){
     const ShowItem =({product}) =>(
        <SingleProductComponent data={product} setRefresh={setRefresh} refresh={refresh}/>
     )  
     return (
        <View>
      <Text style={styles.titleStyle}>{title}</Text>
       <FlatList
       data={products}
       horizontal={true}
       scrollEnabled
       showsHorizontalScrollIndicator={false}
       renderItem={({item})=><ShowItem  product={item}/>}
       keyExtractor={item=>item.id}
      
       />
        </View>)
}