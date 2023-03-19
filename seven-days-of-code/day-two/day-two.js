//programa perguntas
const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é a sua idade?");
const linguagemEstudada = prompt("Qual é a linguagem de programação que você estuda?");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo a linguagem " + linguagemEstudada + ".");

function simOuNao() {
    let respostaPergunta = prompt("Você gosta de estudar " + linguagemEstudada + "?. Responda com o número 1 para SIM ou 2 para NÃO.");
    if(respostaPergunta == 1) {
        alert("Muito bom! Continue estudando e você terá muito sucesso.");
    } if(respostaPergunta == 2) {
        alert("Ahh que pena... Já tentou aprender outras linguagens?")
    } 
}

simOuNao();
