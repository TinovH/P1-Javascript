let element = document.getElementById("prod");
let budget = 100;

function myFunction() {
    let product = prompt("Hoe duur is het product", "");
    if (budget > product) {
        element.innerHTML = "U heeft genoeg geld!";
        element.style.color = "green";
    } else if (budget < product) {
        element.innerHTML = "Helaas, te weinig geldt";
        element.style.color = "red";
    }
}




//if (budget > 60) {
//    element.innerHTML = "U heeft genoeg geld!";
//    element.style.color = "green";
//} else if (budget < 60) {
//    element.innerHTML = "Helaas, te weinig geldt";
//    element.style.color = "red";
//}