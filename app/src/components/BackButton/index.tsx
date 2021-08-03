import React, { useEffect, useState } from "react";
import { View, Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { NavigationContext, useNavigation } from '@react-navigation/native';
import { ViewBackButton } from "./style";

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <ViewBackButton> 
        
        <AntDesign.Button name="left" size={24} color="grey" backgroundColor="transparent" onPress={() => navigation.goBack()} />
        
        </ViewBackButton>
   );

}