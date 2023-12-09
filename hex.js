const colors = ["1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNumber];
    let hex = "#"
    for(let i =0; i < 6; i++){
        hex += randomNumber;
        console.log(hex) 
    }
    container.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor; 
})