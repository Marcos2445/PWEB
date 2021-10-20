////1
function Retangulo(b,h){
    this.base = b;
    this.altura = h;
   var area = b*h;
   
 var returnArea = function(){
    return area;

}
this.resp = function(){
    return returnArea;
}

}
var x = new Retangulo(12,2);
var areaRetMethod = x.resp();
var areaRet = areaRetMethod();
console.log(areaRet);

var y = new Retangulo(10,4);
var areaRetyMethod = y.resp();
var areaRety = areaRetyMethod();
console.log(areaRety);

//////////////2

function Conta(){
var nomecorr;
var banco;
var numconta;
var saldo;
//nome
this.getnomecorr = function(){
    return nomecorr;
}
this.setnomecorr = function(correntista){
    nomecorr=correntista;
}
//banco
this.getbanco = function(){
    return banco;
}
this.setbanco = function(banc){
    banco=banc;
}
//numconta
this.getnumconta = function(){
    return numconta;
}
this.setnumconta = function(numeroconta){
    numconta=numeroconta;
}
//saldo
this.getsaldo = function(){
    return saldo;
}
this.setsaldo = function(sal){
    saldo=sal;
}
}

function Corrente(){
    var saldoespecial;
    
    this.getsaldoespecial = function(){
        return saldoespecial;
    }
    this.setsaldoespecial = function(saldoesp){
        saldoespecial=saldoesp
    }
}

function Poupanca(){
    var juros;
    var datavenc;

    this.getjuros = function (){
        return juros;
    }
    this.setjuros = function(jur){
    juros = jur;
    }
    this.getdatavenc = function(){
        return datavenc;
    }
    this.setdatavenc = function(datav){
        datavenc = datav;
    
}
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

JoãoC = new Corrente();
JoãoP = new Poupanca();
JoãoC.setbanco('Banco do João');
JoãoC.setnumconta('22222');
JoãoC.setsaldoespecial('333');
JoãoC.setnomecorr('João');
JoãoC.setsaldo('2');

JoãoP.setbanco('Banco2 do João');
JoãoP.setnumconta('23332');
JoãoP.setjuros('50')
JoãoP.setnomecorr('Joãoo');
JoãoP.setsaldo('5');
JoãoP.setdatavenc('Amanhã');

console.log(JoãoC.getbanco()+'\n'+
JoãoC.getnumconta()+'\n'+
JoãoC.getsaldoespecial()+'\n'+
JoãoC.getnomecorr()+'\n'+
JoãoC.getsaldo()+'\n'+

JoãoP.getbanco()+'\n'+
JoãoP.getnumconta()+'\n'+
JoãoP.getjuros()+'\n'+
JoãoP.getnomecorr()+'\n'+
JoãoP.getsaldo()+'\n'+
JoãoP.getdatavenc());