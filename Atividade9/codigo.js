function fmaior(n1,n2,n3){       
 var maior = 0;
    
    if (n1>n2 && n1>n3){
        maior = n1;
    }
    else if( n2>n3){
        maior = n2;
    } else{
        maior = n3;
    }
   return maior;  
  }

function maior(){
var a = document.getElementById("n1");
var b =document.getElementById("n2");
var c =document.getElementById("n3");
var v1 = Number(a.value);
var v2 = Number(b.value);
var v3= Number(c.value);
var resp = fmaior(v1,v2,v3);

 res.innerHTML = ` O maior dos numeros é o numero: ${resp}`;
     
}

function fcresc (n1,n2,n3){
    var maior = 0;
    var menor = 0;
    var meio = 0;
    
    // determina o maior
    if (n1>n2 && n1>n3){
        maior = n1;
    }
    else if( n2>n3){
        maior = n2;
    } else{
        maior = n3;
    } 
  // menor
    if (n1<n2 && n1<n3){
        menor= n1;
    }
    else if( n2<n3){
        menor = n2;
    } else{
        menor = n3;
    } 
/// o do meio
    if (n1>menor && n1<maior){
        meio = n1;
    }
    else if( n2>menor  && n2< maior){
        meio = n2;
    } else {
        meio = n3;
    } 
    var r = [menor, meio, maior];

   return r ;  
     
  }

  console.log(fcresc(1, 4, 2));

  function cresc(){
    var a = document.getElementById("n1");
    var b =document.getElementById("n2");
    var c =document.getElementById("n3");
    var v1 = Number(a.value);
    var v2 = Number(b.value);
    var v3= Number(c.value);
    var resp = fcresc(v1,v2,v3);
    
     res.innerHTML = `Os numeros em ordem crescente ficam: ${resp}`;
         
    }