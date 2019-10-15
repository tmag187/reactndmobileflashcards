import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

 class DeckDetails extends Component {

    submit = () => {
        
    }

    render() {
        const { params } = this.props.navigation.state;
        let deck = params.deck;
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
           onPress={this.submit}
         >
           <Text style={styles.submitBtnText}>Add Card</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } 
           onPress={this.submit}
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