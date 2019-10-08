import React, { Component } from 'react'
import { View, Text } from 'react-native';

 class Deck extends Component {
    render() {
        let { deck } = this.props;
        let questCount = deck.questions.length;
        return (
            <View>
                <Text>{deck.title}</Text>
                <Text>{questCount} questions</Text>
            </View>
        )
    }
}

export default Deck;