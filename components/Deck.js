import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 class Deck extends Component {
    render() {
        let { deck } = this.props;
        let questCount = deck.questions.length;
        return (
            <TouchableOpacity style={styles.container} >
                <Text style={styles.item} >{deck.title}</Text>
                <Text>{questCount} questions</Text>
            </TouchableOpacity>
        )
    }
}

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

export default Deck;