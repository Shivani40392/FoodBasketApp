import { StyleSheet } from "react-native";
import Colors from "../../assets/Color";
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    alignSelf:'center',
    top:'25%'
  },
  box:{
   borderColor:Colors.black,
   borderWidth:0.4,
   width:265,
   height:200,
   backgroundColor: '#fff',
   borderRadius:12,
   padding:12
  },
  heading:{
  fontWeight:'bold',
  fontSize:22,
  },
  subheading:{
   marginTop:'8%',

  }, 
  txtBox:{
    borderColor:'#000',
    borderWidth:0.4,
    width:230,
    height: 50,
    justifyContent: 'center',
    marginTop: '4%',
   
  },
  styleBtn:{
    flexDirection:'row',
    marginTop:'4%',
    alignItems:'center'
   },
   btn:{
    
    marginRight:'2%'
   },
   input:{
    fontSize:18,
    letterSpacing:1
   } 
})
export default styles