import { View,Text,Dimensions,ScrollView } from 'react-native';
import Delivery from '../components/DeliveryCart/Delivery';
import BillDetails from '../components/DeliveryCart/BillDetails';
import FeedingIndia from '../components/DeliveryCart/FeedingIndia';
import DeliveryInstruction from '../components/DeliveryCart/DeliveryInstruction';
import Tip from '../components/DeliveryCart/Tip';
import { useState } from 'react';
const {width,height}=Dimensions.get('window')
export default function DeliveryCart(){
  const [refresh,setRefresh]=useState('false')
  return(<View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{alignItems:'center'}}>
   <Delivery setRefresh={setRefresh} refresh={refresh}/>
   <BillDetails/>
   <FeedingIndia/>
   <DeliveryInstruction/>
   <View style={{marginBottom:10}}>
   <Tip />
   </View>
   </View>
   </ScrollView>
  </View>)
}