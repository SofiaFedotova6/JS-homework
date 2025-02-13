document.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelectorAll(".clickbox");
    box.forEach(function(clickbox){
        clickbox.addEventListener("click", function(){
            if(clickbox.style.backgroundColor === "lightsteelblue"){
                clickbox.style.backgroundColor = "yellow";
                clickbox.style.margin = '2vw';
                console.log("change color");
            }
            else{
                clickbox.style.backgroundColor = "lightsteelblue";
                clickbox.style.margin = '1vw';
            }
        });
    });
    let button1 = document.querySelectorAll(".glassbutton2");
    button1.forEach(function(glassbutton2){
        glassbutton2.addEventListener("click", function(){
            let textElement = glassbutton2.querySelector("p");
            if (textElement.textContent === "Нажми") {
                textElement.textContent = "Уже нажал";
            } else {
                textElement.textContent = "Нажми"; 
            }
        });
    });

let button2 = document.querySelectorAll(".neobutton"); 
button2.forEach(function(button2) {
button2.addEventListener("click", function() {
    if (button2.style.boxShadow.includes("inset")) {
        button2.style.boxShadow = "14px 15px 11px 3px rgba(34, 60, 80, 0.18)";
    } else {
        button2.style.boxShadow = "inset 5px 5px 10px rgba(34, 60, 80, 0.3)"; ь
    }

    let textElement = button2.querySelector("p");
            if (textElement.textContent === "Мяу") {
                textElement.textContent = "Гав";
            } else {
                textElement.textContent = "Мяу"; 
            }
});
});
});