import { Text, View,Modal,TextInput, } from "react-native"
import styles from "./OtpDailogCSS"
import Button from "../Button"
import Colors from "../../../assets/Color"
import { useRef, useState } from "react"
import { postData } from "../../services/ServerServices"
import AddressDailog from "../AddressDailog"
export default function OtpDailog(props){
    const pin1ref=useRef(null)
    const pin2ref=useRef(null)
    const pin3ref=useRef(null)
    const pin4ref=useRef(null)

    const [pin1,setPin1]=useState()
    const [pin2,setPin2]=useState()
    const [pin3,setPin3]=useState()
    const [pin4,setPin4]=useState()

   const [addressDailogState,setAddressdailogState]=useState(false)
    const [userMobileData,setUserMobileData]=useState([])
    const checkUserMobile=async()=>{
        var userotp=pin1+pin2+pin3+pin4
        

        if(userotp==props.otp){
        var result=await postData('userinterface/add_user_data',{mobileno:props.mobileno})
        setUserMobileData(result.data)
        console.log('xxxxx',userMobileData)
        if(result.status==1){
           var res=await postData('userinterface/check_user_address',{mobileno:props.mobileno})
         
         
           if(res.status==1){ 
            props.setOtpDailog(false)  
            alert('Make payment')     
           }
           else{ 
              
           setAddressdailogState(true);          
           }
        }
        else{
             
            setAddressdailogState(true);   
                         
        }
        }
        else{
            props.setOtpDailog(false)
            alert('Invaild OTP')
        }
    }
    return(<View>
        <Modal visible={props.otpDailog} animationType="slide" transparent={true} >
        <View style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.heading} >Gwalior Basket</Text>
                  <Text style={styles.subheading}> Please Enter Valid OTP</Text>
                    <View style={styles.txtdirection}>
                        <View style={styles.txtbox}>
                        <TextInput
                        ref={pin1ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        onChangeText={(txt)=>setPin1(txt)}
                        style={styles.input}
                        onChange={pin1=>{
                        if(pin1!=''){
                          pin2ref.current.focus()
                        }}}/>
                        </View>

                        <View style={styles.txtbox}>
                        <TextInput
                        ref={pin2ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        style={styles.input}
                        onChangeText={(txt)=>setPin2(txt)}
                        onChange={pin2=>{
                        if(pin2!=''){
                          pin3ref.current.focus()
                        }}}/>
                        </View>
                        <View style={styles.txtbox}>
                        <TextInput
                        ref={pin3ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        style={styles.input}
                        onChangeText={(txt)=>setPin3(txt)}
                        onChange={pin3=>{
                        if(pin3!=''){
                            pin4ref.current.focus()
                         
                        }}}/>
                        </View>
                        <View style={styles.txtbox}>
                        <TextInput
                        ref={pin4ref}
                        keyboardType={'number-pad'}
                        maxLength={1}
                        style={styles.input}
                        onChangeText={(txt)=>setPin4(txt)}
                        onChange={pin4=>{
                        if(pin4!=''){
                            console.log('OTP is working') 
                        }}}/>

                   
                        </View>
                    </View>
                   <Button onPress={checkUserMobile} forColor={Colors.white} bgColor={Colors.darkGreen} title={'Verify OTP'}/>
                </View>
            </View>
           
        </Modal>
        <AddressDailog setotpDailog={props.setOtpDailog} setAddressdailogState={setAddressdailogState} addressDailogState={addressDailogState}  userMobileData={userMobileData}/>
    </View>)
}