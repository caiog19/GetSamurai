import React from 'react';
import { BlueButtonStyle, TextBlueButton } from './style';

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