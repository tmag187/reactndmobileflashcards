import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput, Keyboard } from 'react-native';
import { addCardToDeck } from '../utils/storage';

 class AddQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        decks:null
    }

    handleSubmit = (e) => {        
        const { params } = this.props.navigation.state;
        const deckName = params.deckName; 
        let unformattedQuestion;
        const { optionOneText, optionTwoText } = this.state;
        if ((optionOneText === "" || optionTwoText === "")) {
          alert(
            " Both fields must be poulated to submit the question."
          );
        } else {

          unformattedQuestion = {
            question: optionOneText,
            answer: optionTwoText
          };
          let decks = addCardToDeck(deckName, unformattedQuestion);
          this.setState({decks});    
          this.setState({optionOneText:'',optionTwoText:''});
        
        }  
        Keyboard.dismiss(); 
    }

    returnToCard = () => {
      const { decks } = this.state;
      let ndecks = Object.values(decks).length - 1;
           //  {screenProps.update()}
      let deck = Object.values(decks[ndecks])[0];
      this.props.navigation.navigate('Details',{deck:deck, decks:decks});
      
    }

    handleChangeOne = (input) => {
        this.setState({optionOneText:input});
    }

     handleChangeTwo = (input) => {
        this.setState({optionTwoText:input});
    }

    componentDidMount() {

    }

    render() {

        const { params } = this.props.navigation.state;
        const { optionOneText, optionTwoText } = this.state;
        const deckName = params.deckName; 
        const decks = params.decks;
        const ndecks = decks.length - 1;
        return (
            
            <View>
                <Text style={inputstyles.item}>Add a Question</Text>
                <Text style={inputstyles.item}>to the deck...{deckName}</Text>
                 <Text style={inputstyles.item}>Question</Text>      
                <TextInput style={inputstyles.addquestioninput} value={this.state.optionOneText} name='optionOneText' onChangeText={this.handleChangeOne} />
                <Text style={inputstyles.item}>Answer</Text> 
                <TextInput style={inputstyles.addquestioninput} name='optionTwoText' value={this.state.optionTwoText} onChangeText={this.handleChangeTwo} />
                <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? inputstyles.iosSubmitBtn
               : inputstyles.androidSubmitBtn
           } 
           onPress={this.handleSubmit}
         >
           <Text style={inputstyles.submitBtnText}>Add Question</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={
             Platform.OS === "ios"
               ? inputstyles.iosSubmitBtn
               : inputstyles.androidSubmitBtn
           } 
           onPress={this.returnToCard}
         >
           <Text style={inputstyles.submitBtnText}>Return to Card</Text>
         </TouchableOpacity>
         <Text style={inputstyles.logText}>{(decks!==null) ? JSON.stringify((optionOneText + ' ' + optionTwoText)):''}</Text>
         <Text style={inputstyles.logText}>{(decks!==null) ? JSON.stringify(decks[ndecks]):''}</Text>
         <Text style={inputstyles.logText}>{(decks!==null) ? JSON.stringify(decks):''}</Text>
            </View>
        )
    }
}

export default AddQuestion;

const inputstyles = StyleSheet.create({

    addquestioninput: {
        backgroundColor: 'white',
        justifyContent: 'top',
        width:250,
        padding:8,
        height:44,
        fontSize: 18,
        marginLeft: 40,
        marginTop: 10,
        marginRight: 40,
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
      logText: {
        padding: 10,
        fontSize: 10
      },
      iosSubmitBtn: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginTop: 10,
        marginRight: 40
      },
      androidSubmitBtn: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 7,
        height: 45,
        marginLeft: 40,
        marginTop: 10,
        marginRight: 40
      }
    });




