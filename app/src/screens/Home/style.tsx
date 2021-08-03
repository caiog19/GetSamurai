import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Title = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    display: flex;
    align-items: center;
    margin-top: 10%;
    margin-left: 5%;
`
export const Cart = styled.TouchableOpacity`
    width: ${wp('90%')};
    padding: 4%;
    margin-right:5%;

    background-color: transparent;
    margin-left: 16%;
    margin-top: 13%;
`
export const AlignTitle = styled.Text`
    display: flex;
    align-items: center;
`
export const TitleText = styled.Text`
    font-family: MontReg;
    color: #284B63;
`