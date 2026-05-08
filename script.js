function login() {
    let login = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    if (login === "admin" && senha === "admin") {
        alert("Login realizado com sucesso");
        location.href = "home.html";
        return true;
    } else {
        alert("Usuário ou senha incorretos");
        return false;
    }
}

function logout() {
    location.href = "login.html";
}