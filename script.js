const messageEl = document.querySelector('.message');
const cardEl = document.querySelector('.card-container');
const sumEl = document.querySelector('.sum');
const btnEl = document.querySelector('.new-game');
const cardArr = [
	{ id: 1, src: './images/A.png' },
	{ id: 2, src: './images/2.png' },
	{ id: 3, src: './images/3.png' },
	{ id: 4, src: './images/4.png' },
	{ id: 5, src: './images/5.png' },
	{ id: 6, src: './images/6.png' },
	{ id: 7, src: './images/7.png' },
	{ id: 8, src: './images/8.png' },
	{ id: 9, src: './images/9.png' },
	{ id: 10, src: './images/10.png' },
	{ id: 10, src: './images/J.png' },
	{ id: 10, src: './images/Q.png' },
	{ id: 10, src: './images/K.png' },
];
let firstCard = 0;
let secondCard = 0;
let sum = 0;
let cards = [];
isAlive = false;
getBlackJack = false;
function getRandomCard() {
	let random = cardArr[Math.floor(Math.random() * cardArr.length)];
	return random;
}
let card1 = getRandomCard();
// console.log(card1.src);
// function formatCard(card) {
// 	switch (card) {
// 		case 'A':
// 			card = 11;
// 			break;
// 		case 'J':
// 			card = 10;
// 			break;
// 		case 'Q':
// 			card = 10;
// 			break;
// 		case 'K':
// 			card = 10;
// 			break;
// 		default:
// 			card = card;
// 	}
// }

function startGame() {
	btnEl.textContent = 'New Game';
	cardEl.innerHTML = '';
	isAlive = true;
	getBlackJack = false;
	cards = [];
	firstCard = getRandomCard();
	secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	// console.log(cards);
	sum = firstCard.id + secondCard.id;
	// console.log(sum);
	renderGame();
}
function renderGame() {
	cards.forEach((card) => {
		cardEl.innerHTML += `<img class='card' src=${card.src} rel='card' />`;
	});
	if (sum >= 22) {
		messageEl.textContent = 'Sorry! You are out of the game!';
		sumEl.textContent = `Sum: ${sum}`;
		isAlive = false;
		messageEl.style.color = 'red';
	} else if (sum <= 20) {
		messageEl.textContent = 'Do you want to draw a new card!';
		sumEl.textContent = `Sum: ${sum}`;
		isAlive = true;
		messageEl.style.color = 'white';
	} else if (sum === 21) {
		messageEl.textContent = 'You got BlackJack';

		sumEl.textContent = `Sum: ${sum}`;
		getBlackJack = true;
		isAlive = false;
		messageEl.style.color = 'black';
		// cardEl.textContent = `Cards: ${cardDom}`;
	}
	cards = [];
	// else {
	// 	messageEl.style.color = 'goldenrod';
	// }

	// console.log(cards[1].src);
}
function getNewCard() {
	if (getBlackJack === false && isAlive === true) {
		let newCard = getRandomCard();
		cards.push(newCard);
		sum += newCard.id;
		renderGame();
	} else {
		messageEl.style.color = 'red';
		messageEl.textContent = `Sorry! starts a new game.`;
	}
}
