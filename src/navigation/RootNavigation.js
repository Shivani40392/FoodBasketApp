import React,{useState,useEffect} from 'react';
import Home from '../screens/Home';
import Products from '../screens/Products';
import MyProfile from '../screens/MyProfile';
import Selectedproduct from '../screens/SelectedProduct';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {View,Image,Text} from 'react-native'
import AppHeader from '../components/AppHeader';
import { NavigationContainer } from '@react-navigation/native';
import DeliveryCart from '../screens/DeliveryCart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getKey,getStoreData } from '../storage/AsyncStroage';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function RootNavigation() {

  const [user, setUser] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const mobileno = await getKey();
        const userData = await getStoreData(mobileno);
        setUser(userData);
      } catch (error) {
        // Handle any errors that might occur during the data fetching process
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); 

  const ProjectDrawer = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen  name="Home" component={Home} options={{headerShown: false,
         
         drawerIcon:()=><MCI name={"home-city"} size={24} />,
         
         }} />

        <Drawer.Screen name="Products" component={Products} options={{headerShown: false,
         drawerIcon:()=><MCI name={"car"} size={24} />,
        }} />
   
           </Drawer.Navigator>
    );
  };




  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{display:'flex',padding:20,alignItems:'center',flexDirection:'column'}}>
        <Image  style={{marginBottom:5,borderRadius:50,resizeMode:'contain',width:100,height:100}}
        source={require('../../assets/alice.jpg')}/>
         <Text style={{fontWeight:'bold'}}>{user.fullname}</Text> 
        <Text>+91 {user.phonenumber}</Text> 
        <Text style={{fontSize:12}}>{'ss@gmail.com'}</Text>
        </View>
        <DrawerItemList {...props}/>
          <DrawerItem
            label="My Profile"
            onPress={()=>props.navigation.navigate('MyProfile')}
            icon={()=><MCI name={"account-box"} size={24}  />}
          />
          <DrawerItem
            label="Settings"
            icon={()=><MCI name={"account-settings"} size={24} />}
          />

          <DrawerItem label="Logout"  icon={()=><MCI name={"logout"} size={24} />} />
        
      </DrawerContentScrollView>
    );
  };


  return (
    <NavigationContainer>
  <Stack.Navigator
   initialRouteName={"Home1"}
     >
      <Stack.Screen name="Home1"  component={ProjectDrawer}  options={{
          header: AppHeader,
        }} />
      <Stack.Screen name="Products" component={Products} options={{
          header: AppHeader,
        }}   />
        <Stack.Screen name="MyProfile" component={MyProfile} options={{headerShown: true}} />
        <Stack.Screen name="SelectedProduct" component={Selectedproduct} options={{headerShown: true}} />
        <Stack.Screen name="DeliveryCart" component={DeliveryCart} options={{headerShown: true}} />
        <Stack.Screen name="AppHeader" component={AppHeader} options={{headerShown: false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

