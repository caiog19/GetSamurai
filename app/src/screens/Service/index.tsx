import React, { useState, useEffect } from 'react';
import { View, Platform, Text, Image } from 'react-native';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import {  AlignTitle, Description, ProfName, AlignCallProfile } from './style';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5, EvilIcons, Ionicons } from '@expo/vector-icons';
import BlueButton from '../../components/BlueButton';
import { useNavigation } from '@react-navigation/native';
import WhiteButton from '../../components/WhiteButton';
import { block } from 'react-native-reanimated';
import NavBar from '../../components/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useRoute} from '@react-navigation/native';
import ServiceService from '../../services/ServiceService';

export default function Service() {
    const route = useRoute();
    
    const serviceId:number = route.params?.id;

    const [service, setService] = useState();
    useEffect(() => {
        ServiceService.getService(serviceId).then(response => {
            if(response) {
                setService(response.data.service);
            }
        })
    }, [])



    const Stack = createStackNavigator();
    const array = [{
        name: "caio", title: "Marcenaria"
    }]
    const navigation = useNavigation();
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const [nome, setNome] = useState("")
    return (


        <View>
            <BackButton />

            <AlignTitle>

                    {
                        service?(<Title title={service.title}></Title>):(<Title title={'carregando...'}></Title>)
                    }
                    
                

                    <AntDesign name="hearto" size={24} color="black" />
                

            </AlignTitle>



            <AlignCallProfile>

                <FontAwesome5 name="user-circle" size={50} color="black" />
                
                    <Ionicons name="call-outline" size={24} color="black" style={{}} />



            </AlignCallProfile>


            {array.map((profissional, index) => (
                <Text key={index} title={profissional.title}> </Text>
            ))}

            <EvilIcons name="camera" size={24} color="black" onPress={pickImage} />

            {image && <Image source={{ uri: image }} style={{ width: 375, height: 125 }} />}


 
            {
                service?(<Description>{service.description}</Description>):(<Description>carregando...</Description>)
            }
            

            <BlueButton title={"Adicionar ao carrinho"} handleOnPress={() => navigation.navigate("null")}></BlueButton>

            <WhiteButton title={"Ver comentários"} handleOnPress={() => navigation.navigate("Comments")}></WhiteButton>


        </View>


    );
}



