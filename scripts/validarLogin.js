const btnAdmin = document.getElementById('btnAdmin')

function validarUsuarios() {
  var alerta = document.getElementById('alerta')
  const nombreUsuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('contraseña').value;
    
  var usuarios = [
    { username: 'alexander', password: 'alex123' },
    { username: 'sebastian', password: 'sebastian123' },
  ];
  
  var validarDatos = usuarios.find( usurio =>{
    return usurio.username === nombreUsuario && usurio.password === contraseña;
  });
  
  if (validarDatos) {
    window.location.href = 'administrador.html';
  } else {
    alerta.innerHTML = ('Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
  }
}

btnAdmin.addEventListener('click', () => {
    validarUsuarios();
});

