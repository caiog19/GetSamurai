import React from 'react';
import { View, ViewBase,Text, TouchableOpacity, BackHandler, Button, Image } from 'react-native';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { EnsoLogo, PresentationTitle, AlignItems, ManWorking, ImgText, ButtonLogin, LoginText, VisitorButton, VisitorText  } from './style';
import BlueButton from '../../components/BlueButton';
import Title from '../../components/Title';
import WhiteButton from '../../components/WhiteButton';

export default function Presentation(){


    const navigation = useNavigation();
    

    return(
        <View>
            <AlignItems>
            <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>
            <Title title="GetSamurais"></Title>
            </AlignItems>

            <View>
            <ManWorking source={require('../../../img/imgpres.png')}/>
            </View>
            <ImgText>Encontre seu próximo serviço</ImgText>
            <BlueButton title={"Cadastre-se"}  handleOnPress={()=>navigation.navigate("AccountType")}></BlueButton>

        <View>
            <WhiteButton title="Entrar" handleOnPress={()=>navigation.navigate("Login")}></WhiteButton>

        </View>

        <View>
        <VisitorButton onPress={()=>navigation.navigate("NavBar")}>
            <VisitorText>Continuar como visitante </VisitorText>
        </VisitorButton>
        </View>

        </View>
    )
}