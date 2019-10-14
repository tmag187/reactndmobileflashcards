import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import Question from './Question';

export default class Quiz extends Component {
    render() {
        return (
            <View>
                <Text>Quiz</Text>
                <Question />
            </View>
        )
    }
}
