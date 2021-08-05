import React from 'react';
import { View, ViewBase, Text, TouchableOpacity, BackHandler, Button, FlatList, StyleSheet } from 'react-native';
import { Title, AlignTitle, TitleText } from './style';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import Results from '../../Results';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfesionalCards from '../../components/ProfesionalCards';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Cart from '../Cart';

export default function Home(this: any) {
    const navigation = useNavigation();
    const array = [{ name: "Caio", title: "Marcenaria" },{ name: "Caio", title: "Marcenaria" },{ name: "Caio", title: "Marcenaria" },{ name: "Caio", title: "Marcenaria" },{ name: "Caio", title: "Marcenaria" },{ name: "Caio", title: "Marcenaria" }, ]
    return (
        <>
            <View style={{marginBottom:"3%"}}>

            
                <AlignTitle>
                    <Title>GetSamurais</Title>

                    <Ionicons name="cart-outline" size={24} color="black" onPress={()=>navigation.navigate("Cart")} />
                        
                </AlignTitle>
                <SearchBar></SearchBar>
            </View>

            <ScrollView>
                {array.map((profissional, index) => (
                    <ProfesionalCards key={index} title={profissional.title} name={profissional.name} > </ProfesionalCards>
                ))}

            </ScrollView>

        </>

    );
}


