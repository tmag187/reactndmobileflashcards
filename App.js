import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Decks from './components/Decks';
import Home from './components/Home';
import { currentDecks } from './utils/CurrentDecks';
import  DeckDetails  from './components/DeckDetails';
import AddDeck from './components/AddDeck';
import Quiz from './components/Quiz';
import AddQuestion from './components/AddQuestion';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, withNavigation } from 'react-navigation';
import { getDecks } from './utils/storage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});



const HomeStack = createStackNavigator({
  Home: { screen : Home },
  Details: { screen: DeckDetails},
  Quiz: { screen: Quiz},
  AddQuestion: { screen: AddQuestion }
});

const AddDeckStack = createStackNavigator({
  AddDeck: { screen : AddDeck }
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
        fontSize: 24,
        paddingBottom:10
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


