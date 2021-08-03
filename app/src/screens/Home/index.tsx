import React from 'react';
import { View, ViewBase,Text, TouchableOpacity, BackHandler, Button, FlatList, StyleSheet } from 'react-native';
import { Title, Cart, AlignTitle, TitleText } from './style';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import Results from '../../Results';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfesionalCards from '../../components/ProfesionalCards';
import { ScrollView } from 'react-native-gesture-handler';

export default function Home(this:any){
     const navigation = useNavigation();
    return(
        <View>
       

            <AlignTitle>
            <Title>GetSamurais</Title>

        <Cart onPress={()=>navigation.navigate('null')}>
            <TitleText> Carrinho </TitleText>
        </Cart>
            </AlignTitle>
            <SearchBar></SearchBar>

    <ProfesionalCards></ProfesionalCards>
    <ProfesionalCards></ProfesionalCards>
    <ProfesionalCards></ProfesionalCards>
    <ProfesionalCards></ProfesionalCards>
    <ProfesionalCards></ProfesionalCards>
    <ProfesionalCards></ProfesionalCards>

</View>
        
    );
}


