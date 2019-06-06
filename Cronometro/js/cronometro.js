"use - strict"

var horas = checkTime(0);
var minutos = checkTime(0);
var segundos = checkTime(0);

var crono;
var started = false;

function reset(){
    horas = checkTime(0);
    minutos = checkTime(0);
    segundos = checkTime(0);
    document.getElementById("reloj").innerHTML = horas + ":" + minutos + ":" + segundos;
    reloj.style.fontSize = "xx-large";
    setHours(horas);
    setMinutes(minutos);
    setSeconds(segundos);
}

function start(){
    if(!started){
        started = true;
        crono = setInterval(update,0000);
        document.getElementById("inicio").disabled = true;
        document.getElementById("parar").disabled = false;
        setState("running");
    }  
}

function stop(){
    clearInterval(crono);
    started = false;
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    setState("stopped");
}

function update(){
    segundos++;
    segundos = checkTime(segundos);
    setSeconds(segundos);
    if(segundos >=60){
        minutos++;
        minutos = checkTime(minutos);
        segundos = checkTime(0);
        setMinutes(minutos);
    }
    if(minutos >= 60){
        horas++;
        horas = checkTime(horas);
        minutos = checkTime(0);
        setHours(horas);
    }
    document.getElementById("reloj").innerHTML = horas + ":" + minutos + ":" + segundos;
    reloj.style.fontSize = "xx-large";
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

function setState(state){
    localStorage.setItem("estado",state);
}

function setSeconds(seconds){
    localStorage.setItem("seconds",seconds);
}

function setMinutes(minutes){
    localStorage.setItem("minutes",minutes);
}

function setHours(hours){
    localStorage.setItem("hours",hours);
}

window.onload = function(){
    var state = localStorage.getItem("estado");
     segundos = localStorage.getItem("segundos") != null ? localStorage.getItem("seconds") : checkTime(0);
     minutos = localStorage.getItem("minutes") != null ? localStorage.getItem("minutes") : checkTime(0);
     horas = localStorage.getItem("hours") != null ? localStorage.getItem("hours") : checkTime(0);

    document.getElementById("reloj").innerHTML = horas + ":" + minutos + ":" + segundos;
    reloj.style.fontSize = "xx-large";
    if(state == "running"){
        start();
    }
}