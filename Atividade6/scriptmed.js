
        
nome = prompt("Nome do aluno");
n1 = prompt("Primeira nota");
n2 = prompt("Segunda nota");
n3 = prompt("Terceira nota");
var v1 = parseFloat(n1);
var v2 = parseFloat(n2);
var v3 = parseFloat(n3);    
var media = (v1 + v2 + v3) /3;
if (media >=6){
    med.innerHTML += `A média do aluno ${nome} é: ${media.toFixed(2)} \u{1F601}`
} 
else if(media <6){
med.innerHTML += `A média do aluno ${nome} é: ${media.toFixed(2)} \u{1F97A}`
}

else {
    med.innerHTML += `A média do aluno ${nome} é: Ba${media.toFixed(2)}a \u{1F34C}`
}
