//desafio
var nota1 = 2;
var nota2 = 0;
const media = (nota1 + nota2) / 2;

if(media > 10.0){
    console.log("nota invalida!");
} else if (media >= 7.5 ){
    console.log("aprovado!!");
} else if (media < 7.5 && media >= 3.0){
    console.log("recuperação");
}else{
    console.log("reprovado");       
} 
console.log(media);
