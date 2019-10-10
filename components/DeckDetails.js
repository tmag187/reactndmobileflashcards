import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

 class DeckDetails extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Text>Deck Detail</Text>
            </View>
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