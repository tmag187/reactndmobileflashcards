import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { saveDeck } from '../utils/storage';

 class AddDeck extends Component {
   state = {
     deckName: "new deck",
     decks:null
   };
   updateName = input => {
     this.setState({ deckName: input });
   };

   submit = () => {
    const { deckName } = this.state; 
    const { screenProps } = this.props
    let decks = saveDeck(deckName);
    this.setState({decks});
    this.setState({deckName:''});
    let ndecks = Object.values(decks).length - 1;
  //  {screenProps.update()}
     let deck = Object.values(decks[ndecks])[0];
     this.props.navigation.navigate('Details',{deck:deck, decks:decks});
 }

   render() {
     const { deckName, decks } = this.state;
     const { screenProps } = this.props;
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
               : inputstyles.androidSubmitBtn
           } 
           onPress={this.submit}
         >
           <Text style={inputstyles.submitBtnText}>Submit</Text>
         </TouchableOpacity>         
         <Text>{(decks!==null) ? JSON.stringify(Object.values(decks).length):''}</Text>
         <Text>{(decks!==null) ? JSON.stringify(decks):''}</Text>
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
  androidSubmitBtn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginTop: 10,
        marginRight: 40
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
