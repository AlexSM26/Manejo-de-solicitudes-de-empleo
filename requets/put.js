const btnSolicitarID = document.getElementById('btnSolicitarID');
const btnActualizarDatos = document.getElementById("btnActualizarDatos");
const mensajeExito = document.getElementById('exito')

btnSolicitarID.addEventListener('click', () =>{

  const idUsuario = document.getElementById('idUsuario').value;
  
  if(idUsuario === ''){
    document.getElementById('datos').innerHTML = 'No se encontraron datos';
  }else{
  
    var miSolicitud = new XMLHttpRequest();
    miSolicitud.open('GET', `http://localhost:3000/usuarios/${idUsuario}`, true);
      
    miSolicitud.onreadystatechange = function(){
  
      if (miSolicitud.readyState === XMLHttpRequest.DONE) {
        if (miSolicitud.status === 200) {
          const usuario = JSON.parse(miSolicitud.responseText);
  
          tipoIdSelect = document.getElementById('tipoId');
          tipoId = tipoIdSelect.options[tipoIdSelect.selectedIndex].textContent = usuario.Tipo_identificacion;
          document.getElementById("numId").value = usuario.Numero_identificacion;
          document.getElementById('nombre').value = usuario.Nombre_Completo;
          document.getElementById("apellido1").value  = usuario.Apellido_Paterno;
          document.getElementById("apellido2").value = usuario.Apellido_Materno;
          document.getElementById("genero").value = usuario.Genero;
          document.getElementById("fechaNacimiento").value = usuario.Fecha_nacimiento;
          document.getElementById("lugarNacimiento").value = usuario.Lugar_nacimiento;
          document.getElementById("nacionalidad").value = usuario.Nacionalidad;
          estadoCivilSelect = document.getElementById("estadoCivil");
          estadoCivil = estadoCivilSelect.options[estadoCivilSelect.selectedIndex].textContent = usuario.Estado_civil;
          document.getElementById("numeroTel").value = usuario.Numero_telefonico;
          document.getElementById("correo").value = usuario.Correo_electronico;
          document.getElementById("domicilio").value = usuario.Domicilio;
          provinciaSelect = document.getElementById("provincia");
          provincia = provinciaSelect.options[provinciaSelect.selectedIndex].textContent = usuario.Provincia;
  
          let htmlTemplate = '';
  
            htmlTemplate += `
            <ul>
              <li><span>ID:</span> ${usuario.id}</li>
              <li><span>Tipo de identificacion: </span>${usuario.Tipo_identificacion}</li>
              <li><span>Numero de identificacion:</span> ${usuario.Numero_identificacion}</li>
              <li><span>Nombre:</span> ${usuario.Nombre_Completo}</li>
              <li><span>Apellido Paterno:</span> ${usuario.Apellido_Paterno}</li>
              <li><span>Apellido Materno:</span> ${usuario.Apellido_Materno}</li>
              <li><span>Genero:</span> ${usuario.Genero}</li>
              <li><span>Fecha de nacimiento:</span> ${usuario.Fecha_nacimiento}</li>
              <li><span>Lugar de nacimiento:</span> ${usuario.Lugar_nacimiento}</li>
              <li><span>Nacionalidad:</span> ${usuario.Nacionalidad}</li>
              <li><span>Estado civil:</span> ${usuario.Estado_civil}</li>
              <li><span>Numero telefonico:</span> ${usuario.Numero_telefonico}</li>
              <li><span>Correo electronico:</span> ${usuario.Correo_electronico}</li>
              <li><span>Domicilio:</span> ${usuario.Domicilio}</li>
              <li><span>Provincia:</span> ${usuario.Provincia}</li>
              <p></p>
              <p> ______________________________________</p>
              <p></p>
            </ul>
            `;
      
            document.getElementById('datos').innerHTML = htmlTemplate;
  
        }; 
      } 
    }
  }

  miSolicitud.send();

});

btnActualizarDatos.addEventListener("click", () => {

  const idUsuario = document.getElementById('idUsuario').value;
  const tipoIdSelect = document.getElementById('tipoId');
  const tipoId = tipoIdSelect.options[tipoIdSelect.selectedIndex].textContent
  const numId = document.getElementById("numId").value;
  const nombre = document.getElementById("nombre").value;
  const apellido1 = document.getElementById("apellido1").value;
  const apellido2 = document.getElementById("apellido2").value;
  const genero = document.getElementById("genero").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const lugarNacimiento = document.getElementById("lugarNacimiento").value;
  const nacionalidad = document.getElementById("nacionalidad").value;
  const estadoCivilSelect = document.getElementById("estadoCivil");
  const estadoCivil = estadoCivilSelect.options[estadoCivilSelect.selectedIndex].textContent;
  const numeroTel = document.getElementById("numeroTel").value;
  const correo = document.getElementById("correo").value;
  const domicilio = document.getElementById("domicilio").value;
  const provinciaSelect = document.getElementById("provincia");
  const provincia = provinciaSelect.options[provinciaSelect.selectedIndex].textContent;

    const usuarioActualizado = {
      Tipo_identificacion: tipoId,
      Numero_identificacion: numId,
      Nombre_Completo: nombre,
      Apellido_Paterno: apellido1,
      Apellido_Materno: apellido2,
      Genero: genero,
      Fecha_nacimiento: fechaNacimiento,
      Lugar_nacimiento: lugarNacimiento,
      Nacionalidad: nacionalidad,
      Estado_civil: estadoCivil,
      Numero_telefonico: numeroTel,
      Correo_electronico: correo,
      Domicilio: domicilio,
      Provincia: provincia
    };

    var actualizarDatos = new XMLHttpRequest();
    actualizarDatos.open("PUT", `http://localhost:3000/usuarios/${idUsuario}`, true);
    actualizarDatos.setRequestHeader("Content-Type", "application/json");

    actualizarDatos.onreadystatechange = function () {
        if (actualizarDatos.readyState === XMLHttpRequest.DONE) {
            if (actualizarDatos.status === 200) {
                console.log("Usuario actualizado correctamente");
            } else {
                console.error("Error al actualizar el usuario:", actualizarDatos.statusText);
            }
        }
    };
    
    actualizarDatos.send(JSON.stringify(usuarioActualizado));
  
});
