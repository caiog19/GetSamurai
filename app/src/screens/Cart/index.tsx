import React from 'react';
import { Alert, Text, View } from 'react-native'
import Title from '../../components/Title';
import BlueButton from '../../components/BlueButton';
import BackButton from '../../components/BackButton';
import { AlignTitle, AlignButton } from './style';
import { useNavigation } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';

export default function Cart() {
    const navigation = useNavigation();
    return (
        <>
            <View>
                <BackButton />
                <AlignTitle>
                    <Title title="Carrinho"></Title>
                </AlignTitle>
            </View>

            <ScrollView>

            </ScrollView>

            <View>

                <AlignButton>
                    <BlueButton title="Contatar todos" handleOnPress={() => navigation.navigate("null")}></BlueButton>{
                        Alert.alert('Contatar', 'todos foram contatados')
                    }



                </AlignButton>

            </View>

        </>

    );
}