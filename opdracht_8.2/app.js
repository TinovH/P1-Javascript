let out = document.getElementById("ant")
let in1 = document.getElementById("getal1")
let in2 = document.getElementById("getal2")


const add = function() {
    if (in1.value > 0 && in2.value > 0) {
    answer = Number(in1.value) + Number(in2.value) ;
    out.innerText = "Het antwoord is: " + answer;
    } else {
out.innerText = "het getal is te laag";
}
}

const minus = function() {
    if (in1.value > 0 && in2.value > 0) {
    answer = in1.value - in2.value ;
    out.innerText = "Het antwoord is: " + answer;
    } else {
    out.innerText = "het getal is te laag";
}
}

const multiply = function() {
    if (in1.value > 0 && in2.value > 0) {
    answer = in1.value * in2.value ;
    out.innerText = "Het antwoord is: " + answer;
    } else {
    out.innerText = "het getal is te laag";
}
}

const devide = function() {
    if (in1.value > 0 && in2.value > 0) {
    answer = in1.value / in2.value ;
    out.innerText = "Het antwoord is: " + answer;
    } else {
    out.innerText = "het getal is te laag";
}
}
