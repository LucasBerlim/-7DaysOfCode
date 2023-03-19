//programa - acerte o número sorteado
let numeroPensado = "";

const numeroSorteado = Math.round(Math.random() * (10 - 0 + 1) + 0);
console.log(numeroSorteado);

let acertou = false;

for(tentativas = 0; tentativas <=2; tentativas++) {
	numeroPensado = parseInt(prompt("Adivinhe o número que estou pensando, escolha um número entre 0 e 10"));
	if(numeroPensado == numeroSorteado) {
		alert("Você acertou!");
		acertou = true;
		break;
		
	} 
	alert("errou!");
}
if(!acertou) {
	alert(`Suas tentativas acabaram. O número era ${numeroSorteado}.`);
}
