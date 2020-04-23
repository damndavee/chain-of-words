import '../sass/index.scss';
import {DOMelements, displayTerms, hideTerms} from './base';
import {state} from './state';
import {GameContainer} from './model/GameContainer';
import {Game} from './model/Game';
import {setPlayer} from './model/AddPlayer';
 
const gameContainer = new GameContainer();
const game = new Game();

DOMelements.showTerms.addEventListener('click', displayTerms);
DOMelements.hideTerms.addEventListener('click', hideTerms);

DOMelements.containerBtn.addEventListener('click',() => gameContainer.startGame())
DOMelements.main.addEventListener('click', setPlayer);

DOMelements.gameInput.addEventListener('keydown', e => {
    if(state.playable) {
        if(e.keyCode === 13) {
            game.getLastLetterFromActualWord();
            game.getFirstLetterFromAddedWord(e);
            game.compareLettersAndWords(e);  
            game.updatePlayerPointsToWin();
    
            game.winCondition();
    
            gameContainer.updateState();
        }
    }
})