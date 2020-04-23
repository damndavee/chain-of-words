import {insertHTML} from '../base';

export default function showWinTemplate(parent, player) {
    const template = `
        <div class="winner">
            <div class="winner__container">
                <div class="winner__info">
                    <p class="winner__name">${player.name} has won the game!</p>
                    <p class="winner__score">Score: ${player.points}</p>
                    <p>Congratulations!</p>
                </div>

                <div class="winner__options">
                    <button class="winner__btn winner__btn--show-stats">Show Stats</button>
                    <button class="winner__btn winner__btn--reset-game">Reset Game</button>
                </div>
            </div>
        </div>
    `;

    insertHTML(parent, template);
}