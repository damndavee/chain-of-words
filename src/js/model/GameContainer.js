import {addPlayersForm} from '../view/addPlayerView';
import {generateTemplate} from '../view/playerView';
import {DOMelements, hideNavigation} from '../base';
import {state} from '../state';


export class GameContainer {
    constructor() {
        // this.startGame();
    }
    
    
    setBasedWord() {
        let tmpNum = Math.floor(Math.random() * state.basedWords.length);
        state.actualWord = state.basedWords[tmpNum];
        DOMelements.currentWord.textContent = `Current word: ${state.basedWords[tmpNum]}`; 
        state.lastLetter = state.actualWord.split('').splice(state.actualWord.length - 1, 1);
    }
    
    setTurn() {
        const tmp = Math.floor(Math.random() * state.numberOfPlayers);
        state.turn = tmp;
        state.randNum = state.turn;
    }

    
    setState() {
        state.numberOfPlayers = DOMelements.playerSelectBox.value;
        this.setBasedWord();
        this.setTurn();
    }

    updateDOMStreak() {
        DOMelements.currentPlayerStreak.textContent = state.players[state.turn].streak;
    }

    changeTurn() {
        state.randNum++;
        const nop = state.numberOfPlayers;
        const tab = [...DOMelements.gameContainer.children];

        state.turn = state.randNum % nop;
        
        tab.forEach(node => {
            if(node.firstChild.nextSibling.className.includes('active')) {
                node.firstChild.nextSibling.classList.remove('active');     
            }
        })

        tab[state.turn].firstChild.nextSibling.classList.add('active');
        this.updateDOMStreak();
    }

    setCurrentPlayer() {
        state.currentPlayer = state.players[state.turn].name;
        DOMelements.currentPlayer.innerText = `${state.currentPlayer}`;
    }

    updateState() {
        this.changeTurn();
        this.setCurrentPlayer();
    }


    showGameContainer() {
        DOMelements.gameTemplate.className = 'game show';
        state.players[state.turn].activeTurn = true;
        generateTemplate();
    }

    playableState() {
        this.showGameContainer();
        this.updateState();
    }

    unplayableState() {
        addPlayersForm();
        this.setState();
    }

    startGame() {
        if(state.playable) {
            this.playableState();
        } else {
            this.unplayableState();
        }
    }
}