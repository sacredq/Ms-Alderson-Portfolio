const barsBtn = document.getElementById("bars");
const navBar = document.getElementById("navBar");

barsBtn.addEventListener("click", function(){
    navBar.classList.toggle("activeBar");

    barsBtn.classList.toggle("fa-bars");
    barsBtn.classList.toggle("fa-xmark");
})