//programa - calculadora

function soma() {
	alert(parseInt(numeroEscolhidoUm) + parseInt(numeroEscolhidoDois));
}

function multiplicacao() {
	alert(parseInt(numeroEscolhidoUm) * parseInt(numeroEscolhidoDois));
}

function subtracao() {
	alert(parseInt(numeroEscolhidoUm) - parseInt(numeroEscolhidoDois));
}

function divisao() {
	alert(parseInt(numeroEscolhidoUm) / parseInt(numeroEscolhidoDois));
}

let numeroEscolhidoUm = "";
let numeroEscolhidoDois = "";
let operacao = 1;

while(operacao > 0) {
	operacao = prompt("Escolha uma opção de operação: soma; multiplicação; subtração; divisão; ou digite sair");
	if(operacao != "soma" && operacao != "multiplicação" && operacao != "subtracao" && operacao != "divisão" && operacao != "sair") {
		alert("operação inválida!");
		operacao = prompt("Escolha uma opção de operação: soma; multiplicação; subtração; divisão; ou digite sair");
	}
	if(operacao === "sair") {
		alert("Até a próxima!");
		break;
	}

	numeroEscolhidoUm = prompt("Escolha o primeiro número para a operação");
	numeroEscolhidoDois = prompt("Escolha o segundo número para a operação");
	
	if(operacao === "soma") {
		soma();
	}
	if(operacao === "multiplicação") {
		multiplicacao();
	}
	if(operacao === "subtração") {
		subtracao();
	}
	if(operacao === "divisão") {
		divisao();
	}
	operacao = 1;
}
