const btnEnviarDatos = document.getElementById('btnEnviarDatos')

btnEnviarDatos.addEventListener('click', () => {

function validaciones(){
  const numId = document.getElementById("numId").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const apellido1 = document.getElementById("apellido1").value.trim();
  const apellido2 = document.getElementById("apellido2").value.trim();
  const genero = document.getElementById("genero").value.trim();
  const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
  const lugarNacimiento = document.getElementById("lugarNacimiento").value.trim();
  const nacionalidad = document.getElementById("nacionalidad").value.trim();
  const numeroTel = document.getElementById("numeroTel").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const domicilio = document.getElementById("domicilio").value.trim();

  //*validaciones
  var SoloLetras = /^[a-zA-Z\s]+$/;
  var SoloNumeros = /^[0-9]+$/;
  const validacionCorreo= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validacionFecha = /^\d{4}-\d{2}-\d{2}$/;

  const errores = [];

  //Numero ID
  if (numId === '') {
      errores.push('El numero de identificacion no debe estar vacio');
  } else if (!SoloNumeros.test(numId)) {
      errores.push('El numero de identificacion no puede contener letras');
  } else if (!/^[0-9]{9}$/.test(numId)) {
      errores.push('El numero de identificacion debe tener 9 digitos');
  }

  //Nombre completo
  if (nombre === '') {
      errores.push('El nombre no puede estar vacio');
  } else if (!SoloLetras.test(nombre)) {
      errores.push('El nombre no puede contener numeros');
  }

  //Apellido paterno
  if (apellido1 === '') {
      errores.push('El apellido paterno no puede estar vacio');
  } else if (!SoloLetras.test(apellido1)) {
      errores.push('El apellido paterno no puede contener numeros');
  }

  //Apellido materno
  if (apellido2 === '') {
      errores.push('El apellido materno no puede estar vacio');
  } else if (!SoloLetras.test(apellido2)) {
      errores.push('El apellido materno no puede contener numeros');
  }

  //Numero Telefonico
  if (numeroTel === '') {
      errores.push('El numero telefonico no puede estar vacio');
  } else if (!SoloNumeros.test(numeroTel)) {
      errores.push('El numero telefonico no puede contener letras');
  } else if (!/^[0-9]{8}$/.test(numeroTel)) {
      errores.push('El numero telefonico debe tener 8 digitos');
  }

  //Correo electronico
  if (correo === '') {
      errores.push('El correo no debe estar vacío.');
  }else if(!validacionCorreo.test(correo)) {
      errores.push("El correo electrónico no es válido");
  }

  //Genero
  if (genero === '') {
    errores.push('El genero no puede estar vacio');
  } else if (!SoloLetras.test(genero)) {
    errores.push('El genero no puede contener numeros');
  }

  //Nacionalidad
  if (nacionalidad === '') {
      errores.push('La nacionalidad no puede estar vacio');
  } else if (!SoloLetras.test(nacionalidad)) {
      errores.push('La nacionalidad no puede contener numeros');
  }

  //lugar de nacimiento
  if (lugarNacimiento === '') {
      errores.push('El lugar de nacimiento no puede estar vacio');
  } else if (!SoloLetras.test(lugarNacimiento)) {
      errores.push('El lugar de nacimiento no puede contener numeros');
  }

  //Fecha de nacimiento
  if (fechaNacimiento === '') {
      errores.push('La fecha de nacimiento no debe estar vacía.');
  } else {
      if (!validacionFecha.test(fechaNacimiento)) {
          errores.push('La fecha de nacimiento no es válida.');
      }
  }

  //Domicilio
  if (domicilio === '') {
      errores.push('El domicilio no puede estar vacio');
  } 
  return errores;
}

  const errores = validaciones();
  if (errores.length > 0) {
      alert(errores.join('\n'));
  } else {
      
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


   const enviar = {
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
 
   const enviarSolicitud = new XMLHttpRequest();
   enviarSolicitud.open('POST', 'http://localhost:3000/usuarios');
   enviarSolicitud.setRequestHeader("Content-Type", "application/json");
 
   enviarSolicitud.onreadystatechange = function() {
       if (enviarSolicitud.readyState === XMLHttpRequest.DONE) {
           if (enviarSolicitud.status === 200) {
               console.log("Solicitud enviada correctamente");
           } else {
               console.error("Error en la solicitud: " + enviarSolicitud.status);
           }
       }
   };
   enviarSolicitud.send(JSON.stringify(enviar));  
 

      document.getElementById('formulario').reset();
  }
});

