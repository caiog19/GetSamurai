import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInputMask } from 'react-native-masked-text';

export const EnsoLogo = styled.Image`
    width: 59px;
    height: 59px;
    margin-right:5%;
    
`
export const RegisterForm = styled.Text`

    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    display: flex;
    align-items: center;
`
export const AlignItems = styled.Text`
        display: flex;
        align-items: center;
        margin-top: 5%;
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

export const TextInputMaskStyle = styled(TextInputMask)`
    width: ${wp('90%')};
    padding: 4%;
    margin: 3% auto;
    
    color: #000000;
    border: 1px solid #687C87;
    border-radius: 8;
`
