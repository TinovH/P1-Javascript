let out = document.getElementById("ant")
let in1 = document.getElementById("getal1")
let in2 = document.getElementById("getal2")


const add = function() {
    answer = Number(in1.value) + Number(in2.value) ;
    out.innerText = "Het antwoord is: " + answer;
}

const minus = function() {
    answer = in1.value - in2.value ;
    out.innerText = "Het antwoord is: " + answer;
}

const multiply = function() {
    answer = in1.value * in2.value ;
    out.innerText = "Het antwoord is: " + answer;
}

const devide = function() {
    answer = in1.value / in2.value ;
    out.innerText = "Het antwoord is: " + answer;
}
