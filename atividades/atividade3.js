var idade = 19;
var possuiconvite = true;

if(idade >= 18 && possuiconvite == true){
    console.log("pode entrar!");
} else{
    console.log("nao pode entrar!");
}

// operador ternario:

let mensagem = idade >= 18 && possuiconvite == true ? "pode entrar!" : "nao pode entar! "
console.log("operador ternario: " + mensagem)
