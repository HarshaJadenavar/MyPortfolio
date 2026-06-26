
// typing animation

const words=[
"Python Developer",
"Full Stack Developer",
"Data Science Enthusiast",
"AI Explorer"
];


let i=0;
let j=0;


function typing(){

document.getElementById("typing").innerHTML
=
words[i].substring(0,j++);


if(j>words[i].length){

j=0;

i=(i+1)%words.length;

}


setTimeout(typing,180);

}


typing();



// scroll animation


window.addEventListener(
"scroll",
()=>{


document
.querySelectorAll(".reveal")
.forEach(item=>{


if(
item.getBoundingClientRect().top
<
window.innerHeight-100
){

item.classList.add("active");

}


});


});



// Dark Light mode


document
.getElementById("theme")
.onclick=()=>{


document.body.classList.toggle(
"light"
);


};



// Mobile menu


document
.getElementById("menu")
.onclick=()=>{


let nav=
document.getElementById("nav");


nav.style.display =
nav.style.display==="block"
?
"none"
:
"block";


};