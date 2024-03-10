import { ScrollView,View, Text, Dimensions, Image } from "react-native";
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Color";
export default function CircleComponent({heading,categories}) {
    const colorList = ['#dff9fb','#f6e58d','#7ed6df','#f3a683','#f8a5c2']
    const category = [{ categoryid: 1, image: 'kissan.png', name: 'kissan' }, { categoryid: 2, image: 'gems.png', name: 'gems' }, { categoryid: 3, image: 'gems.png', name: 'gems' },{ categoryid: 1, image: 'kissan.png', name: 'kissan' },{ categoryid: 1, image: 'kissan.png', name: 'kissan' },{ categoryid: 1, image: 'kissan.png', name: 'kissan' }]
    const showCategory = () => {
        return categories.map((item) => {
            return (<View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{margin:4,justifyContent:'center',alignItems:'center', width: 100, height: 100, borderRadius: 50,backgroundColor:colorList[parseInt(Math.random()*colorList.length)] }}>
                <Image
                    style={{ resizeMode: 'contain', width: 60, height: 60 }}
                    source={{ uri:`${ServerURL}/images/${item.icon}` }} />
                  
            </View>
            <Text ellipsizeMode="tail" numberOfLines={1} style={{width:90,textAlign:'center'}} >{item.category}</Text>
            </View>
            )
        })
    }

    return (<View>
        <View >
        <Text style={{marginLeft:10,marginVertical:10,color:Colors.black,fontWeight:'bold'}}>{heading}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {showCategory()}
        </ScrollView>   
    </View>
    </View>)
}