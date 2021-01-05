var vez = 0
var delay = 50;
var a1 
var a2 
var a3 
var b1 
var b2 
var b3
var c1 
var c2 
var c3 
var v
var vel = true
var res1 = 1
var res2 = 1
var gameOver = false
var jogada = function (a){
    var x = document.getElementById(a)
    if (gameOver == false){
        var clase = document.getElementsByClassName("tab")
         if ( vez === 0 & x.innerHTML == ''){
            x.innerHTML = "X"
            vez = 1
            v = "X"
        }else if(vez === 1 & x.innerHTML == '') {
            x.innerHTML = "0"
            vez = 0
            v = "0"
        }
        console.log(clase[0].innerHTML)
        verificar();
        setTimeout(vitoria, delay);
        setTimeout(velha, delay);
        
    }
    
    
    
    
    
}

var velha = function(){
    if (vel == true && a1 != "" && a2 != "" && a3 != "" && b1 != "" && b2  != "" && b3 != "" && c1 != "" && c2 != "" && c3 != "" ){
        document.getElementById("victoria").style.display = "flex"
        document.getElementById("vitoriaPlayer").innerHTML = "Velha"
    }
}

var verificar = function(){
    a1 = document.getElementById('t1').innerHTML
    a2 = document.getElementById('t2').innerHTML
    a3 = document.getElementById('t3').innerHTML
    b1 = document.getElementById('t4').innerHTML
    b2 = document.getElementById('t5').innerHTML
    b3 = document.getElementById('t6').innerHTML
    c1 = document.getElementById('t7').innerHTML
    c2 = document.getElementById('t8').innerHTML
    c3 = document.getElementById('t9').innerHTML

}

var vitoria = function(){
    
    if((a1 == a2 && a1 == a3 && a1 != "") || (a1 == b1 && a1 == c1 && a1 != "")  || (a1 == b2 && a1 == c3 && a1 != "") || (a2 == b2 && a2 == c2 && a2 != "") || (a3 == b3 && a3 == c3 && a3 != "") || (b1 == b2 && b1 == b3 && b1 != "") || (c1 == c2 && c1 == c3 & c1 != "") || (a3 == b2 && a3 == c1 && a3 != "")){
        gameOver = true
        console.log(gameOver)
        vel = false
        if (v == "X"){
            document.getElementById('player1').innerHTML = res1
            res1 = res1 + 1
        }else{
            document.getElementById('player2').innerHTML = res2
            res2 = res2 + 1
        }
        vencedor()
    }
}

var reset = function(){
    gameOver = false
    vel = true
    for (var i = 1; i < 10; i++)
    document.getElementById("t" +i).innerHTML = ""
    document.getElementById("victoria").style.display = "none"
}

var vencedor = function(){
    document.getElementById("victoria").style.display = "flex"
    document.getElementById("vitoriaPlayer").innerHTML = "O jogador " + v + " venceu"
    
    
}
