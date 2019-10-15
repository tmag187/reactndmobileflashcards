import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
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
    let decks = saveDeck(deckName);
    this.props.navigation.navigate('Home');
 }

   render() {
     const { deckName } = this.state;
     return (
       <View>
         <Text style={inputstyles.item}>Add Deck</Text>
         <TextInput
           style={inputstyles.addquestioninput}
           value={deckName}
           onChangeText={this.updateName}
         />
         <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? inputstyles.iosSubmitBtn
               : inputstyles.AndroidSubmitBtn
           } 
           onPress={this.submit}
         >
           <Text style={inputstyles.submitBtnText}>Submit</Text>
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
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 44,
    textAlign: 'center'
  },
  iosSubmitBtn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginTop: 40,
    marginRight: 40,
  }
});

export default AddDeck;
