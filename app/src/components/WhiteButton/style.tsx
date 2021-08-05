import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const WhiteButtonStyle = styled.TouchableOpacity`
width: ${wp('90%')};
padding: 4%;
margin-right:5%;

background-color: #ffffff;

margin-top: 7%;
margin-left: 5%;
border-radius: 8;

`
export const TextWhiteButton = styled.Text`
    font-weight: bold;
    color: #284B63;
    font-size: 18px;
    text-align: center;
    font-family: MontBold;
`

