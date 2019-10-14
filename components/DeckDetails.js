import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

 class DeckDetails extends Component {

    submit = () => {
        
    }

    startQuiz = () => {
        this.props.navigation.navigate('Quiz'); 
    }

    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container} >
                <Text style={styles.item}>Deck Detail</Text>
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
           onPress={this.startQuiz}
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
  }
})

export default DeckDetails;