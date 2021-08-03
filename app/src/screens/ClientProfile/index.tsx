import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons } from '@expo/vector-icons';
import { Title, AlignIcon, AlignCamera, Circle } from './style';
import { useNavigation } from '@react-navigation/native';
import CgProfile from 'react-icons/cg'


export default function Profile(props:string) {

  const [image, setImage] = useState(null);
  const navigation = useNavigation();
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (

    <View>

      <View>
        <Title>Seu Perfil</Title>
      </View>
      <AlignIcon>
        <EvilIcons name="gear" size={24} color="black" onPress={() => navigation.navigate("null")} />
      </AlignIcon>

 

      <AlignCamera>
        <EvilIcons name="camera" size={24} color="black" onPress={pickImage}/>

        {image && <Circle source={{ uri: image }} style={{ width: 80, height: 80 }} />}


        <Text>  </Text>
</AlignCamera>
      

    </View>

  );

}