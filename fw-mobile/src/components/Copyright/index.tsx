import React, { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Copyright: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Feito por Igor Trentini</Text>
        </View>
    );
};
