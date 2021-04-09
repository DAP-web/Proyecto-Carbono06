/*
preload information to local storage users
*/

function preLoadUsers() {

    var userArray = [{
        correo: "angela@angela.com",
        usuario: "Angela",
        contra: "123",
        rol: "admin"
    }, {
        correo: "diego@diego.com",
        usuario: "Diego",
        contra: "456",
        rol: "admin"
    }, {
        correo: "marcela@marcela.com",
        usuario: "Marcela",
        contra: "789",
        rol: "admin"
    }, {
        correo: "aaron@aaron.com",
        usuario: "Aaron",
        contra: "753",
        rol: "cliente"
    }, {
        correo: "isela@isela.com",
        usuario: "Isela",
        contra: "159",
        rol: "cliente"
    }, {
        correo: "keavy@keavy.com",
        usuario: "Keavy",
        contra: "0159",
        rol: "cliente"
    },{
        correo: "vic@vic.com",
        usuario: "Victoria",
        contra: "6936",
        rol: "cliente"
    }];

    if (localStorage.getItem("wUserArray") === null) {
        localStorage.setItem("wUserArray", JSON.stringify(userArray));
    }
}

preLoadUsers()