let btn1 = document.getElementById("bouton1")
let btn2 = document.getElementById("bouton2")
let carre = document.getElementById("carre")
let radius = 0;


btn1.textContent = "+1 px";
btn2.textContent = "-1 px";



function increseRadius(){
    if( radius < 50 ){
        radius++; 
    }
    
    document.getElementById("carre").style.borderRadius = radius+"%";
    
}

function decreseRadius(){
    if (radius > 0) {
        radius--; 
    }
    
    document.getElementById("carre").style.borderRadius = radius+"%";

}



document.getElementById("bouton1").addEventListener("click",function(){
    increseRadius();
})

document.getElementById("bouton2").addEventListener("click",function(){
    decreseRadius();
})





// btn1.addEventListener("click" , function addradius(){
// carre.classList.add("mystyle");
// });

// btn2.addEventListener("click" , function removeradius(){
// carre.classList.remove("mystyle");
// });

