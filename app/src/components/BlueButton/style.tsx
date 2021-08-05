import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const BlueButtonStyle = styled.TouchableOpacity`
width: ${wp('90%')};
padding: 4%;
margin-right:5%;

background-color: #284B63;

margin-top: 7%;
margin-left: 5%;
border-radius: 8;

`
export const TextBlueButton = styled.Text`
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    font-family: MontBold;
`

