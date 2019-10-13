import { AsyncStorage } from 'react-native';
import { currentDecks } from './CurrentDecks';
let DECK_STORAGE_KEY = '10111';

let decks;
export function getDecks() {
    /* AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then ((results) => {

    } */
    decks = (currentDecks()).decks;
    return (decks);
}

export function saveDeck(title) {
    /* AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    }) */
    let decks = ((currentDecks()).decks);
    let newDeck = {
        title: {
            title,
            "questions": [] } }
    decks = { ...decks, newDeck }
    return (decks);
}

export function setDecks(title) {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    })
}