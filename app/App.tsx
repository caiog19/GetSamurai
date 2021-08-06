import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationContext, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';

import Register from './src/screens/register';
import Login from './src/screens/Login';
import AccountType from './src/screens/AccountType';
import Service from './src/screens/Service'
import Presentation from './src/screens/Presentation';
import Comments from './src/screens/Comments';
import Cart from './src/screens/Cart';
import NavBar from './src/components/NavBar';
import ProfileConfig from './src/screens/ProfileConfig';

export default function App() {
  const [ loaded ] = useFonts({
    MontBold: require('./assets/assetsFonts/Montserrat-Bold.ttf'),
    MontMed: require('./assets/assetsFonts/Montserrat-Medium.ttf'),
    MontReg: require('./assets/assetsFonts/Montserrat-Regular.ttf')
  })
  const Stack = createStackNavigator();
  
  return (
    
   <NavigationContainer>
     <Stack.Navigator
       screenOptions={{
          headerShown: false
         }}>
           
      <Stack.Screen name="NavBar" component={NavBar}/>

      <Stack.Screen name ="Presentation" component={Presentation}/>

       <Stack.Screen name="Login" component={Login}/>

       <Stack.Screen name ="Register" component={Register}/>

       <Stack.Screen name="AccountType" component={AccountType}/>

       <Stack.Screen name="Service" component={Service}/>

       <Stack.Screen name="Comments" component={Comments}/>

       <Stack.Screen name="Cart" component={Cart}/>

       <Stack.Screen name="ProfileConfig" component={ProfileConfig}/>
       
     </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
