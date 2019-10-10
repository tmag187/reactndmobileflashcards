import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import { currentDecks } from './utils/CurrentDecks';
import AddDeck from './components/AddDeck';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class Home extends Component {

  state = { decks:{}};

  componentDidMount() {
    let decks = ((currentDecks()).decks);
    this.setState({decks:decks});
  }

  render() {
    let { decks } = this.state;
    return (
      <View style={styles.container}>
        <Decks decks={decks} />
        {/* <Text>{JSON.stringify(decks)}</Text> */}
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  Home:Home,
  AddDeck:AddDeck
});

export default createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
