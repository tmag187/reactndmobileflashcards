import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  Deck from './Deck';

 class Decks extends Component {
    render() {
        let { decks } = this.props;
        return (
            <View>
                {Object.values(decks).map((deck) => (
                 <Deck deck={Object.values(deck)[0]} key={deck} />
                //  <Text>{Object.values(deck)[0].title}</Text>
                ))}
                {/* <Text>{JSON.stringify(Object.values(decks))}</Text> */}
            </View>
        )
    }
}

export default Decks;
