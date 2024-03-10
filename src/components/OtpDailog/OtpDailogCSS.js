import { StyleSheet } from "react-native";
import Colors from "../../../assets/Color";
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
   txtbox:{
    borderRadius:10,
    borderColor:Colors.darkGrey,
    borderWidth:1,
    width:40,
    marginRight:10,
    marginLeft:8,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    textAlign:'center',
    paddingLeft:10

   }, 
   txtdirection:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:10
   },
   input:{
    fontSize:18,
    letterSpacing:1
   } 
})
export default styles