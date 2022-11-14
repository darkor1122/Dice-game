const diceImg = document.querySelector('.dice');
let totalScorePlayer1 = document.querySelector('#score--0');
let totalScorePlayer2 = document.querySelector('#score--1');
let currentScorePlayer1 = document.querySelector('#current--0');
let currentScorePlayer2 = document.querySelector('#current--1');

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const player1Area = document.querySelector('.player--0');
const player2Area = document.querySelector('.player--1');

const winnerInfo = document.querySelector('.winner-info')

const popupNames = document.querySelector('.popup-names')
const overlay = document.querySelector('.overlay')
const inputPlr1 = document.querySelector('.plr1')
const inputPlr2 = document.querySelector('.plr2')
const okBtn = document.querySelector('.ok-btn')
const namePlr1 = document.querySelector('#name--0')
const namePlr2 = document.querySelector('#name--1')

const yesBtn = document.querySelector('.yes')
const noBtn = document.querySelector('.no')
const rechangePop = document.querySelector('.pop-rechange')


const allInputs = document.querySelectorAll('input')

// const diceImgArr = [
// 	'./img/dice-1.png',
// 	'./img/dice-2.png',
// 	'./img/dice-3.png',
// 	'./img/dice-4.png',
// 	'./img/dice-5.png',
// 	'./img/dice-6.png',
// ];

let scores = [0, 0];
let currPts = 0;
let currentPlayer = 0;

let playing = true;

// let total1 = 0;
// let total2 = 0;

diceImg.style.visibility = 'hidden';
totalScorePlayer1.textContent = 0;
totalScorePlayer2.textContent = 0;


const changeNames = () => {

	if (inputPlr1.value === '' && inputPlr2 !== '') {
		namePlr1.textContent = 'player 1'
		namePlr2.textContent = inputPlr2.value
		popupNames.style.display = 'none'
		overlay.style.display = 'none'
	} else if (inputPlr2.value === '' && inputPlr1.value !== '') {
		namePlr2.textContent = 'player 2'
		namePlr1.textContent = inputPlr1.value
		popupNames.style.display = 'none'
		overlay.style.display = 'none'
		console.log(`2323`);
	} else if (inputPlr1.value === '' && inputPlr2.value === '') {
		namePlr1.textContent = 'player 1'
		namePlr2.textContent = 'player 2'
		popupNames.style.display = 'none'
		overlay.style.display = 'none'
	} else if (inputPlr1 !== '' && inputPlr2 !== '') {
		
		namePlr1.textContent = inputPlr1.value
		namePlr2.textContent = inputPlr2.value
		popupNames.style.display = 'none'
		overlay.style.display = 'none'
	}

	console.log(namePlr1.textContent);
	console.log(namePlr2.textContent);
}

const switchPlayer = () => {
	currPts = 0;
	document.getElementById(`current--${currentPlayer}`).textContent = currPts;
	currentPlayer = currentPlayer === 0 ? 1 : 0;
	player1Area.classList.toggle('player--active');
	player2Area.classList.toggle('player--active');
};

const generateRandomDiceRoll = () => {
	if (playing) {
		diceImg.style.visibility = 'visible';
		const randomNum = Math.ceil(Math.random() * 6);
		console.log(randomNum);
		// diceImg.setAttribute('src', diceImgArr[randomNum - 1]);
		// diceImg.setAttribute('src', `./img/dice-${randomNum}.png`);
		diceImg.src = `./img/dice-${randomNum}.png`;

		// if (randomNum === 1 && player1Area.classList.contains('player--active')) {
		// 	player1Area.classList.remove('player--active');
		// 	player2Area.classList.add('player--active');
		// 	currPts = 0;
		// 	currentScorePlayer1.textContent = currPts;
		// } else if (randomNum === 1 &&player2Area.classList.contains('player--active')) {
		// 	player2Area.classList.remove('player--active');
		// 	player1Area.classList.add('player--active');
		// 	currPts = 0;
		// 	currentScorePlayer2.textContent = currPts;
		// } else if (randomNum !== 1 && player1Area.classList.contains('player--active')) {
		// 	currPts += randomNum;
		// 	currentScorePlayer1.textContent = currPts;
		// } else {
		// 	currPts += randomNum;
		// 	currentScorePlayer2.textContent = currPts;
		// }

		if (randomNum !== 1) {
			currPts += randomNum;
			document.getElementById(`current--${currentPlayer}`).textContent =
				currPts;
		} else {
			switchPlayer();
		}
	}
};

// const totalScore = () => {
// 	if (player1Area.classList.contains('player--active')) {
// 		total1 += currPts;
// 		totalScorePlayer1.textContent = total1;
// 		currPts = 0;
// 		currentScorePlayer1.textContent = currPts;
// 		player1Area.classList.remove('player--active');
// 		player2Area.classList.add('player--active');
// 		if (total1 >= 100) {
// 			player1Area.classList.add('player--winner');
// 			rollDiceBtn.style.pointerEvents = 'none';
// 		}
// 	} else {
// 		total2 += currPts;
// 		totalScorePlayer2.textContent = total2;
// 		currPts = 0;
// 		currentScorePlayer2.textContent = currPts;
// 		player2Area.classList.remove('player--active');
// 		player1Area.classList.add('player--active');
// 		if (total2 >= 100) {
// 			player2Area.classList.add('player--winner');
// 			rollDiceBtn.style.pointerEvents = 'none';
// 		}
// 	}
// };

const totalScore = () => {
	if (playing) {
		scores[currentPlayer] += currPts;
		document.querySelector(`#score--${currentPlayer}`).textContent =
			scores[currentPlayer];

		if (scores[currentPlayer] >= 20) {
			document
				.querySelector(`.player--${currentPlayer}`)
				.classList.add('player--winner');
			diceImg.style.visibility = 'hidden';
			playing = false;
			winnerInfo.style.display = 'block'
			const winner = document.querySelector(`#name--${currentPlayer}`).textContent
			winnerInfo.textContent = `${winner} won the game!`
		}

		switchPlayer();
	}
};

const rechangeNames = () => {
	rechangePop.style.display = 'flex'
	yesBtn.addEventListener('click', () => {
		rechangePop.style.display = 'none'
		popupNames.style.display = 'flex';
		overlay.style.display = 'block';
		
	})
	noBtn.addEventListener('click', () => {
		rechangePop.style.display = 'none'
	})
}

const resetGame = () => {
	rechangeNames()
	winnerInfo.style.display = 'none'
	diceImg.style.visibility = 'hidden';
	totalScorePlayer1.textContent = 0;
	totalScorePlayer2.textContent = 0;
	scores = [0, 0];
	currPts = 0;
	currentPlayer = 0
	// total1 = 0;
	// total2 = 0;
	player2Area.classList.remove('player--active');
	player1Area.classList.add('player--active');
	player1Area.classList.remove('player--winner');
	player2Area.classList.remove('player--winner');
	console.log(scores);
	playing = true;
};

okBtn.addEventListener('click', changeNames)
newGameBtn.addEventListener('click', resetGame);
rollDiceBtn.addEventListener('click', generateRandomDiceRoll);
holdBtn.addEventListener('click', totalScore);
