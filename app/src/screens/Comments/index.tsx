import React from 'react';
import { View, Text } from 'react-native';
import Title from '../../components/Title';
import BackButton from '../../components/BackButton';
import { TitleAlign, CommentWriting } from './style';
import { useState } from 'react';
import { Card } from 'react-native-elements';
import BlueButton from '../../components/BlueButton';

export default function Comments() {
    const[Comment, SetComment] = useState("")

    return (

        <View>
            <BackButton />

            <TitleAlign>
                <Title title="Comentários" ></Title>
            </TitleAlign>

            <CommentWriting 
            placeholder='Escreva seu comentário...'                            
            value={Comment}                           
            onChangeText={text =>SetComment(text)}                            
            />
            <BlueButton title="Comentar" handleOnPress={null}></BlueButton>

            <Card>
                {Comment}
            </Card>

        </View>
    );
}
