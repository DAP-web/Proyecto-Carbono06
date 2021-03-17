//agregar el close button y agregarlo a los items de la lista
var myNodelist = document.getElementsByTagName("LI");
for(var i=0; i<myNodelist.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

//dar click en close y ocultar el elemento presionado
function addCloseFunction(){
    var close = document.getElementsByClassName("close");
    for(var i=0; i<close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display="none";
        };
    }
}

addCloseFunction();

//como marcar un elemento de la lista como checked
var list = document.querySelector("ul");
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

//crear un nuevo elemento de la lista al dar click en add
function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("tareas").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue===""){
        alert("debe escribir una tarea!");
    }else{
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("tareas").value="";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    addCloseFunction();
}