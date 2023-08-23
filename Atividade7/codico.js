//escolher pedra
function jogope(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    //selecionando o escolhido
    document.getElementById('imgPedra').style.width = '150px';
    document.getElementById('imgPedra').style.backgroundColor = 'chartreuse';
    //removendo os outros
    document.getElementById('imgTesoura').style.width = '100px';
    document.getElementById('imgTesoura').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    document.getElementById('imgPapel').style.width = '100px';
    document.getElementById('imgPapel').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';

    //Removendo a maquina
    document.getElementById('imgTesouraMaq').style.width = '100px';
    document.getElementById('imgTesouraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    document.getElementById('imgPapelMaq').style.width = '100px';
    document.getElementById('imgPapelMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    document.getElementById('imgPedraMaq').style.width = '100px';
    document.getElementById('imgPedraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    if( b < 33){
        //papel
        document.getElementById('imgPapelMaq').style.width = '150px';
        document.getElementById('imgPapelMaq').style.backgroundColor = 'red';
        result.innerHTML='<img src="pedraPapel.png" alt="resultado" id="imgResultado">'
        respostaRes.innerHTML = `<h1>Perdeu <br> 😟😟</h1>`
        document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
     }
     else if(b<66){
         //pedra
        document.getElementById('imgPedraMaq').style.width = '150px';
        document.getElementById('imgPedraMaq').style.backgroundColor = 'red';
        result.innerHTML='<img src="pedraPedra.png" alt="resultado" id="imgResultado">'
        respostaRes.innerHTML = `<h1>Empatou <br>🤜🤛</h1>`
        document.getElementById('resultado').style.backgroundColor='grey';
    }
    else if(66<=b){
    //tesoura
    document.getElementById('imgTesouraMaq').style.width = '150px';
    document.getElementById('imgTesouraMaq').style.backgroundColor = 'red';
    result.innerHTML='<img src="pedraTesoura.png" alt="resultado" id="imgResultado">'
    respostaRes.innerHTML = `<h1>Ganhou <br>✨✨</h1> `
    document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
    }
}
//escolher papel
function jogopa(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    document.getElementById('imgPapel').style.width = '150px';
    document.getElementById('imgPapel').style.backgroundColor = 'chartreuse';
    //removendo os outros
    document.getElementById('imgTesoura').style.width = '100px';
    document.getElementById('imgTesoura').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    document.getElementById('imgPedra').style.width = '100px';
    document.getElementById('imgPedra').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        //Removendo a maquina
        document.getElementById('imgTesouraMaq').style.width = '100px';
        document.getElementById('imgTesouraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        document.getElementById('imgPapelMaq').style.width = '100px';
        document.getElementById('imgPapelMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        document.getElementById('imgPedraMaq').style.width = '100px';
        document.getElementById('imgPedraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    
    if( b < 33){
        //papel
        document.getElementById('imgPapelMaq').style.width = '150px';
        document.getElementById('imgPapelMaq').style.backgroundColor = 'red';
        result.innerHTML='<img src="papelPapel.png" alt="resultado" id="imgResultado">'
        respostaRes.innerHTML = `<h1>Empatou <br>🤜🤛</h1>`
        document.getElementById('resultado').style.backgroundColor='grey';
     }
     else if(b<66){
         //pedra
         document.getElementById('imgPedraMaq').style.width = '150px';
         document.getElementById('imgPedraMaq').style.backgroundColor = 'red';
         result.innerHTML='<img src="pedraPapel.png" alt="resultado" id="imgResultado">'
         respostaRes.innerHTML = `<h1>Ganhou <br>✨✨</h1> `
        document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
    }
    else if(66<=b){
    //tesoura
    document.getElementById('imgTesouraMaq').style.width = '150px';
    document.getElementById('imgTesouraMaq').style.backgroundColor = 'red';
    result.innerHTML='<img src="tesouraPapel.png" alt="resultado" id="imgResultado">'
    respostaRes.innerHTML = `<h1>Perdeu <br> 😟😟</h1>`
    document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
    }
}
//escolher tesoura
function jogote(){
    var aleatorio = Math.random();
    var a = aleatorio*100
    var b = a.toFixed(0)
    document.getElementById('imgTesoura').style.width = '150px';
    document.getElementById('imgTesoura').style.backgroundColor = 'chartreuse';
    //removendo os outros
        document.getElementById('imgPedra').style.width = '100px';
        document.getElementById('imgPedra').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        document.getElementById('imgPapel').style.width = '100px';
        document.getElementById('imgPapel').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        //Removendo a maquina
        document.getElementById('imgTesouraMaq').style.width = '100px';
        document.getElementById('imgTesouraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        document.getElementById('imgPapelMaq').style.width = '100px';
        document.getElementById('imgPapelMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
        document.getElementById('imgPedraMaq').style.width = '100px';
        document.getElementById('imgPedraMaq').style.backgroundColor = 'rgba(255, 255, 255, 0.637)';
    
    if( b < 33){
        //papel
        document.getElementById('imgPapelMaq').style.width = '150px';
        document.getElementById('imgPapelMaq').style.backgroundColor = 'red';
        result.innerHTML='<img src="tesouraPapel.png" alt="resultado" id="imgResultado">'
        respostaRes.innerHTML = `<h1>Ganhou <br>✨✨</h1> `
        document.getElementById('resultado').style.backgroundColor='rgb(64, 67, 255)';
     }
     else if(b<66){
         //pedra
         document.getElementById('imgPedraMaq').style.width = '150px';
         document.getElementById('imgPedraMaq').style.backgroundColor = 'red';
         result.innerHTML='<img src="pedraTesoura.png" alt="resultado" id="imgResultado">'
         respostaRes.innerHTML = `<h1>Perdeu <br> 😟😟</h1>`
        document.getElementById('resultado').style.backgroundColor='rgb(255, 116, 116)';
    }
    else if(66<=b){
    //tesoura
    document.getElementById('imgTesouraMaq').style.width = '150px';
    document.getElementById('imgTesouraMaq').style.backgroundColor = 'red';
    result.innerHTML='<img src="tesouraTesoura.png" alt="resultado" id="imgResultado">'
    respostaRes.innerHTML = `<h1>Empatou <br>🤜🤛</h1>`
    document.getElementById('resultado').style.backgroundColor='grey';
    }
}
function reload(){
    location.reload(forcedReload);
}