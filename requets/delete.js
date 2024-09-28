btnEliminarDatos = document.getElementById("btnEliminarDatos")

btnEliminarDatos.addEventListener("click", function() {
    
    const idUsuarioEliminar = document.getElementById('idUsuarioEliminar').value;

    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://localhost:3000/usuarios/${idUsuarioEliminar}`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("Usuario eliminado correctamente");
            } else {
                console.error("Error al eliminar el usuario:", xhr.statusText);
            }
        }
    };

    xhr.send();
});