
            
      
val1 = prompt("Valor1");
val2 = prompt("Valor2");

var v1 = parseFloat(val1);
var v2 = parseFloat(val2);
  
var Soma = v1 + v2; 
var Sub = v1- v2;
var Prod = v1 * v2;
var div = v1/v2;
var rest = v1%v2;

res.innerHTML += `Soma de ${v1} e ${v2} é: ${Soma} <br> Subtração de ${v1} e ${v2} é: ${Sub} <br> Produto de ${v1} e ${v2} é: ${Prod} <br> Divisão de ${v1} e ${v2} é: ${div} <br> o resto da divisão de ${v1} e ${v2} é: ${rest}`;
