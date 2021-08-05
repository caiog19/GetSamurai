import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { EvilIcons } from '@expo/vector-icons';

export const SearchBarContainer = styled.View`
    width: ${wp('90%')};
    height: ${hp('5%')};
    
    background-color: #cfd7db;
    
    border-radius: 10;
    
    
`
export const SearchTextInput = styled.TextInput`
    width: ${wp('73%')};
    height: ${hp('5%')};
    border-radius: 10;
    font-family: MontReg;
    color: black;
    margin-left: 2%;
    
     
`

export const AlignItens = styled.Text`
        display: flex;
        align-items: center;
        margin-left: 5%;
        margin-top: 5%;
        
`
export const AlignSearchAndIcon = styled.Text`
    display: flex;
    align-items: center;
    margin-left: 2%;
`

