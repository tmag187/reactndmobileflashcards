import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import Question from './Question';

export default class Quiz extends Component {
    state = {
      questionNumber:0,
      quizComplete:false
    }
    nextQuestion = () => {
      let {questionNumber, quizComplete} = this.state;
      const questionCount = 2;
      questionNumber<(questionCount - 1) ? questionNumber++ : quizComplete = true;
      this.setState({questionNumber, quizComplete});
    }

    render() {
        const { params } = this.props.navigation.state;
        const { questionNumber, quizComplete } = this.state;
        let deck = params.deck;
        let quiz = [];
        const questions = deck.questions;
        const questionCount = questions.length;
        return (
            <View>
                <Text style={styles.item}>Quiz    {questionNumber+1}/{questionCount} </Text>
                {!quizComplete ?
                <Question question={questions[questionNumber]} update={this.nextQuestion} /> :
                <Text style={styles.item}>Congratulations Quiz is Complete</Text>}
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
                }
});