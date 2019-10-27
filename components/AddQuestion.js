import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput } from 'react-native';
import { addCardToDeck } from '../utils/storage';

 class AddQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome:false,
        decks:null
    }

    handleSubmit = (e) => {        

        const { deckName } = this.props; 
        const { optionOneText, optionTwoText } = this.state;
        if ((optionOneText === "" || optionTwoText === "")) {
          alert(
            " Both answers must be entered to submit the question."
          );
        } else {

          let unformattedQuestion = {
            optionOneText: optionOneText,
            optionTwoText: optionTwoText
          };

        
      //  const { screenProps } = this.props
       // let decks = saveDeck(deckName);
      //  this.setState({decks});
     //   let ndecks = Object.values(decks).length - 1;
   
     //   let deck = Object.values(decks[ndecks])[0];
        decks = addCardToDeck(deckName, unformattedQuestion);
        this.setState({decks});
     //   this.props.navigation.navigate('Details');

        }
    }

    handleChangeOne = (name, input) => {
        this.setState({optionOneText:input});
    }

     handleChangeTwo = (name, input) => {
        this.setState({optionTwoText:input});
    }

    componentDidMount() {
   //   localStorage.setItem('lastpage', 'add');
    }

    render() {
        if (this.state.toHome) {
            this.props.navigation.navigate('Home');
        }
        const { params } = this.props.navigation.state;
        const deckName = params.deckName;
        const { decks } = this.state;
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
               : inputstyles.AndroidSubmitBtn
           } 
           onPress={this.handleSubmit}
         >
           <Text style={inputstyles.submitBtnText}>Submit</Text>
         </TouchableOpacity>
          <Text>{(decks!==null) ? JSON.stringify(decks):''}</Text>
            </View>
        )
    }
}

export default AddQuestion;

const inputstyles = StyleSheet.create({

    addquestioninput: {
        backgroundColor: 'white',
        justifyContent: 'top',
        width:350,
        padding:8,
        height:44,
        fontSize: 18,
        margin:20,
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




