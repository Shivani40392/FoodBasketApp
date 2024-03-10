import { View,Text,Dimensions,ScrollView } from 'react-native';
import CircleComponent from '../components/CircleComponent';
const { width, height } = Dimensions.get('window')
import TextBox from '../components/TextBox';
import MultipleProductComponent from '../components/MultiProductComponent';
import { useEffect, useState } from 'react';
import { getData, postData } from '../services/ServerServices';
import Button from '../components/Button';
import Colors from '../../assets/Color';
import { useSelector } from "react-redux";
import FloatingCart from '../components/FloatingCart';
export default function Home(){
        const [categories,setCategories]=useState([])
        const [products,setProducts]=useState([])
        const [refresh,setRefresh]=useState(false)
        var cart=useSelector(state=>state.cart)
        var keys=Object.keys(cart)
        const setInitialData=async()=>{
                var result = await getData('userinterface/fetch_all_category')
                setCategories(result.data)
                var res= await postData('userinterface/fetch_all_product_bycategory',{categoryname:'sweet cravings'})
                setProducts(res.data)
                console.log(res.data,"ho")
                
        }
        useEffect(function(){
          setInitialData()
        },[])
        var product = [{productlistid:10,productlistname:'Kissan Fruit Jam',weight:'1Kg',image:'kissan.png',price:240,offerprice:200} ,
        {productlistid:20,productlistname:'Gems',weight:'1Kg',image:'gems.png',price:240,offerprice:200},
        {productlistid:30,productlistname:'Lays',weight:'1Kg',image:'lays.png',price:240,offerprice:200},
        {productlistid:40,productlistname:'Kissan Fruit Jam',weight:'1Kg',image:'kissan.png',price:240,offerprice:200},
        {productlistid:50,productlistname:'Tide',weight:'1Kg',image:'tide.png',price:240,offerprice:200},
        {productlistid:60,productlistname:'Kissan Fruit Jam',weight:'1Kg',image:'kissan.png',price:240,offerprice:200}]      
     return (
        <View>
       
       
        <View  style={{alignItems:'center',marginVertical:10,position:'relative'}}>
        <TextBox width={width*0.96} placeHolder="Search Products Here..." icon={'magnify'}/>
        </View>
         <CircleComponent heading={'Popular Categories'} categories={categories}/>    
         <View><MultipleProductComponent  setRefresh={setRefresh} refresh={refresh} products={products} title={'sweet food'}/>
        { keys?.length>=1? <FloatingCart height={height*0.5}/>:<></>}
         </View>
        
       
       {/* <View style={{marginVertical:10,marignBottom:10}}>
        <Button  title={'Click'} bgColor={Colors.darkGreen} forColor={Colors.white}  />
     </View>*/}
     
        </View>)
}