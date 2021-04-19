

function peakTasks(){
    document.getElementById("listUsers").style.display = "none";
    document.getElementById("input-Date-Box-Hidden").style.display = "block";
}

function peakUsers(){
    document.getElementById("input-Date-Box-Hidden").style.display = "none";
    document.getElementById("boxMesIterativo").style.display = "none";
    document.getElementById("addElement").style.display = "none";
    document.getElementById("listToDo").style.display = "none";

    document.getElementById("listUsers").style.display = "block";

    cleanUsers();
    listUsers(getUsersFromLocalStorage());
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
    let table, row, cell1, cell2, cell3, arrUsers = [], currentUser = {};

    table = document.getElementById("usersList-w3");

    for(currentUser of usersArray){
        row = table.insertRow(-1);

        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
    
        cell1.innerHTML = currentUser.correo;
        cell2.innerHTML = currentUser.usuario;
        cell3.innerHTML = "ELIMINAR";
    }

}


w3.includeHTML();