import {state} from '../state';
import {Player} from './Player';
import {GameContainer} from './GameContainer';

const gameContainer = new GameContainer();

export function setPlayer(e) {

    
    if(e.target.className === 'add-player__btn') {
        e.preventDefault();
        const name = e.target.previousSibling.previousSibling;
        const result = e.target.parentNode.nextSibling.nextSibling;
        const warning = e.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling;
        const mainContainer = e.target.parentNode.parentNode.parentNode.parentNode;

        if(name.value !== '') {
            state.players.push(new Player(name.value, state.players.length));

            const p = `<p>Player ${state.players.length}: ${name.value}</p>`;

            result.innerHTML += p;

            if(state.players.length == state.numberOfPlayers) {
                mainContainer.remove();
                state.playable = true;
                gameContainer.startGame();
            }

        } else {
            warning.style.display = 'flex';

            setTimeout(() => {
                warning.style.display = 'none';
            }, 1500)
        }

        name.value = ''; 
        name.focus();
    }

    if(e.target.className === 'blur') {
        e.target.parentNode.removeChild(e.target);
    }

    if(e.target.className === 'add-player__close-btn') {
        const container = e.target.parentNode.parentNode.parentNode.parentNode
        e.preventDefault();
        container.parentNode.removeChild(container);
    }
}