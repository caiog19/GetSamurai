import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const EnsoLogo = styled.Image`
    width: 59px;
    height: 59px;
    margin-right:5%;
    
`
export const AlignItems = styled.Text`
        display: flex;
        align-items: center;
        margin-top: 5%;
        margin-left: 5%;
        padding:10px;
        
`
export const AccountForm = styled.Text`

    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    display: flex;
    align-items: center;
`
export const AccountText = styled.Text`
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    font-family: MontBold;
`
export const LoginText = styled.Text`

    color: #284B63;
    font-size: 13px;
    text-align: initial;
    font-family: MontMed;

`
export const LoginButton = styled.TouchableOpacity`
    width: ${wp('90%')};
    padding: 4%;
    margin-right:5%;

    background-color: transparent;
    margin-left: 5%;
    margin-top: 5%;

`
export const ExplainText = styled.Text`
    color: #284B63;
    font-size: 13px;
    text-align: initial;
    font-family: MontMed;
    margin-left: 5%;
`
