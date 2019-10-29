import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

 class Deck extends Component {
    render() {
        let { deck, onSelect, decks } = this.props;
        let questCount = deck.questions.length;
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('Details', {deck: deck, decks:decks})} >
                <Text style={styles.item} >{deck.title}</Text>
                <Text>{questCount} questions</Text>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(Deck);

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 44,
  },
})
