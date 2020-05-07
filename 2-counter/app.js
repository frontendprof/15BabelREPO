

let count=0;

const val=document.querySelector('#value');
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const cls=e.currentTarget.classList;

        if(cls.contains("dec")){
            count--;
        }
        else if(cls.contains("inc")){
            count++;
        }
        if(cls.contains("reset")){
            count=0;
        }

        val.textContent=count;

    });

});
