import { CommonActions } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Dimensions} from 'react-native';
import Colors from "../../assets/Color";
const {width, height} = Dimensions.get('window');
const styles=StyleSheet.create({
    position:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8
    },
  view:{
    width:width*0.96,
    height:height*0.08,
    borderRadius:11,
    backgroundColor:Colors.darkGreen,
    padding:8,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  icon:{
   fontSize:42,
    color:Colors.white,
    marginRight:10
  },
  item:{
   flexDirection:'column',
  
   
  },
  text:{
    fontSize:15,
    color:Colors.white
  },
  cart:{
    fontSize:20,
    color:Colors.white
  },
  arrow:{
    marginTop:4,
    marginLeft:4,
    fontSize:17,
    color:Colors.white
  },
  row:
  {
    flexDirection:'row',
    alignItems:'center'
  }
   
})
export default styles