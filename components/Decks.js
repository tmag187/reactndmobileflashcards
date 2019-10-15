import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet, SafeAreaView } from 'react-native';
import  Deck from './Deck';

 class Decks extends Component {

   state = { clickCount: 0, navigationObj:null }
   onSelect = (e) => {
   //  console.log(e.target.value);
     let { clickCount, navigationObj } = this.state;
     clickCount = clickCount + 1;
     this.setState({clickCount:clickCount});
//     navigationObj.navigate('Details');
   }


    render() {
        let { decks } = this.props;
        let { clickCount, navigationObj } = this.state;
        if (navigationObj===null) {
              this.setState({ navigationObj:this.props.navigation  });
        }
        return (
            <SafeAreaView style={styles.container}>
               {/*} {Object.values(decks).map((deck) => (
                 <Deck deck={Object.values(deck)[0]} key={deck} />
                //  <Text>{Object.values(deck)[0].title}</Text>
                ))} */}
               {/*}  <Text>{JSON.stringify(Object.values(decks))}</Text>  */}
                
                  <FlatList 
                   data={Object.values(decks)}
                   renderItem={({item}) => <Deck style={styles.item} deck={(Object.values(item)[0])} 
                    />}
                   extraData={this.state}
                   keyExtractor={item => (Object.values(item)[0]).id}
                />
                <Text>{clickCount}</Text>
                <Text>{this.props.navigation}</Text>
            </SafeAreaView>
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
