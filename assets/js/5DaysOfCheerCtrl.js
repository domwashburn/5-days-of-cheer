var date = new Date();
var month = date.getMonth() + 1;
var today = date.getDate();
var ary = [];
var promoItem = document.getElementsByClassName('promoItem');
var promoTags = document.getElementsByClassName('promoImage');
var promoCode = document.getElementsByClassName('promoCode');
var promoDates = [today-2, today-1, today, today+1, today+2];
//var promoDates = [17, 18, 19, 20, 21];
var promoDate;
var promoCodes;
var validDates;
var validDate;
var isValid;

var theDateTest = function theDateTest( isValid ) {
	isValid = theMonth( isValid );
	validDates = isValid;
	if( isValid ) {
		thePromo( validDates );
	}
}

function theMonth( isValid ) {
	if( month == 11 ) {
		isValid = theDate( isValid );
		//console.log( isValid );	
		return isValid;
	}
}

function theDate( isValid ) {
	validDates = {};
	for ( i = 0; i <= 4; i++ ) {
		if( today >= promoDates[i] ){
			validDates[i] = true;
			ary.push(validDates);
		} else {
			validDates[i] = false;
			ary.push(validDates);
		}
	};
	isValid = validDates;
	return isValid;
}

function thePromo( validDates ) {
	var promoLength = Object.keys(validDates).length - 	1;
	for ( i = 0; i <= promoLength; i++) {
		if( validDates[i] ) {
			//document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addActiveClass();
			addPromoCode();
			//console.log( promoCode[i] )
			revealPromo();
		} else if ( validDates[i] != true ) {
			//document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addInactiveClass();
			showInactiveMessage();
		}
	};
}

function addActiveClass() {
	promoItem[i].classList.add('active');
}

function addPromoCode() {
	promoCodes = ['CIDER30', 'FROSTY14', 'PUMPKIN14', 'THANKFUL30', 'JINGLEBELLS14' ];
	var currentPromoCode = promoCodes[i];
	promoCode[i].innerHTML = currentPromoCode;
}

function addInactiveClass() {
	promoItem[i].classList.add('inactive');
}

function showInactiveMessage(){
	var currentPromoItem = promoItem[i];
	//console.log(currentPromoItem);
	var hasInactiveMessage = currentPromoItem.getElementsByClassName( 'inactiveMessage' );
	//console.log( hasInactiveMessage );
	var promoDate = promoDates[i];
	//console.log( promoDate );
	var promoTag = promoTags[i];

	promoItem[i].addEventListener('click', function() { 
		console.log("I'm shakin bitch");

		shake(promoTag);
		if ( hasInactiveMessage.length == 0 ) {
			
			createInactiveMessage(currentPromoItem, promoDate); 
			//return hasInactiveMessage = currentPromoItem.getElementsByClassName( 'inactiveMessage' );
		}
	}, false);
};

function createInactiveMessage(currentPromoItem, promoDate) {
	//console.log(currentPromoItem);
	var node = document.createElement('div');
	var textNode = '<p>Don\'t open until <span>11/' + promoDate + '/14</span></p>';
	node.innerHTML = textNode;
	currentPromoItem.appendChild( node ).classList.add('inactiveMessage');
}

function revealPromo() {

}

function shake(promoTag) {
	console.log( promoTag );
	TweenLite.to(promoTag, 0.5, {left:-3});
};