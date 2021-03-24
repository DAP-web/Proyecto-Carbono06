"use strict";

var monthsArr, userGlobal = "", emailGlobal = "";  

monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//SALUDO AL ENTRAR START***************************
function checkSessionStorage() {
    let currentSessionUser = [];

    if (sessionStorage.getItem("currentUser") !== null) {
        currentSessionUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }
    userGlobal = currentSessionUser[0].usuario;
    emailGlobal = currentSessionUser[0].correo;

    document.getElementById("saludo").style.display = "block";
    document.getElementById("saludo").innerHTML = "Welcome " + userGlobal + ".";

    document.getElementById("userNavBar").innerHTML = userGlobal;
    document.getElementById("emailNavBar").innerHTML = emailGlobal;
}
checkSessionStorage();

function logOfSession() {
    let currentSessionUser = [];

    if (sessionStorage.getItem("currentUser") !== null) {
        sessionStorage.removeItem("currentUser");
    }

    window.location.href = "/login";
}

//SALUDO AL ENTRAT END*****************************

//Funcion que ensenha el titulo del mes y anho que se escoja
function selectMonth() {
    let strDate, dateArr, strMonth;

    strDate = document.getElementById("inputDate").value;
    dateArr = strDate.split("/");
    strMonth = monthsArr[parseInt(dateArr[0]) - 1];
    strDate = strMonth.concat("/", dateArr[1], "/", dateArr[2]);
    document.getElementById("boxMesIterativo").style.display = "block";
    document.getElementById("addElement").style.display = "block";
    document.getElementById("mesIterativo").innerHTML = strDate;

    if(document.getElementById("listToDo").style.display === "none") {
        document.getElementById("listToDo").style.display = "block";
    }

    cleanListToDo();
    listTasks(getTasksFromLocalStorage(strDate));
    cleanValues("inputDate");
}

//Limpia la caja del input
function cleanValues(pID){
    document.getElementById(pID).value = "";
}

function cleanListToDo() {
    let list, listLength = 0, i = 0;

    list = document.getElementById("lista");
    listLength = list.childNodes.length;

    while(i < listLength) {
        list.removeChild(list.childNodes[0]);
        i++;
    }
}

function getTasksFromLocalStorage(pDate) {
    let arrTasks = [], arrResult = [], intArrLength = 0, currentTask = {};

    if (localStorage.getItem("listTasks") !== null) {
        arrTasks = JSON.parse(localStorage.getItem("listTasks"));
    }
    intArrLength = arrTasks.length;

    for(currentTask of arrTasks) {
        if(pDate === currentTask.date && userGlobal === currentTask.user) {
            arrResult.push(currentTask);
        }
    }

    return arrResult;
}

function listTasks(pTasks) {
    let liElement, textNode, spanElement, txt, strTask = "",
        currentTask = {};

    liElement = document.createElement("li");

    for(currentTask of pTasks) {
        strTask = currentTask.task + " - Prioridad " + currentTask.priority;

        textNode = document.createTextNode(strTask);
        liElement.appendChild(textNode);

        document.getElementById("lista").appendChild(liElement);

        spanElement = document.createElement("SPAN");
        txt = document.createTextNode("\u00d7");
        spanElement.className = "closeButton";
        spanElement.appendChild(txt);
        liElement.appendChild(spanElement);

        closeFunction();

        liElement = document.createElement("li");
    }
}

//Navbar to the right START***********************
// Function expression to select elements `

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
            console.log(index/7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
                console.log(index/7 + 0.5)
            }
        })
    })
})

//Navbar to the right END*************************


//FUNCTION TO ADD TASKS TO LOCAL STORAGE START *************

function checkTask(){
    let strDate = "", strTask = "", strPriority = "";
    
    strDate = document.getElementById("mesIterativo").innerHTML;
    strTask = document.getElementById("task").value;
    strPriority = document.getElementById("priority").value;

    if(strDate === "" || strDate === undefined) {
        alert("Select a date to add tasks!");
    } else if(strTask === "" || strPriority === "") {
        alert("Fill up all the information!");
    } else {
        addTaskToLocalStorage(strDate, strTask, strPriority);
    }

}

function addTaskToLocalStorage(pDate, pTask, pPriority) {
    let objInfo = {}, arrResult = [];

    objInfo = {
        user: userGlobal, 
        priority: pPriority, 
        date: pDate, 
        task: pTask
    };

    if (localStorage.getItem("listTasks") !== null) {
        arrResult = JSON.parse(localStorage.getItem("listTasks"));
    }

    arrResult.push(objInfo);
    localStorage.setItem("listTasks", JSON.stringify(arrResult));

    addTaskToList(pTask, pPriority);

    cleanValues("task");
    cleanValues("priority");
}


//FUNCTION TO ADD TASKS TO LOCAL STORAGE END *************


//FUNCIONALIDAD PARA LISTAR TAREAS POR DIA
function addTaskToList(pTask, pPriority) {
    let liElement, textNode, spanElement, txt, strTask = "";

    strTask = pTask.concat(" - Prioridad ", pPriority);

    liElement = document.createElement("li");
    textNode = document.createTextNode(strTask);
    liElement.appendChild(textNode);

    document.getElementById("lista").appendChild(liElement);

    spanElement = document.createElement("SPAN");
    txt = document.createTextNode("\u00d7");
    spanElement.className = "closeButton";
    spanElement.appendChild(txt);
    liElement.appendChild(spanElement);

    closeFunction();
}

function closeFunction() {
    let close, i = 0, div;

    close = document.getElementsByClassName("closeButton");
    for(i; i < close.length; i++) {
        close[i].onclick = function() {
            div = this.parentElement;
            div.style = "background-color: red";
        }
    }
}




w3.includeHTML();