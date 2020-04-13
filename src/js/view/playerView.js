import {state} from '../state';
import {DOMelements, insertHTML} from '../base';


export function generateTemplate() {
    let active;

    state.players.forEach((player) => {
        if(player.activeTurn === true) {
            active = 'active';
        } else {
            active = '';
        }

        const template = `
            <div class="player ${player.name}">
                <div class="player__head ${active}">
                    <p class="player__name">${player.name}</p>
                    <p class="player__points">points: ${player.points}</p>
                </div>
                <div class="player__body"></div>
            </div>
        `;
    
    insertHTML(DOMelements.gameContainer, template);
    
    });
}