//Registro de mi pagina
alert(
  "¡Hola!. Si quieres entrar a nuestra tienda Gamer primero registrate y después inicia sesión por favor."
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

  for (let i = 2; i >= 0; i--) {
    let savedUser = prompt("Ingresa tu nombre de usuario");
    let savedPass = parseInt(prompt("Ingrese su contraseña"));
    if (savedUser == user && savedPass == pass) {
      alert("Bienvinido/a a nuestra tienda Gamer online.");
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
if (!ingresoExitoso) {
  alert("Has superado el limite de intentos ,registrarte e inicia secion nuevamente")

}else{
  // while
let seguir = true;
let productos = [];
while (seguir) {
  let producto = prompt("Ingrese el nombre del producto");
  let precio = 200;
  let cantidad = parseFloat(
    prompt("Ingresa la cantidad de productos que desa comprar")
  );

  function Producto(producto, precio, cantidad) {
    this.producto = producto;
    this.precio = precio;
    this.cantidad = cantidad;
    this.resultado = 0;
    this.sumarPrecios = () => {
      this.resultado = this.precio * this.cantidad;
    };
  }

  const prod = new Producto(producto, precio, cantidad);
  prod.sumarPrecios();
  productos.push(prod);

  // logs
  let str = "Tienes: \n";
  let total =0;
  for (const producto of productos) {
    str = str + ` ${producto.cantidad} ${producto.producto}. Total a pagar s/. ${producto.resultado} \n`;
    total += producto.resultado;
  }

  const resp = prompt(str + 
    "El total general seria: "+ "s/." + total+ 
    " \n Para salir ingresa 'salir' , para seguir eligiendo productos pulse 'aceptar'");

  if (resp == "salir") {
    seguir = false;
    productos = []
  }
}
}


