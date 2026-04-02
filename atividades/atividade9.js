let tempo = 15
let nome = "Gustavo"
function tempoAtual(tempo){
   if(tempo>=12&tempo<=17){
    console.log("boa tarde ", nome );
   }
   else if(tempo>=18&&tempo>=23){
    console.log("boa noite", nome);
   }
   else{
    console.log("bom dia!", nome);
   } 
}

 tempoAtual(tempo, nome);