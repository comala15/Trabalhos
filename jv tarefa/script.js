

function caixinha() {
    alert("Olá mundo")

}
function btt() {
    let nome = "Marco"
    alert(nome)
}
function sma() {
    let a = 5;
    let b = 10;
    let soma = a + b;
    alert(soma);
}


function  mudar () {
    let texto = document.getElementById("textinho");
    texto.textContent ="um texto melhor";   
}
function mudarr (){  
    let texto = document.getElementById("textinho");
    texto.textContent ="";   

}
function  mudara () {
    let texto = document.getElementById("textinho");
   texto.textContent ="Um texto interessante";
     texto.style.backgroundColor = "";
     cortop.style.backgroundColor = "";
}
function mudar_cor(){
   let texto = document.getElementById("textinho");
    texto.style.backgroundColor = "red"; 
}
function clik(){
    let texto = document.getElementById("clikt");
    texto.textContent ="você clicou ";
}

function funcaotop(){
    let caixa = document.getElementById("caixa");
    let texto = document.getElementById("texto");
    let result = texto.textContent;
    caixa.value = result;
}




function numerotop(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let resultado = Number(numero1) * Number(numero2);
    let local = document.getElementById("result");
    local.textContent = resultado ;
}
function cor(){
    cortop.style.backgroundColor = "red";
}
function colortop(){
    let texto = document.getElementById("textotop");
    fontsize = "50px";
     texto.style.fontSize = fontsize;
}
function bo(){
    let texto = document.getElementById("textotop");
    textotop.style.color= "red";
}
function ba(){
    let texto = document.getElementById("textotop");
     texto.textContent ="aoba";
     texto = document.getElementById("textinho");
     texto.textContent = "oi";
}
function bo2(){
    let texto = document.getElementById("textotop");
     texto.textContent ="aoba";
     texto = document.getElementById("textinho");
     texto.textContent = "oi";
     texto = document.getElementById("textt");
     texto.textContent = "opa";
}
function bot(){
        let texto = document.getElementById("textotop");
     texto.textContent ="aoba";
        texto.style.color= "red";
        texto.style.fontSize = "50px";
}

function cr(){
    let texto = document.getElementById("texto");
    texto.style.color = "red";
}

function tn(){
let texto = document.getElementById("texto");
texto.style.fontSize = "50px";
}

function tt(){
    let texto = document.getElementById("texto");
    texto.textContent ="67"

}


