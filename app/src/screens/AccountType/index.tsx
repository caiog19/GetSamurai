import React from 'react';
import { View, ViewBase, Text, TouchableOpacity, BackHandler, Button, TouchableHighlight } from 'react-native';

import { EnsoLogo, AccountForm, AlignItems,  AccountText, LoginText, LoginButton, ExplainText } from './style';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { BsChevronLeft } from "react-icons/bs";
import { IconBase } from 'react-icons/lib';
import { AntDesign } from '@expo/vector-icons';
import  BackButton  from '../../components/BackButton/index'
import { BlueButtonStyle, TextBlueButton } from '../../components/BlueButton/style';
import BlueButton from '../../components/BlueButton';
import Title from '../../components/Title';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AccountType() {
    
    const navigation = useNavigation();
    

    async function UseRole(role:string){
        
        await AsyncStorage.setItem('role', role)
        navigation.navigate('Register', {role} )

    
    }
    
    return (

        <View>

           <BackButton/> 
 
            <AlignItems>

                <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>

                <Title title="Escolha um tipo de conta"></Title>
                
            </AlignItems>

            <BlueButton title='Cliente' handleOnPress={() => UseRole('isClient')}/>
                
           
            <ExplainText>
                <Text>
                    Com uma conta de Cliente, você pode contratar serviços.
                </Text>
            </ExplainText>

            
            <BlueButton title='Profissional' handleOnPress={() => UseRole('isProfesional')}/>

            <View>
                <ExplainText>
                    Com uma conta de Profissional, você pode tanto fornecer, quanto contratar serviços.
                </ExplainText>
            </View>

            <LoginButton onPress={() => navigation.navigate("Login")}>
                <LoginText>Já tem uma conta? <u>Entrar</u></LoginText>

            </LoginButton>

        </View>
        
    )
}

