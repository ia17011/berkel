import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TwitterStyledButton } from './SNSButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

type StyleProps = {
    style?: object;
    titleStyle?: object;
};

type Props<T> = {
    onDone?: T;
};

type Component<T = any> = React.FC<Props<T> & StyleProps>;

export const TwitterButton: Component = props => (
    <TwitterStyledButton
        title="Sign in with Twitter"
        icon={<Ionicons name="logo-twitter" size={20} color="white" />}
        onPress={props.onDone}
        style={{
            width: wp('70%'),
        }}
    />
);