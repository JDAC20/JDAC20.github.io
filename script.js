function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Expresión regular para verificar un formato de correo electrónico
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Expresión regular para verificar que la contraseña tenga al menos 8 caracteres
  var passwordRegex = /.{8,}/;

  if (!emailRegex.test(username)) {
    alert("Ingresa un correo electrónico válido");
  } else if (!passwordRegex.test(password)) {
    alert("La contraseña debe tener al menos 8 caracteres");
  } else {
    alert("Login exitoso");
  }
}
