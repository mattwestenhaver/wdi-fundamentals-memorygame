console.log("Up and running!");
var gameBoard = document.getElementById("game-board");
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	cardImage.setAttribute('src',cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("sorry, try again...");
	}
}
}

var flipCard = function () {
	cardsInPlay.push(this.getAttribute('data-id'));
	this.innerHTML = '<img src="' + this.getAttribute('data-id') + '.png">'
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.className = 'card';
		cardElement.setAttribute('src',"images/back.png");
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);
	}
}

createBoard();




