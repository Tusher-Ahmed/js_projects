let counts=0;

let btns=document.querySelectorAll(".btn");
let count=document.getElementById("number");

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
       const styles=e.currentTarget.classList;
       if(styles.contains('increase'))
       {
           counts++;
       }
       else if(styles.contains('decrease'))
       {
           if(counts>0){
            counts--;
           } 
       }
       else{
           counts=0;
       }
       count.textContent=counts;
    })
})