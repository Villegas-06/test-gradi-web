const btnNext = document.querySelector(".bgButtonNext > button.next");

console.log(btnNext);

btnNext.addEventListener("click", function(e){
    if(btnNext.click){
        console.log("click next")
    }
}) 

const btnPrev = document.querySelector(".bgButtonPrev > button.previous");

console.log(btnPrev);

btnPrev.addEventListener("click", function(e){
    if(btnNext.click){
        console.log("click prev")
    }
}) 
