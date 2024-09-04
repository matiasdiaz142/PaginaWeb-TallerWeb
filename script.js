
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "agustina" && password === "123") {

        window.location.href = `alumno.html?usuario=${username}`;
    } else if (username === "rodrigo" && password === "123") {

        window.location.href = `docente.html?usuario=${username}`;
    } else {
        alert("Usuario incorrecto");
    }
});

document.getElementById("reservarButton").addEventListener("click", reservarCupo);

function reservarCupo() {

    var charla = document.getElementById('charla').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var observaciones = document.getElementById('observaciones').value;


    if (charla && fecha && hora && email && observaciones) {

        document.getElementById('mensaje').innerHTML = 'Asistencia reservada correctamente';

    } else {

        document.getElementById('mensaje').innerHTML = 'Verifique los datos del formulario';
    }
}

function volverPrincipal() {
    window.location.href = "index.html";
}
