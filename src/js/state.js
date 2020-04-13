export let state = {
    playable: false,
    players: [],
    numberOfPlayers: null,
    turn: null,
    randNum: 0,
    result: 0,
    actualWord: '',
    takenWords: [],
    firstLetter: '',
    lastLetter: '',
    basedWords: ['trawa', 'kebab', 'kuc', 'drozd', 'ukulele', 
                'dysortograf', 'dźwig', 'grzech', 'spodenki', 'tramwaj', 
                'domek', 'król', 'pozdrawiam', 'dominikanin', 'jezioro', 
                'dowcip', 'helikopter', 'kosmos' , 'trabant', 'pokoju', 
                'Wiesław', 'strzelby', 'raz'],
    currentPlayer: ''
}

export function resetState() {
    
}