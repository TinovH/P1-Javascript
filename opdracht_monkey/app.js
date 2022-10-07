const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

closedFace.addEventListener("click", function(){
    closedFace.style.display = "none";
    openFace.style.display = "block";
});
openFace.addEventListener("click", function(){
    closedFace.style.display = "block";
    openFace.style.display = "none";
});


