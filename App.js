import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import { currentDecks } from './utils/CurrentDecks';
import  DeckDetails  from './components/DeckDetails';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import AddQuestion from './components/AddQuestion';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { getDecks } from './utils/storage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class Home extends Component {

  state = { decks:{}, cdm:0};

  componentDidMount() {
    let { cdm } = this.state;
    let decks = getDecks();
    let count = cdm;
    count++;
    this.setState({decks:decks, cdm:count});
  }

  update = () => {
    let { cdm } = this.state;
    let count = cdm;
    count++;
    this.setState({cdm:count});
  }

  render() {
    let decks;
    let path;
    const { cdm } = this.state;
    const { params } = this.props.navigation.state;
    if (params === undefined) {
        ({ decks } = this.state);
        path = "state";
        console.log(JSON.stringify(decks));
    } else {
      decks = params.decks;
      path = "params";
      console.log(JSON.stringify(decks));
    }
    return (
      <View style={styles.container}>
        <Decks decks={decks} screenProps={this.update} />
        { <Text>{JSON.stringify(decks)}  {path} {cdm}</Text> }
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen : Home },
  Details: { screen: DeckDetails},
  Quiz: { screen: Quiz},
  AddQuestion: { screen: AddQuestion }
});

const AddDeckStack = createStackNavigator({
  AddDeck: { screen : AddDeck },
  Details: { screen: DeckDetails},
  Quiz: { screen: Quiz},
  AddQuestion: { screen: AddQuestion }
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
