import React from 'react';
import { WhiteButtonStyle, TextWhiteButton } from './style';

const WhiteButton = (props: { title: string, handleOnPress: any }) => {

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (

        <WhiteButtonStyle onPress={props.handleOnPress}>

            <TextWhiteButton>{props.title}</TextWhiteButton>

        </WhiteButtonStyle>

    );
}
export default WhiteButton