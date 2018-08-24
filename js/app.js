

 var icons = ["fa fa-diamond", "fa fa-diamond","fa fa-paper-plane-o", 
 "fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor", "fa fa-bolt","fa fa-bolt","fa fa-cube","fa fa-cube", "fa fa-leaf","fa fa-leaf",
 "fa fa-bicycle","fa fa-bicycle","fa fa-bomb","fa fa-bomb"]
var open = []
var match = []
var moves = 0

function createBoard () {

shuffle(icons)
for (var i = 0; i < icons.length; i++) {
	var card = document.createElement('li')
	document.getElementsByClassName('deck')[0].appendChild(card)
	card.classList.add('card')
	card.innerHTML = "<i class ='" + icons[i] + "'</i>"
	card.addEventListener('click', flipCard)
	}
}
createBoard()


var resetGame = function () {
	moves = 0
	document.getElementsByClassName('moves')[0].innerHTML = moves + " moves"
	var cards = document.querySelectorAll('.card')
	for (var i = 0; i < icons.length; i++) {

		//we removed 2 inner childs of deck, one wasn't enough
		cards[i].innerHTML = " "
		document.getElementsByClassName('deck')[0].removeChild(cards[i])
	}
	
		
	createBoard()

}
document.getElementsByClassName('fa fa-repeat')[0].addEventListener('click',resetGame)
	





function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



function flipCard () {
this.classList.add('show')
open.push(this)



if (open.length == 2) {
	checkForMatch()
}
}

function checkForMatch () {
	
	
	setTimeout(function () {
	
	if (open[0].innerHTML === open[1].innerHTML) {
	
	console.log('its a match')
	match.push(open[0])
	match.push(open[1])
	console.log(match)

	if (match.length == 16) {

		alert('game over')
}
	open[0].classList.add('match');
	open[1].classList.add('match');
	open[1].classList.remove('open');
	open[0].classList.remove('open');
	open.pop()
	open.pop()
	 } else {
	 	moves +=1
	 	document.getElementsByClassName('moves')[0].innerHTML = moves + " moves"
	 	
	 	open[0].classList.remove('show')
		open[1].classList.remove('show')
		open[1].classList.remove('open');
		open[0].classList.remove('open')
		console.log('try again')
		
		open.pop()
		open.pop()
	}
	

	
	},1000);
		


	

}

