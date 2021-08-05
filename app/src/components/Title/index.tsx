import React from 'react'
import {TitleStyle} from './style';
import {View} from 'react-native'

export default function Title(props:{title:string}){
    return(
        
        <TitleStyle>{props.title}</TitleStyle>

    );
    
}