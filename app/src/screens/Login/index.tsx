import React from 'react';
import { View, ViewBase,Text, TouchableOpacity, BackHandler, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { EnsoLogo, LoginForm, AlignItems, InputForm, RegisterText, RegisterButton, ForgotPasswordText } from './style';
import { NavigationContext, useNavigation } from '@react-navigation/native';
//import { BlueButtonStyle, TextBlueButton } from '../../components/BlueButton/style';
import BlueButton from '../../components/BlueButton';

import  BackButton  from '../../components/BackButton/index'
import Title from '../../components/Title';

import UserService, {FormLogin} from '../../services/UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login() {
    const navigation = useNavigation();
    const { control, handleSubmit, formState:{errors}, getValues } = useForm({mode: 'onTouched'});

    const onSubmit = (data: FormLogin) => {
        console.log(data);
        UserService.loginUser(data).then(response => {
            setToken('token', response.data.token)
            navigation.navigate("NavBar")
        })
        
    }
    
    async function setToken(name:string, value:string) {
        await AsyncStorage.setItem(name, value)
    }
    
    return (
        <View>
        <BackButton/>
            <AlignItems>
            <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>
            <Title title="Entrar" ></Title>
            </AlignItems>


            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='E-mail'
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        required: 'O e-mail é obrigatório.',
                        pattern: {
                             value: /^\S+@\S+$/i,
                            message: 'Formato de e-mail inválido'
                        },
                    }}
                    name='email'
                    defaultValue=''
                />
                {errors.email && <Text style={{ color:'red'}}>{errors.email.message}</Text>}
            </View>

            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='Senha'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    name='password'
                    defaultValue=''
                />
                {errors.password && <Text style={{ color:'red'}}>{errors.password.message}</Text>}
            </View>
            <RegisterButton>
                <ForgotPasswordText><u>Esqueceu sua senha?</u></ForgotPasswordText>
            </RegisterButton>
            

            <BlueButton title={"Entrar"}  handleOnPress={handleSubmit(onSubmit)}></BlueButton>
            

            <RegisterButton onPress={()=>navigation.navigate("AccountType")}>
                
                <RegisterText>
                    Não tem uma conta? <u>Cadastre-se</u>
                </RegisterText>
            </RegisterButton>
            

        </View>
    )
}