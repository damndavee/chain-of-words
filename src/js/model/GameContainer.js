import {addPlayersForm} from '../view/addPlayerView';
import {generateTemplate} from '../view/playerView';
import showWinTemplate from '../view/winView';
import {DOMelements} from '../base';
import {state} from '../state';


export class GameContainer {
    constructor() {
        // this.startGame();
    }
    
    
    setBasedWord() {
        let tmpNum = Math.floor(Math.random() * state.basedWords.length);
        state.actualWord = state.basedWords[tmpNum];
        DOMelements.currentWord.textContent = `${state.basedWords[tmpNum]}`; 
        state.lastLetter = state.actualWord.split('').splice(state.actualWord.length - 1, 1);
    }
    
    setTurn() {
        const tmp = Math.floor(Math.random() * state.numberOfPlayers);
        state.turn = tmp;
        state.randNum = state.turn;
    }

    setNumberOfPlayers() {
        state.numberOfPlayers = DOMelements.playerSelectBox.value;
    }

    setPointsToWin() {
        state.pointsToWin = +(DOMelements.pointsToWin.value);
    }

    setState() {
        this.setNumberOfPlayers();
        this.setPointsToWin();
        this.setBasedWord();
        this.setTurn();
    }

    updateDOMStreak() {
        DOMelements.currentPlayerStreak.textContent = state.players[state.turn].streak;
    }

    updateDOMPointsToWin() {
        if(state.players[state.turn].pointsToWin < 0) {
            DOMelements.playerPointsToWin.textContent = '0';
        } else {
            DOMelements.playerPointsToWin.textContent = +(state.pointsToWin) - state.players[state.turn].points;
        }
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
        this.updateDOMPointsToWin();
    }

    setCurrentPlayer() {
        state.currentPlayer = state.players[state.turn].name;
        DOMelements.currentPlayer.innerText = `${state.currentPlayer}`;
    }

    updateState() {
        this.changeTurn();
        this.setCurrentPlayer();
    }


    //TIMER
    // updateDOMTimer(timer) {
    //     DOMelements.timer.innerHTML = timer;
    // }

    // updateProgressBar(range) {
    //     progress.style.transform = `translateX(-${range}px)`;
    // }
 
    // startTimer() {
    //     let timer = state.timer;

    //     const bar = DOMelements.bar;
    //     const progress = DOMelements.progressBar;
    //     let barWidth = bar.offsetWidth;

    //     let scale = Math.floor(barWidth / timer);

    //     console.log(typeof scale);
        
    //     let countdown = setInterval(() => {
    //         timer--;

    //         this.updateDOMTimer(timer)

    //         if(timer === 0) {
    //             clearInterval(countdown);
    //         }
    //     }, 1000); 
    // }

    // TIMER


    showGameContainer() {
        DOMelements.gameTemplate.className = 'game show';
        state.players[state.turn].activeTurn = true;
        generateTemplate();
    }

    playableState() {
        this.showGameContainer();
        this.updateState();
        // this.startTimer();
    }

    unplayableState(e) {
        addPlayersForm(e);
        this.setState();
    }

    winCondition() {
        if(state.players[state.turn].points >= state.pointsToWin) {
            state.playable = false;
            showWinTemplate(document.body, state.players[state.turn]);
        }
    }

    startGame(e) {
        if(state.playable) {
            this.playableState();
        } else {
            this.unplayableState(e);
        }
    }
}