import React from 'react';
import { View } from "react-native";
import { BlueButtonStyle, TextBlueButton } from './style';
import { useForm, Controller } from 'react-hook-form';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const BlueButton = (props: { title: string, handleOnPress: any }) => {

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (

        <BlueButtonStyle onPress={props.handleOnPress}>

            <TextBlueButton>{props.title}</TextBlueButton>

        </BlueButtonStyle>

    );
}
export default BlueButton