function checkLogin() {
    let user = "", password = "", userArray = [];

    user = document.getElementById("user").value;
    password = document.getElementById("passw").value;

    // var userArray = JSON.parse(sessionStorage.getItem("wUserArray"));
    userArray = JSON.parse(localStorage.getItem("wUserArray"));

    if (user !== null && user !== "") {
        if (password !== null && password !== "") {
            var canLogin = checkLoginInfo(user, password, userArray);

            if (canLogin === true) {
                window.location.href = "calendar.html";//HREF DE DASH/CALENDARIO PENDING
            } else {
                alert("User or password are wrong!");
            }

        } else {
            // alert("La casilla password no puede estar vacia");
            alert("Fill all the boxes");
        }
    } else {
        // alert("La casilla user no puede estar vacia");
        alert("Fill all the boxes");
    }
}

function checkLoginInfo(user, password, userArray) {
    let i = 0, arrayLength = 0;

    arrayLength = userArray.length;

    if (userArray !== null && userArray.length > 0) {
        for (i; i < arrayLength; i++) {
            //ponerlos en ingles
            if (userArray[i].usuario === user && userArray[i].contra === password) {
                saveToSessionStorage(userArray[i]);
                return true;
            }
        }
    }
    return false;
}

function saveToSessionStorage(pUserArray) {
    let currentSessionUser = [];

    if (sessionStorage.getItem("currentUser") !== null) {
        currentSessionUser = JSON.parse(sessionStorage.getItem("currentUser"));
    }

    currentSessionUser[0] = pUserArray;
    sessionStorage.setItem("currentUser", JSON.stringify(currentSessionUser));
}


//URL DE ARCHIVOS PARA KEAVY ----- STATIC -> /static/scriptLogin.js | STYLE -> /static/styleLogin.css

//vars de user y pass no se si tienen que coincidir con register, help me there