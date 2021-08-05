import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const Title = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 30px;
    font-family: MontBold;
    margin-top: 5%;
    margin-left: 5%;
    
`
export const AlignIcon = styled.Text`
    display: block;
    text-align: right;
    margin-right: 5%;
    
`
export const AlignCamera = styled.Text`
    display: flex;
    align-items: left;
    margin-left: 5%;
    
`
export const Circle = styled.Image`
    border-radius: 50%;
`
export const DescriptionBackGround = styled.Text`
    width: 375;
    height: 237;
    margin-top: 5%;
    background-color: #C3CBCF;
`
export const DescriptionContainer = styled.Text`
    display: flex;
    
`
export const DescriptionInput = styled.TextInput`
    width: 335;
    height: 155;
    text-align:start;
      
`