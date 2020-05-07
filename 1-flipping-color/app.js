const colors = ["green", "red", "cyan", "red", "yellow","magenta","coral", "rgba(133,122,200)", "#f15025"];


const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomColor=Math.floor(Math.random()*colors.length);
    console.log(randomColor);
    
    document.body.style.backgroundColor=colors[randomColor];
    color.textContent=colors[randomColor];
})