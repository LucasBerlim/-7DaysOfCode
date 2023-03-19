//programa - lista de compras 
let categorias = "";
let remover = "";
let adicionarComida = "1";

let frutas = [];
let laticínios = [];
let congelados = [];
let doces = [];

while(adicionarComida === "1") {
	let adicionarComida = prompt(`eseja adicionar uma comida na sua lista de compras? Digite "1" para sim ou "2" para não. Deseja remover algum item da lista? Digite "3"`);
 
	while(adicionarComida != "1" && adicionarComida != "2" && adicionarComida != "3" && adicionarComida != "4") {
		alert("resposta inválida");
		adicionarComida = prompt(`eseja adicionar uma comida na sua lista de compras? Digite "1" para sim ou "2" para não. Deseja remover algum item da lista? Digite "3" para sim ou "4" para não.`);
	}
	if(adicionarComida === "2") {
		break;
	}

	if(adicionarComida === "1") {
		let comida = prompt("Insira o nome da comida: ");
		categorias = prompt("qual categoria a comida se encaixa? frutas; laticínios; doces; congelados?")
		if(categorias === "frutas") {
			frutas.push(comida);
		} else if(categorias === "laticínios") {
			laticínios.push(comida);
		} else if(categorias === "doces") {
			doces.push(comida);
		} else if(categorias === "congelados") {
			congelados.push(comida);
		} else {
			alert("categoria inexistente")
		}
	}

	while(adicionarComida === "3") {
		if(frutas.length === 0 && laticínios.length === 0 && doces.length === 0 && congelados.length === 0){ 
			alert(`A lista está vazia!`);
			adicionarComida = "1";
		} else { 
			remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`); //  \n breaks the line
			if(frutas.indexOf(remover) != -1){
				frutas.splice(frutas.indexOf(remover), 1); // "1" means that it will remove one element
				alert(`O item ${remover} foi removido com sucesso!`);
			} else if(laticínios.indexOf(remover) != -1){
				laticínios.splice(laticínios.indexOf(remover), 1);
				alert(`O item ${remover} foi removido com sucesso!`);
			} else if (doces.indexOf(remover) != -1){
				doces.splice(doces.indexOf(remover), 1);
				alert(`O item ${remover} foi removido com sucesso!`);
			} else if (congelados.indexOf(remover) != -1){
				congelados.splice(congelados.indexOf(remover), 1);
				alert(`O item ${remover} foi removido com sucesso!`);
			} else {
				alert("Não foi possível encontrar o item dentro da lista!");
			}
		}
	}
	alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticínios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
