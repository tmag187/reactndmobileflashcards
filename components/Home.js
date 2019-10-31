import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Decks from './Decks';
import { currentDecks } from '../utils/CurrentDecks';
import  DeckDetails  from './DeckDetails';
import AddDeck from './AddDeck';
import Quiz from './Quiz';
import AddQuestion from './AddQuestion';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, withNavigation } from 'react-navigation';
import { getDecks } from '../utils/storage';

class Home extends Component {

  state = { decks:{}, cdm:0};

  componentDidMount() {
    let { cdm } = this.state;
    let decks;
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      cdm++;
      this.setState({ cdm});
      decks = getDecks();
      this.setState({decks});
    })
    decks = getDecks();
    this.setState({decks});
  }

  componentWillUnmount() {
    this.focusListener.remove();
  }

  update = () => {
    let { cdm } = this.state;
    let count = cdm;
    count++;
    this.setState({cdm:count});
  }

  render() {
    let path;
    const { cdm } = this.state;
    const { params } = this.props.navigation.state;
    let { decks } = this.state;
   /* if (params === undefined) {
        ({ decks } = this.state);
        path = "state";
    } else {
      decks = params.decks;
      path = "params";
    }*/
    return (
      <View style={styles.container}>
        <Decks decks={decks} screenProps={this.update} />
        { <Text>  {path} {cdm}</Text> }
      </View>
    );
  }
}

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

export default withNavigation(Home);