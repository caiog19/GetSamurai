import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const EnsoLogo = styled.Image`
    width: 59px;
    height: 59px;
    margin-right:5%;
    
`
export const PresentationTitle = styled.Text`
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
        margin-top: 10%;
        margin-left: 5%;
        padding:10px;
        
`
export const ManWorking = styled.Image`
    width: 305;
    height: 331;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export const ImgText = styled.Text`
     font-weight: bold;
    color: #000000;
    font-size: 18px;
    font-family: MontBold;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
export const ButtonLogin = styled.TouchableOpacity`
    width: ${wp('100%')};
`
export const LoginText = styled.Text`

    color: #284B63;
    font-size: 17px;
    font-family: MontBold;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;

`
export const VisitorButton = styled.TouchableOpacity`
    width: ${wp('100%')};
`
export const VisitorText = styled.Text`

    color: #284B63;
    font-size: 13px;
    font-family: MontMed;
    margin-top: 5%;
    margin-left: 10%;
    

`