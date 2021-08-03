import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiHome } from 'react-icons/fi';
import { FiHeart } from 'react-icons/fi'
import { BsKanban } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'

import Home from '../../screens/Home';
import MyServices from '../../screens/MyServices';
import Favorites from '../../screens/Favorites';
import Profile from '../../screens/ClientProfile';
import { State } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

function NavBar(){

    return(
      <Tab.Navigator tabBarOptions={{showLabel: false}}>
  
        

          <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color, size}) => (<FiHome color="#284B63" size={size}/>)}} />
         <Tab.Screen name="MyServices" component={MyServices} options={{tabBarIcon:({color, size }) => (<BsKanban color="#284B63" size={size}/>)}} />


         <Tab.Screen name="Favorites" component={Favorites} options={{tabBarIcon:({color, size}) => (<FiHeart color="#284B63" size={size}/>)}}/>

         <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({color, size}) => (<FiUser color="#284B63" size={size}/>)}}/>

         
      </Tab.Navigator>
      
    );
  }

export default NavBar
