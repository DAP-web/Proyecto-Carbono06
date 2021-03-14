"use strict";

var monthsArr, strMonthGlobal;

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

    // daysBoxes(parseInt(dateArr[1]), dateArr[0]);
    
    cleanValues("inputDate");
}

//Limpia la caja del input
function cleanValues(pID){
    document.getElementById(pID).value = "";
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
    let strDate, strTask;
    
    strDate = document.getElementById("mesIterativo").innerHTML;
    strTask = document.getElementById("task").value;
    
    if(strDate === "" || strDate === undefined) {
        alert("Select a date to add tasks!");
    } else if(strTask === "") {
        alert("Enter a task to add!");
    } else {
        addTaskToLocalStorage(strDate, strTask);
    }

}

function addTaskToLocalStorage(pDate, pTask) {
    let intId = 0, strUser = "", strPriority = "", objInfo = {}, arrResult = [];
    
    intId = Math.floor(Math.random() * 100) + 1;
    strUser = "Diego" + intId;
    strPriority = "Alta";

    objInfo = {
        id:intId, 
        user:strUser, 
        priority:strPriority, 
        date:pDate, 
        task:pTask
    };

    if (localStorage.getItem("listTasks") !== null) {
        arrResult = JSON.parse(localStorage.getItem("listTasks"));
    }

    arrResult.push(objInfo);
    localStorage.setItem("listTasks", JSON.stringify(arrResult));

    cleanValues("task");
}



//FUNCTION TO ADD TASKS TO LOCAL STORAGE START *************