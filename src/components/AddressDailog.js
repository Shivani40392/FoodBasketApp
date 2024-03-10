import { View,Modal, Text,TextInput, Alert } from "react-native";
import styles from "./AddressDailogCSS";
import TextBox from "./TextBox";
import Button from "./Button";
import Colors from "../../assets/Color";
import {useState } from "react"
import { postData } from "../services/ServerServices";
import { storeData } from "../storage/AsyncStroage";
export default function AddressDailog(props){
  const [mobileno,setMobileno]=useState(props?.userMobileData[0]?.mobileno)
  const [fullName,setFullName]=useState('')
  const [address,setAddress]=useState('')  
  const [city,setCity]=useState('')
  const [state,setState]=useState('')
  const [zipCode,setZipCode]=useState('')
   const handleClick=async()=>{
    props.setAddressdailogState(false)
    props.setotpDailog(false)
    var body={userid:props?.userMobileData[0]?.userid,phonenumber:props?.userMobileData[0]?.mobileno,fullname:fullName,zipcode:zipCode,city:city,state:state,address:address}
    var result=await postData('userinterface/add_user_interface',body)
    if(result.status){
      console.log(props?.userMobileData[0]?.mobileno)
      await storeData(props?.userMobileData[0]?.mobileno,body)
    }
    else{
      alert('Fail to submit')
    }
   }
    return(<View>
      <Modal visible={props.addressDailogState} animationType="slide" transparent={true} >
          
        <View style={styles.container}>
            <View style={styles.box}>
                  <Text style={styles.heading} >Enter Your Address</Text>
                  <View style={styles.txt}>
                <TextInput placeholder="FullName" onChangeText={(txt)=>setFullName(txt)}/>
                 </View>
                 <View style={styles.txt}>
                 <TextInput placeholder={'Mobile Number'} value={props?.userMobileData[0]?.mobileno} />
                 </View>
                 <View style={styles.txt}>
                 <TextInput placeholder={'Address'} onChangeText={(txt)=>setAddress(txt)}/>
                 </View>
                 <View style={styles.txt}>
                 <TextInput placeholder={'City'} onChangeText={(txt)=>setCity(txt)}/>
                 </View>
                 <View style={styles.txt}>
                 <TextInput placeholder={'State'} onChangeText={(txt)=>setState(txt)}/>
                 </View>
                 <View style={styles.txt}>
                 <TextInput placeholder={'ZipCode'} onChangeText={(txt)=>setZipCode(txt)}/>
                 </View>
                 <Button forColor={Colors.white} bgColor={Colors.darkGreen} title={'Submit'} onPress={handleClick}/>
            </View>           
        </View>
      </Modal>
         
    </View>)
}