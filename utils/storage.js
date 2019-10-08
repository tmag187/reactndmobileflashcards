import { AsyncStorage } from 'react-native';

export function getDecks() {
    AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then ((results) => {

    }
}

export function saveDeck(title) {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    })
}

export function setDecks() {
    AsyncStorage.mergeItem(DECK_STORAGE_KEY, title)
    .then ((results) => {
        
    })
}