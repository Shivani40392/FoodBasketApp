import {StyleSheet, View, Modal, Text, TextInput} from 'react-native';
import styles from './NumberDailogCSS';
import Button from "./Button";
import Colors from '../../assets/Color';
import { useState } from 'react';
import OtpDailog from './OtpDailog/OtpDailog';
export default function NumberDailog(props){
    const [otpDailog,setOtpDailog]=useState(false)
    const [mobileno,setMobileno]=useState('')
    const [otp,setOtp]=useState()
    const handleClose=()=>{
        props.setStatus(false)
    }
   
    const generateotp=()=>{
   var otp=(parseInt(Math.random()*8999)+1000)
    console.log(otp)
    setOtp(otp)
    props.setStatus(false)
    setOtpDailog(true)
    }
    return(<View>
        
        <Modal visible={props.status} animationType="slide" transparent={true} >
            <View style={styles.container}>
                <View style={styles.box}>
                  <Text style={styles.heading} >Gwalior Basket</Text>
                  <Text style={styles.subheading}> Please Submit Your Mobile Number.</Text>
                   <View style={styles.txtBox}>
                    <TextInput onChangeText={(txt)=>setMobileno(txt)} style={styles.input} ></TextInput>
                  </View>
                  <View style={styles.styleBtn}>
                  <View style={styles.btn}><Button onPress={generateotp} title={'Submit'} width={110} bgColor={Colors.darkGreen} forColor={Colors.white}/></View>
                  <Button onPress={handleClose} title={'Cancel'} width={110} bgColor={Colors.darkGreen} forColor={Colors.white}/>
                  </View>
                </View>
            </View>
           
        </Modal>
    {otpDailog && <OtpDailog otpDailog={otpDailog} setOtpDailog={setOtpDailog} mobileno={mobileno} otp={otp} />}
    </View>)
}