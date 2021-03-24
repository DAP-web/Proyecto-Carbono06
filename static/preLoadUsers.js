/*
preload information to local storage users
*/

function preLoadUsers() {

    var userArray = [{
        correo: "angela@angela.com",
        usuario: "angela",
        contra: "123"
        // role: "admin"
    }, {
        correo: "diego@diego.com",
        usuario: "diego",
        contra: "456"
    }, {
        correo: "marcela@marcela.com",
        usuario: "marcela",
        contra: "789"
    }];

    localStorage.setItem("wUserArray", JSON.stringify(userArray))
}

preLoadUsers()