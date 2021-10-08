function pesquisa(){
var mediaIdade =0;
var maiorIdade = 0;
var menorIdade = 5000;
var quantPessi = 0;
var NGost = 0;
var homens = 0;
var mulheres = 0;

for(var c =1; c<=45; c++){
var idadetx = prompt("idade");
var sexo = prompt("Sexo (tudo em letra maiuscula)");
var opniao = prompt("Opnião (tudo em letra maiuscula)");
var idade = parseFloat(idadetx);
mediaIdade = mediaIdade + idade;
if (idade>maiorIdade){
    maiorIdade = idade
}
if (idade<menorIdade){
    menorIdade = idade
}
if (opniao == "PESSIMO"){
    quantPessi = quantPessi + 1 ;
    
}
if (opniao == "OTIMO" || opniao =="BOM"){
    NGost = NGost + 1 ;
    
}
if (sexo == "MASC"){
homens = homens +1
}
if (sexo == "FEM"){
mulheres = mulheres +1
}
var porce = NGost /0.45
mediIdade = (mediaIdade/45);
medId.innerHTML = `Media das idades: ${mediIdade.toFixed(2)}`
maior.innerHTML = `Maior idade: ${maiorIdade}`
menor.innerHTML = `Menor idade: ${menorIdade}`
pessi.innerHTML = `Quantidade de Pessimo: ${quantPessi}`
porcent.innerHTML = `Porcentagem de pessoas que gostaram: ${porce}%`
homem.innerHTML = `A quantia de homens é igual a: ${homens}`
mulher.innerHTML = `A quantia de mulheres é igual a: ${mulheres}`
}
}