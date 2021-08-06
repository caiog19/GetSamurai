import React, { useEffect } from 'react';
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
import ServiceService from '../../services/ServiceService';
import { useState } from 'react';

export default function Home() {
    const navigation = useNavigation();

    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        ServiceService.listServices().then(response => {
            if(response) {
                setServices(response.data.services);
            }
        })
    }, [services])

    function handleNavigate(id:number) {
        console.log(id);
        navigation.navigate("Service", {id});
    }

    
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
                {services.map((data, id) => {return (
                    <ProfesionalCards  key={id} title={data.title} name={data.User.name} id={data.id}></ProfesionalCards>
                )} )}

            </ScrollView>
            

        </>

    );
}


