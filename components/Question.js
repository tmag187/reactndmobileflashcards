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
                   return (
                     <View>
                       {cardFront === true ? (
                         <Text>Question</Text>
                       ) : (
                         <Text>Answer</Text>
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
                             ? styles.iosSubmitBtn
                             : styles.AndroidSubmitBtn
                         }
                         onPress={this.submit}
                       >
                         <Text style={styles.correctBtn}>Correct</Text>
                       </TouchableOpacity>
                       <TouchableOpacity
                         style={
                           Platform.OS === "ios"
                             ? styles.iosSubmitBtn
                             : styles.AndroidSubmitBtn
                         }
                         onPress={this.submit}
                       >
                         <Text style={styles.incorrectBtn}>Incorrect</Text>
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
                  fontSize: 24,
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