import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function ProfesionalCards() {

    const navigation = useNavigation();

    return (
        
        <View>

                <Card style={{ backgroundColor: "transparent" }}
                    onPress={()=> navigation.navigate("MyServices")}>

                    <Card.Content style={{ backgroundColor: "#C3CBCF", borderRadius: 8, marginTop: '5%' }}>

                    
                        <Title>Marcenaria</Title>

                        <Paragraph>Paulo André</Paragraph>
                        
                    </Card.Content>
                </Card> 

        </View>
    );
}
