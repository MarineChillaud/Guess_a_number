// Déclartion de la fonction asNumber sans paramètre
function askNumber()
{
	let givenNumber = prompt("Indiquez un nombre entre 0 et 50 : ");	
	console.log(givenNumber);
	document.body.innerHTML += givenNumber;
	return givenNumber
}

// Déclaration de la focntion diIWin
function didIWin(number)
{
	if (number == 22)
	{	
		let displayWin = "Bravo, vous avez deviné le nombre";
		console.log (displayWin);
}
//	return givenNumber;

	else if (number<22)
	{
		let displayMore = "Plus grand";
		console.log (displayMore)
	}

	else if (number>22)
	{
		let displayLess = "Plus petit";
		console.log(displayLess)
	}
}

let a = askNumber();
didIWin(a);

