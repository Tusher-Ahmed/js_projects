let colors=["green","red","blue","pink","gray","magenta","yellow","violet"];

let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let randomColor=getRandomColor();
    document.body.style.backgroundColor=colors[randomColor];
    color.textContent=colors[randomColor];
})

let getRandomColor=()=>{
    return Math.floor(Math.random()*colors.length);
}