//programa - lista de compras 
let comida = "";
let listaComida = [];
let adicionarComida = "sim";


let categorias = "";
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];

while(adicionarComida === "sim") {
	adicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras? Digite sim ou não");

	while(adicionarComida != "sim" && adicionarComida != "não") {
		alert("resposta inválida");
		adiciona = prompt("Deseja adicionar uma comida na sua lista de compras? Digite sim ou não");
	}
	if(adicionarComida === "não") {
		alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
		break;
	}

	comida = prompt("Insira o nome da comida: ");
	categorias = prompt("qual categoria a comida se encaixa? frutas; laticínios; doces; congelados?")
	if(categorias === "frutas") {
		frutas.push(comida);
	} else if(categorias === "laticinios") {
		laticinios.push(comida);
	} else if(categorias === "doces") {
		doces.push(comida);
	} else if(categorias === "congelados") {
		congelados.push(comida);
	} else {
		alert("categoria inexistente")
	}
	alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
