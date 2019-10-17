import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Question from './Question';

export default class Quiz extends Component {
    state = {
      questionNumber:0,
      questionCount:null,
      quizComplete:false,
      quiz:[]
    }
    nextQuestion = (result) => {
      let {questionNumber, quizComplete, questionCount, quiz } = this.state;
      //const questionCount = 2;
      quiz[questionNumber] = result;
      questionNumber<(questionCount - 1) ? questionNumber++ : quizComplete = true;
      this.setState({questionNumber, quizComplete, quiz});
    }

    render() {
        const { params } = this.props.navigation.state;
        let { questionNumber, quizComplete, questionCount, quiz } = this.state;
        let deck = params.deck;
        const questions = deck.questions;
        if (questionCount===null) {
            const questionCount = questions.length;
            this.setState({questionCount});
        }
        let correct = 0;
        if (quizComplete) {
          correct = (quiz.filter((value) => { return value === 'correct' })).length;
        }
        return (
            <View>
                <Text style={styles.item}>{deck.title} Quiz    {questionNumber+1}/{questionCount} </Text>
                {!quizComplete ?
                <Question question={questions[questionNumber]} update={this.nextQuestion} /> :
                <View>
                <Text style={styles.item}>Congratulations Quiz is Complete</Text>
                <Text style={styles.item}>{correct} out of {questionCount} Correct ({correct/questionCount*100}%)</Text>
                <TouchableOpacity
                         style={
                           Platform.OS === "ios"
                             ? styles.iosSubmitBtn
                             : styles.AndroidSubmitBtn
                         }
                         
                       >
                         <Text style={styles.submitBtnText}>Continue</Text>
                       </TouchableOpacity>
                </View>}
                
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
                  fontSize: 20,
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
  }               
});