import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const AlignTitle = styled.Text`
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
    
`
export const ProfName = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 18px;
    font-family: MontMed;
`
export const Description = styled.Text`
    display: block;
    text-align: initial;
    background-color: #C3CBCF;
    width: 375;
    height: 125;
    margin-top: 5%;
    font-family: MontMed;
`
export const AlignCallProfile = styled.Text`
    display:flex;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 5%;
    align-items: center;
`

