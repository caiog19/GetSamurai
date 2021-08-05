import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function ProfesionalCards(props:{title:string, name:string}) {

    const navigation = useNavigation();

    return (
        
        <View>

                <Card style={{ backgroundColor: "transparent", marginLeft:'5%',borderRadius: 8,marginRight:'5%', marginTop: '5%' }}
                    onPress={()=> navigation.navigate("Service")}>

                    <Card.Content style={{ backgroundColor: "#C3CBCF", borderRadius: 8 }}>
                    
                        <Title>{props.title}</Title>

                        <Paragraph> {props.name} </Paragraph>
                        
                    </Card.Content>
                </Card> 

        </View>
    );
}
