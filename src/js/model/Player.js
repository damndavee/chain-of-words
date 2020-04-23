import {state} from '../state';

export class Player {
    constructor(name, turn) {
        this.name = name.toLowerCase();
        this.turn = turn;
        this.points = 0;
        this.words = [];
        this.activeTurn = false;
        this.streak = 0;
        this.pointsToWin = state.pointsToWin;
    }
}