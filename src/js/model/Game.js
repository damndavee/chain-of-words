import {DOMelements, clearInput} from '../base';
import {state} from '../state';


export class Game {
    constructor() {}

    addPoints() {
        const len = (DOMelements.gameInput.value).toLowerCase();
        let temp = '';
    
        if(len.length < 2) {
            state.players[state.turn].points += 0;
            temp = '---';
        } else if(len.length > 1 && len.length < 5) {
            state.players[state.turn].points += 1;
            temp = '1p';
        } else if(len.length >= 5 && len.length < 8) {
            state.players[state.turn].points += 2;
            temp = '2p';
        } else if(len.length >= 8) {
            state.players[state.turn].points += 3;
            temp = '3p';
        }
        return temp;
    }

    updatePoints(node, player) {
        node.firstChild.nextSibling.lastChild.previousSibling.textContent = `points: ${player}`;
      }
    
    addWord() {
        let temp = this.addPoints();
        const tab = [...DOMelements.gameContainer.children];
        const template = `
            <div class="markup">
                <span class="markup_word">
                    ${(DOMelements.gameInput.value).toLowerCase() ? (DOMelements.gameInput.value).toLowerCase() : '---'}
                </span>
                    
                <span class="markup__point">
                    ${temp}
                </span>
            </div>
        `
        
        tab.forEach(playerHead => {
            if(playerHead.firstChild.nextSibling.className.includes('active')) {
                playerHead.lastChild.previousSibling.innerHTML += template;
                this.updatePoints(playerHead, state.players[state.turn].points);
            }
        })
    }

    getLastLetterFromActualWord() {
        const word = state.actualWord;
        const lastLetter = word.split('').splice(word.length-1, 1).join('');
        state.lastLetter = lastLetter;
    }
    
    getFirstLetterFromAddedWord(e) {
        const word = (e.target.value).toLowerCase();
        const firstLetter = word.split('').splice(0, 1).join('');
        state.firstLetter = firstLetter;
    }
    
    pushWordToAllWordsArray(e) {
        state.takenWords.push(e.target.value);
        state.players[state.turn].words.push(e.target.value);
    }
    
    updateActualWord(e) {
        state.actualWord = (e.target.value).toLowerCase();
        DOMelements.currentWord.textContent = `Current word is: ${state.actualWord}`; 
    }

    compareEnteredWordWithArray(e) {
        this.addWord();
        this.updateActualWord(e);
        this.pushWordToAllWordsArray(e);
    }

    displayMessage(e, fl, ll, indexOfWord) {

        let msg;
        let err;

        if(fl !== ll) {
            msg = `To słowo nie zaczyna się na literę: ${ll}`;
            err = 'error';
            console.log('nie działa');
        } else if(indexOfWord !== -1) {
            msg = `Słowo: ${e.target.value} już się pojawiło!`;
            err = 'error';
            console.log('nie działa 2');
        } else {
            msg = `Słowo: ${e.target.value} zostało poprawnie dodane!`
            err = 'correct';
            console.log('a tu działa');
        } 

        DOMelements.message.textContent = msg;
        DOMelements.message.classList.add(err);

        setTimeout(() => {
            DOMelements.message.textContent = '';
            DOMelements.message.classList.remove(err);
        }, 2000);
    }
    
    compareLettersAndWords(e) {
        let indexOfWord = state.takenWords.indexOf(e.target.value);
        let fl = state.firstLetter;
        let ll = state.lastLetter;
    
        if((fl === ll) && (indexOfWord === -1)) {
            this.compareEnteredWordWithArray(e);            
        } 

        this.displayMessage(e, fl, ll, indexOfWord);

        clearInput(e);
    }
}

