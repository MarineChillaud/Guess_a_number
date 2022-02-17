// Déclaration de variable globale : 
let givenNumber

// Déclartion de la fonction asNumber sans paramètre
function askNumber()
{
	givenNumber = prompt("Indiquez un nombre entre 0 et 50 : ");	
	console.log(givenNumber);
	return givenNumber
}

/*Déclaration de la focntion didIWin étape 2 

function didIWin(givenNumber)
{
	if (givenNumber == 22)
	{	
		let displayWin = "Bravo, vous avez deviné le nombre";
		console.log (displayWin);
	}
	else if (givenNumber<22)
	{
		let displayMore = "Plus grand";
		console.log (displayMore)
	}
	else if (givenNumber>22)
	{
		let displayLess = "Plus petit";
		console.log(displayLess)
	}
} */

// déclarationde la fonction didIwine étape 3 true false

function didIWin(givenNumber)
{
	if (givenNumber == 22)
	{
		return true;
	}

	else
	{
		return false
	}
}

//console.log(didIWin(15));


// function gamePlay()


let a = askNumber();
didIWin(a);
document.body.innerHTML += didIWin();
