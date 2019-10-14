import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import { currentDecks } from './utils/CurrentDecks';
import  DeckDetails  from './components/DeckDetails';
import AddDeck from './components/AddDeck';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { getDecks } from './utils/storage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class Home extends Component {

  state = { decks:{}};

  componentDidMount() {
    let decks = getDecks();
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

const HomeStack = createStackNavigator({
  Home: { screen : Home },
  Details: { screen: DeckDetails}
});

const AddDeckStack = createStackNavigator({
  AddDeck: { screen : AddDeck },
  Details: { screen: DeckDetails},
  Quiz: { screen: Quiz}
});

const tabNavigator = createBottomTabNavigator({
  Home:HomeStack,
  AddDeck:AddDeckStack
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      activeTintColor:'tomato',
      inactiveTintColor:'gray',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        height:56,
        backgroundColor: Platform.OS === 'ios' ? 'white' : 'white',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
      }
    }
  })
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
