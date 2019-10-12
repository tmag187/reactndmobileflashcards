import { AsyncStorage } from 'react-native';
import { currentDecks } from './CurrentDecks';
let DECK_STORAGE_KEY = '10111';

export function getDecks() {
    /* AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then ((results) => {

    } */
    return ((currentDecks()).decks);
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
    return ({ ...decks, newDeck })
}

export function setDecks(title) {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    })
}