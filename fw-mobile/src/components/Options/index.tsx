import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Copyright } from '../Copyright';
import { FeedbackType } from '../Widget/index';
import { feedbackTypes } from './../../utils/feedbackTypes';
import { Option } from './../Option/index';
import { styles } from './styles';

interface Props {
    onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export const Options: FC<Props> = ({ onFeedbackTypeChanged }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deixe seu feedback</Text>
            <View style={styles.options}>
                {Object.entries(feedbackTypes).map(([key, value]) => (
                    <Option
                        key={key}
                        title={value.title}
                        image={value.image}
                        onPress={() => {
                            onFeedbackTypeChanged(key as FeedbackType);
                        }}
                    />
                ))}
            </View>
            <Copyright />
        </View>
    );
};
