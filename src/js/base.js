export const DOMelements = {
    heading: document.getElementById('heading'),
    main: document.getElementById('main'),
    navigation: document.getElementById('navigation'),
    containerBtn: document.getElementById('container__btn'),
    container: document.getElementById('container'),
    playerSelectBox: document.getElementById('numberOfPlayers'),
    gameTemplate: document.getElementById('game'),
    gameContainer: document.getElementById('game__container'),
    gameInput: document.getElementById('game__input'),
    currentWord: document.getElementById('game__word--current'),
    currentPlayer: document.getElementById('game__player-name'),
    currentPlayerStreak: document.getElementById('game__player-streak-count'),
    streakMessage: document.getElementById('word-streak-msg'),
    message: document.getElementById('message'),
    terms: document.getElementById('terms'),
    showTerms: document.getElementById('show-terms'),
    hideTerms: document.getElementById('hide-terms'),


    test: document.getElementById('test')
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