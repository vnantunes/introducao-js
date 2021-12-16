// Exercicio 1
//Crie condicionais que desabilitam o botão de incrementar ou decrementar 
//quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
/*var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
	if(currentNumber < 10) {
		currentNumber = currentNumber + 1;
		currentNumberWrapper.innerHTML = currentNumber;
	}
}

function decrement() {
	if(currentNumber > 0) {
		currentNumber = currentNumber - 1;
		currentNumberWrapper.innerHTML = currentNumber;
	}
}*/


// Exercicio 2
//Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.

var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
	if(currentNumber >= 0) {
		currentNumberWrapper.style.color = "black";
	}
}

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	if(currentNumber < 0) {
		currentNumberWrapper.style.color = "red"; 
	}
}



