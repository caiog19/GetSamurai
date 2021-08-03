import React from 'react';
import { useState } from 'react';

import { View, SafeAreaView, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { StatusBar } from 'expo-status-bar'
import { SearchBarContainer, SearchTextInput, AlignItens,} from './style';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
//
import ListItem from '../../components/ListItem';
import Results from '../../Results/index';


export default function SearchBar() {
      const [searchText, setSearchText] = useState('');
      const [list, setList] = useState(Results);;
      
  return (
    <View>

    
    <AlignItens>

    <SearchBarContainer>
  
      <SearchTextInput 
      placeholder='Pesquisar'
      placeholderTextColor="black"
      value = {searchText}
      onChangeText={(t) => setSearchText(t)}>
        
      </SearchTextInput>
    </SearchBarContainer>
    </AlignItens>


     </View>


  );

}




