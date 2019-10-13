import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import  Deck from './Deck';

 class Decks extends Component {
   state = { clickCount: 0 }
   selectDeck = (e) => {
     console.log(e.target.value);
     let { clickCount } = this.state;
     clickCount++;
     this.setState({clickCount});
     this.props.navigation.navigate('DeckDetails');
   }
    render() {
        let { decks } = this.props;
        let { clickCount } = this.state;
        return (
            <View style={styles.container}>
               {/*} {Object.values(decks).map((deck) => (
                 <Deck deck={Object.values(deck)[0]} key={deck} />
                //  <Text>{Object.values(deck)[0].title}</Text>
                ))} */}
               {/*}  <Text>{JSON.stringify(Object.values(decks))}</Text>  */}
                
                  <FlatList 
                   data={Object.values(decks)}
                   renderItem={({item}) => <Deck style={styles.item} deck={(Object.values(item)[0])} onClick={this.selectDeck} />}
                />
                <Text>{clickCount}</Text>
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
    fontSize: 18,
    height: 44,
  },
})

export default Decks;
