import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import BackButton from '../../components/BackButton';
import Title from '../../components/Title';
import { useForm, Controller } from 'react-hook-form';
import { InputForm, TextInputMaskStyle } from '../Register/style'
import WhiteButton from '../../components/WhiteButton';
import { AlignTitle, AlignWhiteButton } from './style';
import BlueButton from '../../components/BlueButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function ProfileConfig(this: any) {

    /*
    let _logOut
    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Presentation')
    }
*/
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });
    const onSubmit = (data: FormData) => {
        console.log(data);
    }
    const navigation = useNavigation();
    return (

        <View>
            <BackButton />
            <AlignTitle>
                <Title title="Configurações"></Title>
            </AlignTitle>
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

            <BlueButton title="Salvar alterações" handleOnPress={null}></BlueButton>

            <AlignWhiteButton>

                <WhiteButton title="Sair do Aplicativo" handleOnPress={()=>
                Alert.alert('Sair', 'Você quer sair?',[
                    {text: 'Cancelar', onPress: ()=>{return null}},
                    {text: 'Confirmar', onPress: () => {
                        AsyncStorage.clear();
                        navigation.navigate('Presentation')
                    }},
                ],
                { cancelable: false }
                )
                
                }></WhiteButton>
            </AlignWhiteButton>


        </View>

    );
}