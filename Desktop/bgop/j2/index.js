// Les Selecteurs

//document.querySelector("h4").style.background = "white"

//const baliseHtml = document.querySelector("h4");

//console.log(baliseHtml);

//baliseHtml.style.background = "white" ou borderRdius


// Les click event ( les evennement de click)

//const question = document.querySelector(".mon-click");

//question.addEventListener("click", () =>
//{
  //  console.log("Click !");
//}
//);

//const question = document.querySelector(".mon-click");

//question.addEventListener("click", () =>
//{
    //question.style.background = "white"
    //si on a plusieurs style 
    //question.classList.add("clicked");
   // question.classList.toggle("clicked");

//}
//);



const question = document.querySelector(".mon-click");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector(".faux")
const response1 = document.querySelector(".vrai")

//console.log(btn1 , btn2);
question.addEventListener("click", () =>
{
  
   // question.classList.toggle("clicked");


});

//ajout evenement
btn1.addEventListener("click", ()=>
{
    //console.log("Click !");
   // response.style.visibility = "visible"
   //response.classList.add("voir-response");
   response.classList.toggle("voir-response");
    response.style.background = "red";
    response.style.borderRadius = "15px";
    
}
);
btn2.addEventListener("click", ()=>
{
    //console.log("Click !");
   // response.style.visibility = "visible"
  // response1.classList.add("voir-response");
  response1.classList.toggle("voir-response");
    response1.style.background = "green";
    response1.style.borderRadius = "15px";
    
}
);



//mousses
//const mousemove = document.querySelector(".mousemove")
//0console.log(mousse)
//window.addEventListener("mousemove",()=>{
   // console.log("MOUSEMOVE !!!");
//});


const mousemove = document.querySelector(".mousemove")
//0console.log(mousse)
window.addEventListener("mousemove",(e)=>{
    //console.log(e)
    //console.log(e.target)
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
    
});
//Les autre mouvement en plus
//up et down
window.addEventListener("mousedown",()=>{
    mousemove.style.transform = "scale(2) translate(-25%, -50%)";
    
});

window.addEventListener("mouseup",()=>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
    
});

question.addEventListener("mouseenter", ()=>{
    question.style.background = " rgba(0,0,0,0.6)" ;
});

question.addEventListener("mouseout", ()=>{
    question.style.background = "blue" ;
});

response.addEventListener("mouseover", ()=>{
    response.style.transform = "rotate(2deg)";
    

});


response1.addEventListener("mouseover", ()=>{
   
    response1.style.transform = "rotate(-2deg)";

});

//keypress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");



//plusieur mp3
//const joue =(key) =>{
   // const audio = new Audio();
   // audio.src = key + ".mp3";
    //audio.play()
//}

const joue =() =>{
    const audio = new Audio();
    audio.src =  "./m.mp3";
    audio.play()
}
//pour declencher un evenement quand on appuis sur une touche conslog simple
//apres e
//apres e.key
document.addEventListener("keypress",(e)=>{
    //console.log(e.key);
    key.textContent=e.key

    if (e.key ==="j") {
        keypressContainer.style.background= "yellow";
    } else if (e.key==="p"){
        keypressContainer.style.background= "red";
    } else{
        keypressContainer.style.background= "teal";
    }
joue();
    //joue(e.key);
})

// ajouter du song
//joue(e.key);


// scrolle evennement

const nav = document.querySelector("nav");
 //console.log(nav)

 window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    //quand on descend

    if(window.scrollY > 120)
    {nav.style.top=0;
    }else{
        nav.style.top="-50px"
    }
 })



 // formulaires evenements
 const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
    // le comportement par defaut du navigateru
  e.preventDefault();
//inner html ou textcontent
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//load evenement


window.addEventListener("load",()=>{
    console.log("Document chargé");
})


//
const boxes = document.querySelectorAll("box");
boxes.forEach((box) =>{
    box.addEventListener()
})








//Le Bom