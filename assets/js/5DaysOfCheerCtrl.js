var date = new Date();
var month = date.getMonth() + 1;
var today = date.getDate();
var ary = [];
var promoItem = document.getElementsByClassName('promoItem');
var promoDates = [4, 5, 6, 7, 8];
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
			document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addActiveClass();
			revealPromo();
		} else if ( validDates[i] != true ) {
			document.write('<h3>'+ Object.keys(validDates)[i] + ' : ' + validDates[i]  +'</h3>');
			addInactiveClass();
		}
	};
}

function addActiveClass() {
	promoItem[i].classList.add('active');
	console.log(promoItem[i]);
}

function addInactiveClass() {
	promoItem[i].classList.add('inactive');
	console.log(promoItem[i]);	
}

function revealPromo() {

}

theDateTest();

