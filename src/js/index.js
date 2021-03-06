import '../sass/index.scss';
import {DOMelements, toggleElement} from './base';
import {state} from './state';
import {GameContainer} from './model/GameContainer';
import {Game} from './model/Game';
import {setPlayer} from './model/AddPlayer';


const gameContainer = new GameContainer();
const game = new Game();

DOMelements.showTerms.addEventListener('click', () => toggleElement(DOMelements.terms, 'flex'));
DOMelements.hideTerms.addEventListener('click', () => toggleElement(DOMelements.terms, 'none'));

DOMelements.showFeatures.addEventListener('click', () => toggleElement(DOMelements.features, 'flex'));
DOMelements.hideFeatures.addEventListener('click', () => toggleElement(DOMelements.features, 'none'));

DOMelements.containerBtn.addEventListener('click', (e) => {
    gameContainer.startGame(e);
    document.activeElement.blur(); //removes focus which casued a lot of problems
});

DOMelements.pointsToWin.addEventListener('keydown', e => {
    if(e.keyCode === 13) {
        gameContainer.startGame(e);
    }
    document.activeElement.blur(); //removes focus which casued a lot of problems
})

DOMelements.main.addEventListener('click', setPlayer);

DOMelements.gameInput.addEventListener('keydown', e => {
    if(state.playable) {
        if(e.keyCode === 13) {
            game.getLastLetterFromActualWord();
            game.getFirstLetterFromAddedWord(e);
            game.compareLettersAndWords(e);  
            game.updatePlayerPointsToWin();
    
            
            gameContainer.winCondition();
            gameContainer.updateState();
        }
    }
})