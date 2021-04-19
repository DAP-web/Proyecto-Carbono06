function peakTasks(){
    document.getElementById("listUsers").style.display = "none";
    document.getElementById("input-Date-Box-Hidden").style.display = "block";
    document.getElementById("opcionRemoverUsuarios").style.display = "none";
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
    let table, row, cell1, cell2, currentUser = {},
        button;

    table = document.getElementById("usersList-w3");

    for(currentUser of usersArray){
        row = table.insertRow(-1);

        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
    
        cell1.innerHTML = currentUser.correo;
        cell2.innerHTML = currentUser.usuario;
    }

}

function listUsersToDelete(){
    let select, option, currentUser = {}, arrUsers = [],
        valor = "";
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

w3.includeHTML();