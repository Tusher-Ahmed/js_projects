const reviews=[
    {
        id:0,
        name:"jara khan",
        job:"ux designer",
        img:"./img/c3.jpg",
        text:" Laborum corporis qui sapiente itaque sequi vitae ab ipsum iusto maiores? Beatae, nulla minus minima possimus vitae ducimus sint rem odit porro voluptatibus eum magnam laborum fuga neque numquam aliquid repudiandae ratione ea. Eligendi nam quibusdam fuga iusto consectetur eos nostrum blanditiis?"
    },
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:"./img/c4.jpg",
        text:"Lorem equi vitae ab ipsum iusto maiores? Beatae, nulla minus minima possimus vitae ducimus sint rem odit porro voluptatibus eum magnam laborum fuga neque numquam aliquid repudiandae ratione ea. Eligendi nam quibusdam fuga iusto consectetur eos nostrum blanditiis?"
    },
    {
        id:2,
        name:"anna jhonson",
        job:"web designer",
        img:"./img/c5.jpg",
        text:"amet sequi vitae ab ipsum iusto maiores? Beatae, nulla minus minima possimus vitae ducimus sint rem odit porro voluptatibus eum magnam laborum fuga neque numquam aliquid repudiandae ratione ea. Eligendi nam quibusdam fuga iusto consectetur eos nostrum blanditiis?"
    },
    {
        id:3,
        name:"Cris smith",
        job:"QA Engineer",
        img:"./img/c6.jpg",
        text:"sequi vitae ab ipsum iusto maiores? Beatae, nulla minus minima possimus vitae ducimus sint rem odit porro voluptatibus eum magnam laborum fuga neque numquam aliquid repudiandae ratione ea. Eligendi nam quibusdam fuga iusto consectetur eos nostrum blanditiis?"
    },
    {
        id:4,
        name:"Mayler Moin",
        job:"Software developer",
        img:"./img/c7.jpg",
        text:"Laborum corporis qui sapiente itaque sequi minima possimus vitae ducimus sint rem odit porro voluptatibus eum magnam laborum fuga neque numquam aliquid repudiandae ratione ea. Eligendi nam quibusdam fuga iusto consectetur eos nostrum blanditiis?"
    }
]

const img=document.querySelector(".person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prev=document.querySelector(".prev-btn");
const next=document.querySelector(".next-btn");
const random=document.getElementById("random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",()=>{
showPerson(currentItem);
})
const showPerson=(person)=>{
    const item=reviews[person];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

prev.addEventListener("click",()=>{
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})
next.addEventListener("click",()=>{
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
random.addEventListener("click",()=>{
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})