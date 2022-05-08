import React, { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Copyright } from '../Copyright/index';
import successImg from './../../assets/success.png';
import { styles } from './styles';

interface Props {
    onSendAnotherFeedback: () => void;
}

export const Success: FC<Props> = ({ onSendAnotherFeedback }) => {
    return (
        <View style={styles.container}>
            <Image source={successImg} style={styles.image} />

            <Text style={styles.title}>Agradecemos o seu feedback</Text>

            <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
                <Text style={styles.buttonTitle}>Quero enviar outro</Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
};
