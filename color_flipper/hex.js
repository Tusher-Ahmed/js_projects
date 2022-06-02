let colors=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];

let btn=document.getElementById("btn");
let color=document.querySelector(".color");

btn.addEventListener("click",()=>{
    let hexColor="#";
    for(let i=0;i<6;i++)
    {
        let randomColor=getRandomColor();
        hexColor+=colors[randomColor];
    }
    document.body.style.backgroundColor=hexColor;
    color.textContent=hexColor;
})

let getRandomColor=()=>{
    return Math.floor(Math.random()*colors.length);
}