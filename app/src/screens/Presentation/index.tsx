import React from 'react';
import { View, ViewBase,Text, TouchableOpacity, BackHandler, Button, Image } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { EnsoLogo, PresentationTitle, AlignItems, ManWorking, ImgText, ButtonLogin, LoginText, VisitorButton, VisitorText  } from './style';
import BlueButton from '../../components/BlueButton';
export default function Presentation(){

    const navigation = useNavigation();
    

    return(
        <View>
            <AlignItems>
            <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>
            <PresentationTitle>GetSamurais</PresentationTitle>
            </AlignItems>

            <View>
            <ManWorking source={require('../../../img/imgpres.png')}/>
            </View>
            <ImgText>Encontre seu próximo serviço</ImgText>
            <BlueButton title={"Cadastre-se"}  handleOnPress={()=>navigation.navigate("AccountType")}></BlueButton>

        <View>
            <ButtonLogin onPress={()=>navigation.navigate("Login")}>
                <LoginText>Entrar</LoginText>
            </ButtonLogin>

        </View>

        <View>
        <VisitorButton onPress={()=>navigation.navigate("NavBar")}>
            <VisitorText>Continuar como visitante </VisitorText>
        </VisitorButton>
        </View>

        </View>
    )
}