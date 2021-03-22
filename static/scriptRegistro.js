//Registro de nuevo usuario
function registrarNuevoUsuario() {
    var reg_correo = document.getElementById("correo_reg").value;
    var reg_usuario = document.getElementById("usuario_reg").value;
    var reg_contra = document.getElementById("contra_reg").value;

    //alerta al usuario;
    var usuarioArray = [];

    if (localStorage.getItem("wUsuarioArray") !== null) {
        usuarioArray = JSON.parse(localStorage.getItem("wUsuarioArray"));
    }

    var current_reg = {
        correo: reg_correo,
        usuario: reg_usuario,
        contra: reg_contra
    };

    usuarioArray.push(current_reg);

    localStorage.setItem("wUsuarioArray", JSON.stringify(usuarioArray));

    //Esto es para cuando termine de registro y te mande al login 
    window.location.href = ""

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