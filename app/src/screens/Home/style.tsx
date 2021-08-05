import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Title = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    display: flex;
    align-items: center;
    margin-left: 5%;
`
export const AlignTitle = styled.Text`
    display:flex;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 5%;
    align-items: center;

`
export const TitleText = styled.Text`
    font-family: MontReg;
    color: #284B63;
`