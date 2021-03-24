//Registro de nuevo usuario
function registrarNuevoUsuario() {
    let reg_correo = "", reg_usuario = "", reg_contra = "",
        usuarioArray = [], current_reg = {};

    reg_correo = document.getElementById("correo_reg").value;
    reg_usuario = document.getElementById("usuario_reg").value;
    reg_contra = document.getElementById("contra_reg").value;

    //alerta al usuario;

    if (localStorage.getItem("wUserArray") !== null) {
        usuarioArray = JSON.parse(localStorage.getItem("wUserArray"));
    }

    current_reg = {
        correo: reg_correo,
        usuario: reg_usuario,
        contra: reg_contra,
        rol: "cliente"
    };
    
    usuarioArray.push(current_reg);

    localStorage.setItem("wUserArray", JSON.stringify(usuarioArray));

    //Esto es para cuando termine de registro y te mande al login 
    window.location.href = "/login";

}

//Dashboard
function mostrarDatos() {
    // var reg_correo = document.getElementById("correo_reg").value;
    // var reg_usuario = document.getElementById("usuario_reg").value;
    agregarATabla(reg_usuario, reg_correo)
    agregarAStorage(reg_usuario, reg_correo)
}

function agregarATabla(user, correo) {
    var table = document.getElementById("table")
    var row = table.insertRow(1)

    row.insertCell(0).innerHTML = user
    row.insertCell(1).innerHTML = correo
}

function agregarAStorage() {

    var tablaArray = [];

    if (localStorage.getItem("wTablaArray") !== null) {
        tablaArray = JSON.parse(localStorage.getItem("wTablaArray"));
    }

    var current_reg = {
        usuario: reg_usuario,
        correo: reg_correo
    };

    tablaArray.push(current_reg);

    localStorage.setItem("wTablaArray", JSON.stringify(tablaArray));

    //Esto es para cuando termine de registro 
    window.location.href = ""
}