import {DOMelements, insertHTML} from '../base';

export function addPlayersForm() {
    const template = `
        <div class="blur">
            <form class="form">
                <div class="add-player">
                    <div class="add-player__container-header">
                    <label class="add-player__label">Enter name of a player: </label>
                        <button class="add-player__close-btn">X</button>
                    </div>

                    <div class="add-player__container-body">
                        <input type="text" class="add-player__input" autofocus placeholder="enter name"/>
                        <button class="add-player__btn">Add Player</button>
                    </div>

                    <div class="result"></div>

                    <div class="warning">You didn't enter any name!</div>
                </div>

                
            </form>
        </div>
    `;

    insertHTML(DOMelements.main, template);
}