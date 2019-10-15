import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput } from 'react-native';

 class AddQuestion extends Component {

    state = {
        optionOneText:'',
        optionTwoText:'',
        toHome:false
    }

    handleSubmit = (e) => {        
      //  e.preventDefault();
      //  const { authedUser } = this.props;
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
        //  this.props.dispatch(handleAddQuestion(unformattedQuestion));
          this.setState({ toHome: "true" });
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    componentDidMount() {
   //   localStorage.setItem('lastpage', 'add');
    }

    render() {
        if (this.state.toHome) {
            this.props.navigation.navigate('Home');
        }
        return (
            
            <View>
                <Text style={inputstyles.item}>Add a Question</Text>
                <Text style={inputstyles.item}>to the deck...</Text>
                 <Text style={inputstyles.item}>Question</Text>      
                <TextInput style={inputstyles.addquestioninput} value={this.state.optionOneText} name='optionOneText' onChange={this.handleChange} />
                <Text style={inputstyles.item}>Answer</Text> 
                <TextInput style={inputstyles.addquestioninput} name='optionTwoText' value={this.state.optionTwoText} onChange={this.handleChange} />
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




