import { StyleSheet } from "react-native";
import Colors from "../../assets/Color";
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    alignSelf:'center',
    top:'6%'
  },
  box:{
   borderColor:Colors.black,
   borderWidth:0.4,
   width:265,
   backgroundColor: '#fff',
   borderRadius:12,
   padding:15
  },
  heading:{
  fontWeight:'bold',
  fontSize:26,
  color:Colors.black
  },
  txt:{
    height:50,
    borderColor:Colors.darkGrey,
    borderWidth:0.8,
    marginBottom:5


  }
  
})
export default styles