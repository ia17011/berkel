import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import { Color, Space, FontWeight } from '../../constants/variables';

export const SNSButton = styled(Button).attrs({
    titleStyle: {
        color: Color.WHITE,
        fontWeight: FontWeight.BOLD,
        marginLeft: Space,
    },
})``;

export const TwitterStyledButton = styled(SNSButton).attrs({
    buttonStyle: {
        backgroundColor: Color.TWITTER_BLUE,
        borderRadius: 24,
        paddingTop: Space * 1.5,
        paddingBottom: Space * 1.5,
    },
})``;
