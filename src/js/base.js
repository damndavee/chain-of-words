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
    currentWord: document.getElementById('current-word'),
    currentPlayer: document.getElementById('game__player-name'),
    currentPlayerStreak: document.getElementById('game__player-streak-count'),
    playerPointsToWin: document.getElementById('game__player-points-to-win'),
    streakMessage: document.getElementById('word-streak-msg'),
    message: document.getElementById('game__message'),
    timer: document.getElementById('timer__clock'),
    bar: document.getElementById('timer__bar'),
    progressBar: document.getElementById('timer__progress'),
    showTerms: document.getElementById('show-terms'),
    hideTerms: document.getElementById('hide-terms'),
    terms: document.getElementById('terms'),
    showFeatures: document.getElementById('show-features'),
    hideFeatures: document.getElementById('hide-features'),
    features: document.getElementById('features')
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

export function toggleElement(element, display) {
  element.style.display = display;
}

export function updatePoints(node, player) {
  node.firstChild.nextSibling.lastChild.previousSibling.textContent = `points: ${player}`;
}