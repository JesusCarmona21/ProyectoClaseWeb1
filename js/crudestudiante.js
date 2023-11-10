function insertar() {
    var cedula = document.getElementById("Cedula");
    var nombres = document.getElementById("Nombres");
    var apellidos = document.getElementById("Apellidos");

    var nuevoEstudiante = new Estudiante(cedula.value, nombres.value, apellidos.value);

    var estudiantes = JSON.parse(localStorage.getItem("Estudiantes") || "[]");
    var encontrado = false;

    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula === cedula.value) {
            nombres.value = estudiantes[i].nombre;
            apellidos.value = estudiantes[i].apellidos;
            encontrado = true;
        }
    }

    estudiantes.push(nuevoEstudiante);
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));

    console.log(estudiantes);
    cedula.value = "";
    nombres.value = "";
    apellidos.value = "";
    cedula.focus();
}

function Consultar() {
    var cedula = document.getElementById("Cedula");
    var nombres = document.getElementById("Nombres");
    var apellidos = document.getElementById("Apellidos");


    var estudiantes = JSON.parse(localStorage.getItem("Estudiantes") || "[]");
    var encontrado = false;

    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula = cedula.value) {
            nombres.value = estudiantes[i].nombre;
            apellidos.value = estudiantes[i].apellidos;
            encontrado = true;
        }
    }

}

function modificar() {
    var cedula = document.getElementById("Cedula");
    var nombres = document.getElementById("Nombres");
    var apellidos = document.getElementById("Apellidos");

    var estudiantes = JSON.parse(localStorage.getItem("Estudiantes") || "[]");
    var encontrado = false;

    for (var i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].cedula = cedula.value) {
            estudiantes[i].nombres = nombres.value
            estudiantes[i].apellidos = apellidos = apellidos.value
            encontrado = true;

            localStorage("estudiantes", JSON.stringify(estudiantes))
        }
    }

}

function eliminar() {}