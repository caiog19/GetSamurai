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

export default function AccountType() {
    
    const navigation = useNavigation();
    
    function UseRole(role:string){

        navigation.navigate('Register', {role} )
    
    }
    
    return (

        <View>

           <BackButton/> 
 
            <AlignItems>

                <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>

                <AccountForm>Escolha um tipo de conta</AccountForm>
                
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

