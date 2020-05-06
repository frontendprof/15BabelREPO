const hexes = ["1", "2", "3", "4", "5","6","7","8", "9","A","B","C","D","E"];


const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener('click',randomHexFunc());

let hexValue=Math.floor(Math.random*hexes.length);

function randomHexFunc(){
    let hash="#";

    for(let i=0;i<6;i++){
        hash+=hexes[hexValue];
    }

    document.body.style.backgroundColor=hash;
    color.textContent=hash;
}

