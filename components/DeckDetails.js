import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

 class DeckDetails extends Component {

    submit = () => {
        
    }

    takeQuiz = () => {
      const { params } = this.props.navigation.state;
      let deck = params.deck;
      let decks = params.decks;
      this.props.navigation.navigate('Quiz', {deck:deck, decks:decks}); 
    }

    addQuestion = () => {
      const { params } = this.props.navigation.state;
      let deck = params.deck;
      let deckName = deck.title;
      let decks = params.decks;
      this.props.navigation.navigate('AddQuestion', {deckName:deckName, decks:decks}); 
    }

    render() {
        const { params } = this.props.navigation.state;
        let deck = params.deck;
        let deckName = deck.title;
        return (
            <View style={styles.container} >          
                <Text style={styles.item}>Deck Detail</Text>
                <Text style={styles.heading2}>{JSON.stringify(deck.title)}</Text>
                <Text style={styles.heading2}>{JSON.stringify(deck.questions.length)} questions</Text>
                <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } 
           onPress={this.addQuestion}
         >
           <Text style={styles.submitBtnText}>Add Card</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } 
           onPress={this.takeQuiz}
         >
           <Text style={styles.submitBtnText}>Take Quiz</Text>
         </TouchableOpacity>
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
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginTop: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
   heading2: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  }
})

export default DeckDetails;