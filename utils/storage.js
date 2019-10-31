import { AsyncStorage } from 'react-native';
import { currentDecks } from './CurrentDecks';
let DECK_STORAGE_KEY = '10111';

let decks;
export function getDecks() {
    if (decks===undefined) {
        decks = (currentDecks()).decks;
    } 
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
        [title]: {
            title:title,
            questions: [] } }

    decks = [ ...decks,newDeck ];
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

    decks.map((deck) => {
        if (deck[title]!==undefined) {
            deck[title].questions.push(card);
        }
    })
    
    return (decks);
}