import React, { FC } from 'react';
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}

export const Option: FC<Props> = ({ title, image, ...rest }) => {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};
