const colors = ["blue","red","darkslateblue","salmon","crimson","darkslategrey","aqua","black","yellow","green","skyblue","navyblue","orange","purple","brown","pink"];
const container = document.querySelector(".container");
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * colors.length);
    let randomColor = colors[randomNumber];
    container.style.backgroundColor = randomColor;
    color.textContent = randomColor;
    color.style.color = randomColor; 
})