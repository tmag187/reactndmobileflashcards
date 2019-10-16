import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity, Platform } from 'react-native';

 class Question extends Component {
                 state = {
                   cardFront: true
                 };

                 toggleQuestion = () => {
                    const { cardFront } = this.state;
                    this.setState({cardFront:!cardFront});
                 }

                 render() {
                   const { cardFront } = this.state;
                   const { question, update } = this.props;
                  // const question = deck.questions[0];
                   return (
                     <View>
                       {cardFront === true ? (
                         <Text style={styles.item}>{question.question}</Text>
                       ) : (
                         <Text style={styles.item}>{question.answer}</Text>
                       )}
                       <TouchableOpacity
                         style={
                           Platform.OS === "ios"
                             ? styles.iosSubmitBtn
                             : styles.AndroidSubmitBtn
                         }
                         onPress={this.toggleQuestion}
                       >
                         <Text style={styles.submitBtnText}>Switch</Text>
                       </TouchableOpacity>

                       <TouchableOpacity
                         style={
                           Platform.OS === "ios"
                             ? styles.correctBtn
                             : styles.AndroidSubmitBtn
                         }
                         onPress={update}
                       >
                         <Text style={styles.submitBtnText}>Correct</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                         style={
                           Platform.OS === "ios"
                             ? styles.incorrectBtn
                             : styles.AndroidSubmitBtn
                         }
                         onPress={update}
                       >
                         <Text style={styles.submitBtnText}>Incorrect</Text>
                       </TouchableOpacity>
                     </View>
                   );
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
                },
                correctBtn: {
                  backgroundColor: 'green',
                  padding: 10,
                  borderRadius: 7,
                  height: 45,
                  marginLeft: 40,
                  marginTop: 40,
                  marginRight: 40,
                },
                incorrectBtn: {
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

export default Question;