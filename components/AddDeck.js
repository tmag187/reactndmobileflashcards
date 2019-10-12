import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { saveDeck } from '../utils/storage';

 class AddDeck extends Component {
   state = {
     deckName: "new deck"
   };
   updateName = input => {
     this.setState({ deckName: input });
   };

   submit = () => {
    const { deckName } = this.state;
   // this.toHome();
    saveDeck(deckName);
 }

   render() {
     const { deckName } = this.state;
     return (
       <View>
         <Text>Add Deck</Text>
         <TextInput
           style={inputstyles.addquestioninput}
           value={deckName}
           onChangeText={this.updateName}
         />
         <TouchableOpacity
           /* style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } */
           onPress={this.submit}
         >
           <Text style={styles.submitBtnText}>Submit</Text>
         </TouchableOpacity>
       </View>
     );
   }
 }

const inputstyles = StyleSheet.create({

addquestioninput: {
    backgroundColor: 'white',
    justifyContent: 'top',
    width:200,
    padding:8,
    height:44,
    fontSize: 18,
    margin:50,
    borderWidth:1,
    borderStyle: 'solid',
    borderColor: '#757575',
    color: 'black'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});

export default AddDeck;
