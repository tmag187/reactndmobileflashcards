import { AsyncStorage } from 'react-native';
import { currentDecks } from './CurrentDecks';
let DECK_STORAGE_KEY = '10111';

let decks;
export function getDecks() {
    if (decks===undefined) {
        decks = (currentDecks()).decks;
    }
    /* AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then ((results) => {

    } */  
    return (decks);
}

export function saveDeck(title) {
    /* AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    }) */
    if (decks===undefined) {
       decks = ((currentDecks()).decks);
    }
    let newDeck = {
        title: {
            title,
            "questions": [] } }

    newDeck = {
      decks4: { title: title, questions: [] }
    };

    decks = [ ...decks, newDeck ];
    return (decks);
}

export function setDecks(title) {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    })
}

export function addCardToDeck(title, card) {
    /* AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    }) */
    if (decks[title]!==undefined) {
        decks[title].question.push(card);
    }
    return (decks);
}