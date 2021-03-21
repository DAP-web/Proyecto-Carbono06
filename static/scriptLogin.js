function checkLogin() {

    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;

    var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));

    if (user !== null && user !== "") {
        if (password !== null && password !== "") {

            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                window.location.href = //HREF DE DASH/CALENDARIO PENDING
            } else {
                alert("Usuario o contraseña incorrectos");
            }

        } else {
            alert("La casilla password no puede estar vacia");
        }
    } else {
        alert("La casilla user no puede estar vacia");
    }

}

function checkLoginInfo(user, password, userArray) {
    if (userArray !== null && userArray.length > 0) {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].user === user && userArray[i].password === password) {
                return true;
            }
        }
    }
    return false;
}

function checkForValidLoginSession() {
//extra?????

    if (sessionStorage.getItem("wUserArray") == null) {
        window.location.href = //HREF DE DASH/CALENDARIO PENDING
    }
    else {
        if (sessionStorage.length == 0) {
            window.location.href = //HREF DE DASH/CALENDARIO PENDING
        }
    }
}


//URL DE ARCHIVOS PARA KEAVY ----- STATIC -> /static/scriptLogin.js | STYLE -> /static/styleLogin.css

//vars de user y pass no se si tienen que coincidir con register, help me there