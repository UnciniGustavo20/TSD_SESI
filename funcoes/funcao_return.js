function calculartotal (preco1, preco2){
    return preco1 + preco2;
}

let resultado = calculartotal(30, 50); // somar

// desafio: imprimir contaneando e com template string

console.log("o total da compra: " + resultado); // concatenando
console.log(`o total da compra: ${resultado}`); //template string
