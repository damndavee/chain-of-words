export const DOMelements = {
    heading: document.getElementById('heading'),
    main: document.getElementById('main'),
    navigation: document.getElementById('navigation'),
    containerBtn: document.getElementById('container__btn'),
    container: document.getElementById('container'),
    playerSelectBox: document.getElementById('numberOfPlayers'),
    pointsToWin: document.getElementById('points__win'),
    gameTemplate: document.getElementById('game'),
    gameContainer: document.getElementById('game__container'),
    gameInput: document.getElementById('game__input'),
    currentWord: document.getElementById('game__word--current'),
    currentPlayer: document.getElementById('game__player-name'),
    currentPlayerStreak: document.getElementById('game__player-streak-count'),
    playerPointsToWin: document.getElementById('game__player-points-to-win'),
    streakMessage: document.getElementById('word-streak-msg'),
    message: document.getElementById('message'),
    timer: document.getElementById('timer'),
    bar: document.getElementById('bar'),
    progressBar: document.getElementById('progress'),
    terms: document.getElementById('terms'),
    showTerms: document.getElementById('show-terms'),
    hideTerms: document.getElementById('hide-terms'),
}

export function clearContainer(parent) {
  parent.innerHTML = "";
}

export function updateTextContent(parent, text) {
  parent.textContent = text;
}

export function addChild(parent, child) {
  parent.appendChild(child);
}

export function insertHTML(parent, child, position = "beforeend") {
  parent.insertAdjacentHTML(position, child);
}

export function hideNavigation() {
  DOMelements.navigation.style.transform = "translateY(-100%)";
}

export function clearInput(e) {
  e.target.value = '';
}

export function displayTerms() {
  DOMelements.terms.style.display = 'flex';
}

export function hideTerms() {
  DOMelements.terms.style.display = 'none';
}