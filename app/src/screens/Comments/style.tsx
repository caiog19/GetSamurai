import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const TitleAlign = styled.Text`
    display: block;
    margin-left: 5%;
`
export const CommentWriting = styled.TextInput`
    width: ${wp('90%')};
    padding: 4%;
    margin: 3% auto;
    
    color: #000000;
    border: 1px solid #687C87;
    border-radius: 8;
`