import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

 class DeckDetails extends Component {
    render() {
        const { deck } = this.props;
        return (
            <View style={styles.container} >
                <Text>Deck Detail</Text>
                <TouchableOpacity
           /* style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } */
           onPress={this.submit}
         >
           <Text style={styles.submitBtnText}>Add Card</Text>
         </TouchableOpacity>
         <TouchableOpacity
           /* style={
             Platform.OS === "ios"
               ? styles.iosSubmitBtn
               : styles.AndroidSubmitBtn
           } */
           onPress={this.submit}
         >
           <Text style={styles.submitBtnText}>Take Quiz</Text>
         </TouchableOpacity>
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
    fontSize: 24,
    height: 44,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
})

export default DeckDetails;