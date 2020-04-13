import {DOMelements, insertHTML} from '../base';

export function addPlayersForm() {
    const template = `
        <div class="blur">
            <div class="form">
                <div class="add-player">
                    <label class="add-player__label">Enter name of a player: </label>
                    <input type="text" class="add-player__input" placeholder="enter name">
                    <button class="add-player__btn">Add Player</button>

                    <div class="result">
                    
                    </div>

                    <div class="warning">
                        You didn't enter any name!
                    </div>
                </div>

                
            </div>
        </div>
    `;

    insertHTML(DOMelements.main, template);
}