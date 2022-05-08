import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme/index';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}

export const FeedbackButton: FC<Props> = ({ isLoading, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            {isLoading ? (
                <ActivityIndicator color={theme.colors.text_on_brand_color} />
            ) : (
                <Text style={styles.title}>Enviar Feedback</Text>
            )}
        </TouchableOpacity>
    );
};
