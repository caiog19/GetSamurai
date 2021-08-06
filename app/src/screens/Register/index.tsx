import React from 'react';
import { View, ViewBase, Text, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInputMask } from 'react-native-masked-text';
import { InputForm, EnsoLogo, AlignItems, TextInputMaskStyle } from './style'
import { BsChevronLeft } from "react-icons/bs";
import { NavigationContext, useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import  BackButton  from '../../components/BackButton/index'
import BlueButton from '../../components/BlueButton';
import Title from '../../components/Title';


export default function Register() {
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });
    const navigation = useNavigation();
    const onSubmit = (data: FormData) => {
        
        console.log(data);
        navigation.navigate('Login')
    }

    const route = useRoute();
    
    const role = route.params?.role;
    console.log(role)

    interface FormData {

        fullName: string;
        email: string;
        password: string;
        confirmPassword: string;
        phoneNumber: number;
    }

    return (
        <View>
            
                <BackButton/>
            


            <AlignItems>
                <EnsoLogo source={require('../../../assets/enso23.png')}>
                </EnsoLogo>
                <Title title="Cadastro"></Title>

            </AlignItems>

            <View>

                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm

                            placeholder='Nome Completo'
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        required: 'O nome é obrigatório.',
                        
                    }}

                    name='fullName'
                    defaultValue=''
                />
                {errors.fullName && <Text style={{ color: 'red' }}>{errors.fullName.message}</Text>}  
            </View>

            <View>    
                 <Controller  
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <TextInputMaskStyle
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99)'
                            }}
                            value={value}
                            placeholder='Celular ex: (21)99999-9999'
                            onBlur={onBlur}

                            onChangeText={
                                (value: any) => onChange(value)
                            }
                        />
                    )}
                    rules={{
                        required: 'O número de celular é obrigatório.',
                    }}
                    name='phoneNumber'
                    defaultValue=''
                />
                {errors.phoneNumber && <Text style={{ color: 'red' }}>{errors.phoneNumber.message}</Text>} 
            </View>                                                                                      
                    
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
                {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
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
                {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
            </View>
            <View>

                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='Confirme sua senha'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        validate: {
                            matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || 'As senhas não coincidem..';
                            }
                        }
                    }}
                    name='confirmPassword'
                    defaultValue=''
                />
                {errors.confirmPassword && <Text style={{ color: 'red' }}>{errors.confirmPassword.message}</Text>}
            </View>
            
            <BlueButton title={"Confirmar"}  handleOnPress={handleSubmit(onSubmit)}></BlueButton>

        </View>

    )
}