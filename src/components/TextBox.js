import { useState } from 'react';
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Colors from '../../assets/Color';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
const TextBox = ({ placeHolder, icon, error,width, password = false, onFocus = () => { } }) => {
    const [isFocus, setIsFocus] = useState(false)
    const [isopen, setIsOpen] = useState(false)

    return (
        <View>
            <View onBlur={() => setIsFocus(false)} onFocus={() => { onFocus(); setIsFocus(true) }} style={{ padding: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderColor: isFocus ? Colors.darkGreen : error ? Colors.red : Colors.darkGrey, borderRadius: 5, borderWidth: 1,width: width }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icons name={password ? 'key-variant' : icon} style={{ marginRight: 10, fontSize: 26 }} />
                    <TextInput secureTextEntry={isopen ? false : true} placeholder={placeHolder} style={{ fontSize: 18 }} />
                </View>
                {password ? isopen ? <Icons onPress={() => setIsOpen(false)} name={'eye'} style={{ marginRight: 10, fontSize: 26 }} /> : <Icons onPress={() => setIsOpen(true)} name={'eye-off'} style={{ marginRight: 10, fontSize: 26 }} /> : <></>}
            </View>
            {!error ? <></> : <Text style={{ color: Colors.red, fontWeight: 700, margin: 3 }}>{error}</Text>}
        </View>)
}
export default TextBox