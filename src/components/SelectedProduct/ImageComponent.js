import { Image, View,ScrollView } from "react-native";
import { ServerURL } from "../../services/ServerServices";
import styles from "./ImageComponentCSS";
import {  Dimensions} from  "react-native";
const { width, height } = Dimensions.get('window')
export default function ImageComponent({images,image}){
    const im=[{id:1,image:'kissan.png'},{id:2,image:'kissan.png'},{id:3,image:'kissan.png'},{id:4,image:'kissan.png'},{id:5,image:'kissan.png'}]
    const showImage = () =>{
        return  images.map((item) => {
            return (<View>
               <View style={{padding:10}}>
                <Image
                    style={{ resizeMode: 'contain', width: 70, height: 70 }}
                    source={{ uri:`${ServerURL}/images/${item}` }} />
                </View>  
           
            </View>)
        })
    }
    return(<View  style={styles.imageposition}>
         <View style={{padding:10,height:height*0.3}}>
        <Image style={styles.image} source={{ uri:`${ServerURL}/images/${image[0]}` }}/>
        </View>
       <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {showImage()}
        </ScrollView>  
        </View> 
    </View>)
}