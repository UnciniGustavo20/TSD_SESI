/*
atalho de váriaveis linhas:
alt + shift + A

desafio:
criar uma função que receba preço e desconto em %
e mostre o valor final com desconto. 
criar outra função que receba preço e quantidade 
e mostre o valor total da compra.
*/


function calcularDesconto(preco, desconto) {
    let desconto2 = preco * (desconto / 100);
    let precoFinal = preco - desconto2;
    return precoFinal;
}

function calcularTotal(preco, quantidade) {
    let total = preco * quantidade;
    return total;
}

console.log("Preço com desconto:", calcularDesconto(100, 20)); 
console.log("Total da compra:", calcularTotal(50, 3)); 