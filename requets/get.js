btnSolicitarDatos = document.getElementById("btnSolicitar");

btnSolicitarDatos.addEventListener('click', () =>{

  var miSolicitud = new XMLHttpRequest();
  miSolicitud.open('GET', `http://localhost:3000/usuarios`, true);
  
  miSolicitud.onload = function(){
    var personas = JSON.parse(miSolicitud.responseText);

    let htmlTemplate = '';

    personas.forEach( persona => {
      htmlTemplate += `
      <ul>
        <li><span>ID:</span> ${persona.id}</li>
        <li><span>Tipo de identificacion: </span>${persona.Tipo_identificacion}</li>
        <li><span>Numero de identificacion:</span> ${persona.Numero_identificacion}</li>
        <li><span>Nombre:</span> ${persona.Nombre_Completo}</li>
        <li><span>Apellido Paterno:</span> ${persona.Apellido_Paterno}</li>
        <li><span>Apellido Materno:</span> ${persona.Apellido_Materno}</li>
        <li><span>Genero:</span> ${persona.Genero}</li>
        <li><span>Fecha de nacimiento:</span> ${persona.Fecha_nacimiento}</li>
        <li><span>Lugar de nacimiento:</span> ${persona.Lugar_nacimiento}</li>
        <li><span>Nacionalidad:</span> ${persona.Nacionalidad}</li>
        <li><span>Estado civil:</span> ${persona.Estado_civil}</li>
        <li><span>Numero telefonico:</span> ${persona.Numero_telefonico}</li>
        <li><span>Correo electronico:</span> ${persona.Correo_electronico}</li>
        <li><span>Domicilio:</span> ${persona.Domicilio}</li>
        <li><span>Provincia:</span> ${persona.Provincia}</li>
        <p></p>
        <p> ______________________________________</p>
        <p></p>
      </ul>
      `;

      document.getElementById('datos').innerHTML = htmlTemplate;
    });
  };

  miSolicitud.send();

});

