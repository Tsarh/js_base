const operation = document.querySelector('.operation');
const egale = document.querySelector('button');
const inpute = document.querySelector('input');
const reponse = document.querySelector('.reponse');
const score = document.querySelector('.score');

var scr = 0;
var a = Math.floor(Math.random()*10);
var b = Math.floor(Math.random()*10);
var c = a+b;
operation.innerHTML = a + " + " + b;

egale.addEventListener('click',()=>{
    if(inpute.value == c){
        reponse.innerHTML = "correcte";
        reponse.style.backgroundColor = "rgba(4, 255, 4, 1)"
        reponse.style.color = "rgb(0, 110, 255)"
        a = Math.floor(Math.random()*10);
        b = Math.floor(Math.random()*10);
        operation.innerHTML = a + " + " + b;
        c = a+b;
        scr += 1;
    }
    else{
        reponse.innerHTML = "incorrecte";
        reponse.style.backgroundColor = "rgba(8, 8, 8, 0.678)"
        reponse.style.color = "red";
        egale.style.visibility = "hidden"
        inpute.style.visibility = "hidden"
        operation.style.visibility = "hidden"
        score.style.visibility = "visible"
        score.innerHTML = "scores   " + scr;
    }
})
