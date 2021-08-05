import React from 'react';
import { useState } from 'react';

import { View, SafeAreaView, TextInput, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { StatusBar } from 'expo-status-bar'
import { SearchBarContainer, SearchTextInput, AlignItens, AlignSearchAndIcon} from './style';

import { Button } from 'react-native-elements/dist/buttons/Button';
import { Input } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';
//

import Results from '../../Results/index';


export default function SearchBar() {
      const [searchText, setSearchText] = useState('');
      const [list, setList] = useState(Results);;
      
  return (
    <View>

    
    <AlignItens>

    <SearchBarContainer>
    <AlignSearchAndIcon>
    <EvilIcons name="search" size={24} color="black" onPress={()=>null} />
      <SearchTextInput 
      placeholder='Pesquisar'
      placeholderTextColor="black"
      value = {searchText}
      onChangeText={(t:any) => setSearchText(t)}>
        
      </SearchTextInput>
      </AlignSearchAndIcon>

    </SearchBarContainer>

    </AlignItens>


     </View>


  );

}




