import { ChatTeardropDots } from 'phosphor-react-native';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

export const Widget: FC = () => {
    return (
        <>
            <TouchableOpacity style={styles.button}>
                <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight="bold" />
            </TouchableOpacity>
        </>
    );
};
