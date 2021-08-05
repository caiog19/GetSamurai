import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const EnsoLogo = styled.Image`
    width: 59px;
    height: 59px;
    margin-right:5%;
    
`

export const LoginForm = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    
`
export const AlignItems = styled.Text`
        display: flex;
        align-items: center;
        margin-top: 8%;
        margin-left: 5%;
        padding:10px;
        
`
export const InputForm = styled.TextInput`
    width: ${wp('90%')};
    padding: 4%;
    margin: 3% auto;
    
    color: #000000;
    border: 1px solid #687C87;
    border-radius: 8;
`

export const RegisterButton = styled.TouchableOpacity`
    width: ${wp('90%')};
    padding: 4%;
    margin-right:5%;

    background-color: transparent;
    margin-left: 5%;
    border-radius: 8;

`
export const RegisterText = styled.Text`

    color: #284B63;
    font-size: 13px;
    text-align: initial;
    font-family: MontMed;

`

export const ForgotPasswordText = styled.Text`
    color: #284B63;
    font-size: 13px;
    text-align: initial;
    font-family: MontMed;

`
