// function imgSlider(anything){
//     document.querySelector(".calendario").src = "./img/"+anything
// }

// function changeBgColor(color){
//     const sec = document.querySelector('.sec')
//     sec.style.background = color
// }

function showBeneficios(){
    document.getElementById("acerca1").style.display = "none";
    document.getElementById("contactanos1").style.display = "none";
    document.getElementById("beneficios").style.display = "block";
    
}

function showAcerca(){
    document.getElementById("contactanos1").style.display = "none";
    document.getElementById("beneficios").style.display = "none";
    document.getElementById("acerca1").style.display = "block";
}

function showContacto(){
    document.getElementById("beneficios").style.display = "none";
    document.getElementById("acerca1").style.display = "none";
    document.getElementById("contactanos1").style.display = "block";
}

w3.includeHTML();