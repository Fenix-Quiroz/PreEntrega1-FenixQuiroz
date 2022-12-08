//Registro de mi pagina
alert(
  "¡Hola!. Si quieres entrar a nuestra tienda primero registrate y después inicia sesión por favor."
);
let user = prompt("Ingrese su nombre para registrarse.");
let pass = parseInt(
  prompt("Ingrese una contraseña para registrarse.  Solo numeros.")
);
alert("Registro exitoso. Inicia sesión para ingresar a la tienda");
//Fin del registro

//Login
function login() {
  let ingreso = false;

  for (let i = 3; i >= 0; i--) {
    let savedUser = prompt("Ingresa tu nombre de usuario");
    let savedPass = parseInt(prompt("Ingrese su contraseña"));
    if (savedUser == user && savedPass == pass) {
      alert("Bienvinido/a a nuestra tienda online.");
      ingreso = true;
      break;
    } else {
      alert("Error, Te quedan " + i + " intentos.");
    }
  }
  return ingreso;
}
//Fin del login

//Productos de mi pagina
let ingresoExitoso = login();
if (ingresoExitoso) {
  let tecladoPrecio = 20;
  let mousePrecio = 5;
  let monitorPrecio = 80;
  let laptopPrecio = 390;

  let opciones = prompt(
    " Estos son nuestros productos: \n" +
      "1-Teclado = $" +
      tecladoPrecio +
      "\n" +
      "2-Mouse = $" +
      mousePrecio +
      "\n" +
      "3-Monitor = $" +
      monitorPrecio +
      "\n" +
      "4-.Laptop = $" +
      laptopPrecio +
      "\n" +
      "5-Finalizar compra."
  );
  while (opciones != "5") {
    switch (opciones) {
      case "1":
        alert(
          "Se agrego un teclado al carrito. \n Click en aceptar para elegir otra opción."
        );
        break;
      case "2":
        alert(
          "Se agrego un mouse al carrito. \n Click en aceptar para elegir otra opción."
        );
        break;
      case "3":
        alert(
          "Se agrego un monito al carrito. \n Click en aceptar para elegir otra opción."
        );
        break;
      case "4":
        alert(
          "Se agrego una laptop al carrito. \n Click en aceptar para elegir otra opción."
        );
        break;
      default:
        alert("Lo sentimos esta opción no esta en nuestra tienda.");
        break;
    }
    opciones = prompt(
      " Estos son nuestros productos: \n" +
        "1-Teclado = $" +
        tecladoPrecio +
        "\n" +
        "2-Mouse = $" +
        mousePrecio +
        "\n" +
        "3-Monitor = $" +
        monitorPrecio +
        "\n" +
        "4-Laptop = $" +
        laptopPrecio +
        "\n" +
        "5-Finalizar compra."
    );
  }
}
