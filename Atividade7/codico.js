//escolher pedra
function jogope(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    escolha.innerHTML = `<h1>👊</h1>`
    
    if( b < 33){
        //papel
        escomaq.innerHTML = `<h1 id="dep">✋</h1> `
        resultado.innerHTML = `<h1 id="dep">Perdeu <br> 😟😟</h1>`
        document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
     }
     else if(b<66){
         //pedra
        escomaq.innerHTML = `<h1 id="dep">👊</h1> `
        resultado.innerHTML = `<h1 id="dep">Empatou <br>🤜🤛</h1>`
        document.getElementById('resultado').style.backgroundColor='grey';
    }
    else if(66<=b){
    //tesoura
    escomaq.innerHTML = `<h1 id="dep">✌️</h1> `
    resultado.innerHTML = `<h1 id="dep">Ganhou <br>✨✨</h1> `
    document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
    }
}
//escolher tesoura
function jogopa(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    escolha.innerHTML = `<h1>✋</h1>`
    
    if( b < 33){
        //papel
        escomaq.innerHTML = `<h1 id="dep">✋</h1> `
        resultado.innerHTML = `<h1 id="dep">Empatou <br>🤜🤛</h1>`
        document.getElementById('resultado').style.backgroundColor='grey';
     }
     else if(b<66){
         //pedra
        escomaq.innerHTML = `<h1 id="dep">👊</h1> `
        resultado.innerHTML = `<h1 id="dep">Ganhou <br>✨✨</h1> `
        document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
    }
    else if(66<=b){
    //tesoura
    escomaq.innerHTML = `<h1 id="dep">✌️</h1> `
    resultado.innerHTML = `<h1 id="dep">Perdeu <br> 😟😟</h1>`
    document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
    }
}
//escolher papel
function jogote(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    escolha.innerHTML = `<h1>✌️</h1>`
    
    if( b < 33){
        //papel
        escomaq.innerHTML = `<h1 id="dep">✋</h1> `
        resultado.innerHTML = `<h1 id="dep">Ganhou <br>✨✨</h1> `
        document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
     }
     else if(b<66){
         //pedra
        escomaq.innerHTML = `<h1 id="dep">👊</h1> `
        resultado.innerHTML = `<h1 id="dep">Perdeu <br> 😟😟</h1>`
        document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
    }
    else if(66<=b){
    //tesoura
    escomaq.innerHTML = `<h1 id="dep">✌️</h1> `
    resultado.innerHTML = `<h1 id="dep">Empatou <br>🤜🤛</h1>`
    document.getElementById('resultado').style.backgroundColor='grey';
    }
}
function reload(){
    location.reload(forcedReload);
}