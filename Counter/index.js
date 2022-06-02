let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");

let number=document.getElementById("number");
let num=0;
btn1.addEventListener("click",()=>{
    num++;
    number.textContent=num;
})
btn2.addEventListener("click",()=>{
    number.textContent=0;
})
btn3.addEventListener("click",()=>{
    if(num>0){ num--;}
    number.textContent=num;
})


