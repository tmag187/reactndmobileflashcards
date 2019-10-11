import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


 class AddDeck extends Component {
    state = {
        deckName:''
    }
    updateName = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        const { deckName } = this.state;
        return (
            <View>
                <Text>Add Deck</Text>
                <TextInput 
                   style={inputstyles.add-question-input}
                   value={deckName}
                   onChange={this.updateName}
                />
            </View>
        )
    }
}

const inputstyles = StyleSheet.create({

add-question-input: {
    background-color: white;
    min-height: 5rem;
    justify-content: top;
    margin: 10px 10px 10px 10px;
    font-size: 18px;
    width:80%;
    max-width:80rem;
    font-family: Arial, Helvetica, sans-serif;
    border:1px;
    border-style: solid;
    border-color: gray;
    color: black;
  }
});

export default AddDeck;
