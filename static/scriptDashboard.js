let userSelectedGlobal = "";

function peakTasks(){
    document.getElementById("listUsers").style.display = "none";
    document.getElementById("input-Date-Box-Hidden").style.display = "block";
    document.getElementById("opcionRemoverUsuarios").style.display = "none";
    document.getElementById("container-Input-Eliminar").style.display = "none";
}

function peakUsers(){
    document.getElementById("input-Date-Box-Hidden").style.display = "none";
    document.getElementById("boxMesIterativo").style.display = "none";
    document.getElementById("addElement").style.display = "none";
    document.getElementById("listToDo").style.display = "none";

    document.getElementById("listUsers").style.display = "block";
    document.getElementById("container-Input-Eliminar").style.display = "none";
    
    cleanUsers();
    listUsers(getUsersFromLocalStorage());

    document.getElementById("opcionRemoverUsuarios").style.display = "block";
}

function cleanUsers(){
    let table, intRows = 0, intContador = 1;

    table = document.getElementById("usersList-w3");

    intRows = table.rows.length;

    if(intRows > 1){
        for(intContador; intContador < intRows; intContador++){
            table.deleteRow(-1);
        }
    }
}

function getUsersFromLocalStorage(){
    let arrUsers = [], currentUser = {}, arrResult = [],
        boolRol = false;

    if (localStorage.getItem("wUserArray") !== null) {
        arrUsers = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for(currentUser of arrUsers) {
        boolRol = "admin" === currentUser.rol;

        if(boolRol) {
            continue;
        }

        arrResult.push(currentUser);
    }

    return arrResult;
}

function listUsers(usersArray){
    let table, row, cell1, cell2, currentUser = {};

    table = document.getElementById("usersList-w3");

    for(currentUser of usersArray){
        row = table.insertRow(-1);
        row.setAttribute("id", "trForTableUser")

        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell1.setAttribute("id", "tdforTableUser")
        cell2.setAttribute("id", "tdforTableUser")
    
        cell1.innerHTML = currentUser.correo;
        cell2.innerHTML = currentUser.usuario;
    }

}

function cleanUsersToDelete(){
    let select, totalOptions = 0, intContador = 0;

    select = document.getElementById("user");
    totalOptions = select.length;

    while(select.length > 0){
        select.remove(select.length-1);
    }
}

function listUsersToDelete(){
    let select, option, currentUser = {}, arrUsers = [],
        valor = "";

    cleanUsersToDelete();
    document.getElementById("container-Input-Eliminar").style.display = "block";
    select = document.getElementById("user");

    if (localStorage.getItem("wUserArray") !== null) {
        arrUsers = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for(currentUser of arrUsers){

        if("cliente" === currentUser.rol){
            option = document.createElement("option");
            option.text = currentUser.usuario;
            option.value = currentUser.correo;
            select.add(option, select[-1]);
        } else {
            continue;
        }
        
    }

}

function deleteUserCliente(){
    let correo = "", arrUsers = [], currentUser = {}, arrResult = [];

    correo = document.getElementById("user").value;

    if (localStorage.getItem("wUserArray") !== null) {
        arrUsers = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for(currentUser of arrUsers){

        if(correo !== currentUser.correo){
            arrResult.push(currentUser);
        } else {
            continue;
        }
    }

    localStorage.setItem("wUserArray", JSON.stringify(arrResult));
    cleanValues("user");
    peakUsers();
}

//FUNCTION TO ADD TASKS TO LOCAL STORAGE START *************

function cleanUsersTask(){
    let select;

    select = document.getElementById("userSelected");

    while(select.length > 0){
        select.remove(select.length-1);
    }
}

function listUsersTask(){
    let select, option, currentUser = {}, arrUsers = [],
        valor = "";

    cleanUsersTask();
    select = document.getElementById("userSelected");

    if (localStorage.getItem("wUserArray") !== null) {
        arrUsers = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for(currentUser of arrUsers){

        if("cliente" === currentUser.rol || userGlobal === currentUser.usuario){
            option = document.createElement("option");
            option.text = currentUser.usuario;
            option.value = currentUser.usuario;
            select.add(option, select[-1]);
        } else {
            continue;
        }
        
    }

}

function checkTaskAdmin(){
    let strDate = "", strTask = "", strPriority = "", strUser = "";
    
    strUser = document.getElementById("userSelected").value;
    userSelectedGlobal = strUser;
    strDate = document.getElementById("mesIterativo").innerHTML;
    strTask = document.getElementById("task").value;
    strPriority = document.getElementById("priority").value;

    if(strDate === "" || strDate === undefined) {
        alert("Select a date to add tasks!");
    } else if(strTask === "" || strPriority === "" || strUser === "") {
        alert("Fill up all the information!");
    } else {
        addTaskToLocalStorageAdmin(strDate, strTask, strPriority, strUser);
    }

}

function addTaskToLocalStorageAdmin(pDate, pTask, pPriority, pUser) {
    let objInfo = {}, arrResult = [];

    objInfo = {
        usuario: pUser, 
        priority: pPriority, 
        date: pDate, 
        task: pTask,
        estado: "pendiente"
    };

    if (localStorage.getItem("listTasks") !== null) {
        arrResult = JSON.parse(localStorage.getItem("listTasks"));
    }

    arrResult.push(objInfo);
    localStorage.setItem("listTasks", JSON.stringify(arrResult));

    addTaskToListAdmin(pTask, pPriority, pUser);

    cleanValues("userSelected")
    cleanValues("task");
    cleanValues("priority");
}


//FUNCTION TO ADD TASKS TO LOCAL STORAGE END *************


//FUNCIONALIDAD PARA LISTAR TAREAS POR DIA
function addTaskToListAdmin(pTask, pPriority, pUser) {
    let liElement, textNode, spanElement, txt, strTask = "";

    strTask = "Usuario: ".concat(pUser, " - Task: ", 
        pTask, " - Prioridad ", pPriority);

    liElement = document.createElement("li");
    textNode = document.createTextNode(strTask);
    liElement.appendChild(textNode);

    document.getElementById("lista").appendChild(liElement);

    spanElement = document.createElement("SPAN");
    txt = document.createTextNode("\u00d7");
    spanElement.className = "closeButton";
    spanElement.appendChild(txt);
    spanElement.onclick = closeFunctionAdmin();
    liElement.appendChild(spanElement);

    closeFunctionAdmin();
}

function closeFunctionAdmin() {
    let close, i = 0, div, textList = "";

    close = document.getElementsByClassName("closeButton");
    for(i; i < close.length; i++) {
        close[i].onclick = function() {
            //agregar aqui la funcion para marcar DONE
            div = this.parentElement;
            div.style = "background-color: red";
            div.style.display="none";
            textList = div.innerHTML;
            marcarTaskHechaAdmin(textList);
        }
    }
}

function marcarTaskHechaAdmin(pTask) {
    let boolUser = false, boolDate = false, boolEstado = false, 
        intTask = -1, intPriority = -1, currentTask = {}, 
        arrTasks = [], currentUser = {}, userName = "",
        arrUsers = [], boolFound = false;
    
    if (localStorage.getItem("listTasks") !== null) {
        arrTasks = JSON.parse(localStorage.getItem("listTasks"));
    }

    if (localStorage.getItem("wUserArray") !== null) {
        arrUsers = JSON.parse(localStorage.getItem("wUserArray"));
    }

    for(currentUser of arrUsers){
        boolFound = -1 !== pTask.indexOf(currentUser.usuario);

        if(boolFound){
            userName = currentUser.usuario;
            break;
        }
    }

    for(currentTask of arrTasks) {

        boolUser = userName === currentTask.usuario;
        boolDate = dateGlobal === currentTask.date;
        boolEstado = currentTask.estado === "pendiente"

        if(boolDate && boolUser && boolEstado) {
            intTask = pTask.indexOf(currentTask.task);
            intPriority = pTask.indexOf(currentTask.priority);

            if(intTask == "-1" && intPriority == "-1") {
                continue;
            } else {
                currentTask.estado = "hecho";
                console.log("Éxito. Llegamos jefe");
                break;
            }

        }
    }

    localStorage.setItem("listTasks", JSON.stringify(arrTasks));
}

w3.includeHTML();