
const NUMERO_WHATSAPP = "5491178222513";

let carrito = [];

try {
  carrito = JSON.parse(localStorage.getItem("carritoGLT")) || [];
  if (!Array.isArray(carrito)) carrito = [];
} catch (error) {
  carrito = [];
}

// GUARDAR CARRITO
function guardarCarrito() {
  localStorage.setItem("carritoGLT", JSON.stringify(carrito));
}

// CARRITO: AGREGAR PRODUCTOS
function agregar(nombre, precio) {
  const producto = carrito.find(item => item.nombre === nombre);

  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({
      nombre: nombre,
      precio: precio,
      cantidad: 1
    });
  }

  actualizarCarrito();
  abrirCarrito();
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const contador = document.getElementById("contador");
  const totalElemento = document.getElementById("total");

  if (!lista || !contador || !totalElemento) return;

  let cantidadTotal = 0;
  let total = 0;

  lista.innerHTML = "";

  carrito.forEach((producto, indice) => {
    cantidadTotal += producto.cantidad;
    total += producto.precio * producto.cantidad;

    const item = document.createElement("div");
    item.className = "item-carrito";

    const informacion = document.createElement("div");

    const nombre = document.createElement("h4");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = "$" + (producto.precio * producto.cantidad).toLocaleString("es-AR");

    const controles = document.createElement("div");
    controles.className = "controles-cantidad";

    const menos = document.createElement("button");
    menos.textContent = "−";
    menos.onclick = () => cambiarCantidad(indice, -1);

    const numero = document.createElement("span");
    numero.textContent = producto.cantidad;

    const mas = document.createElement("button");
    mas.textContent = "+";
    mas.onclick = () => cambiarCantidad(indice, 1);

    controles.append(menos, numero, mas);
    informacion.append(nombre, precio, controles);

    const eliminar = document.createElement("button");
    eliminar.className = "eliminar";
    eliminar.textContent = "Eliminar";
    eliminar.onclick = () => eliminarProducto(indice);

    item.append(informacion, eliminar);
    lista.appendChild(item);
  });

  if (carrito.length === 0) {
    lista.textContent = "Todavía no agregaste productos.";
  }

  contador.textContent = cantidadTotal;
  totalElemento.textContent = "Total: $" + total.toLocaleString("es-AR");

  guardarCarrito();
}

// CAMBIAR CANTIDAD
function cambiarCantidad(indice, cambio) {
  if (!carrito[indice]) return;

  carrito[indice].cantidad += cambio;

  if (carrito[indice].cantidad <= 0) {
    carrito.splice(indice, 1);
  }

  actualizarCarrito();
}

// ELIMINAR PRODUCTO
function eliminarProducto(indice) {
  carrito.splice(indice, 1);
  actualizarCarrito();
}

// ABRIR Y CERRAR CARRITO
function abrirCarrito() {
  document.getElementById("panelCarrito").classList.add("abierto");
  document.getElementById("fondoCarrito").classList.add("visible");
}

function cerrarCarrito() {
  document.getElementById("panelCarrito").classList.remove("abierto");
  document.getElementById("fondoCarrito").classList.remove("visible");
}

// FINALIZAR PEDIDO POR WHATSAPP
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Primero agregá algún producto al carrito.");
    return;
  }

  let mensaje = "¡Hola! Quiero realizar este pedido de Electronics Solutions GLT:\n\n";
  let total = 0;

  carrito.forEach(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    mensaje += "• " + producto.nombre +
      " x" + producto.cantidad +
      " = $" + subtotal.toLocaleString("es-AR") + "\n";
  });

  mensaje += "\nTOTAL: $" + total.toLocaleString("es-AR");
  mensaje += "\n\nQuedo atento/a para confirmar disponibilidad. ¡Gracias!";

  const enlace = "https://wa.me/" + NUMERO_WHATSAPP +
    "?text=" + encodeURIComponent(mensaje);

  window.open(enlace, "_blank");
}

// CARRUSEL PRINCIPAL
let diapositivaActual = 0;

const diapositivas = document.querySelectorAll(".diapositiva");
const puntos = document.querySelectorAll(".punto");

function mostrarDiapositiva(indice) {
  if (diapositivas.length === 0) return;

  diapositivaActual =
    (indice + diapositivas.length) % diapositivas.length;

  diapositivas.forEach((diapositiva, i) => {
    diapositiva.classList.toggle("activa", i === diapositivaActual);
  });

  puntos.forEach((punto, i) => {
    punto.classList.toggle("activo", i === diapositivaActual);
  });
}

function cambiarDiapositiva(direccion) {
  mostrarDiapositiva(diapositivaActual + direccion);
}

function irDiapositiva(indice) {
  mostrarDiapositiva(indice);
}

if (diapositivas.length > 0) {
  setInterval(() => {
    cambiarDiapositiva(1);
  }, 4000);
}

// CARRUSEL DE PRODUCTOS
const carruselProductos = document.getElementById("carruselProductos");

if (carruselProductos) {
  let pausaCarrusel = false;

  carruselProductos.addEventListener("touchstart", () => {
    pausaCarrusel = true;
  });

  carruselProductos.addEventListener("touchend", () => {
    setTimeout(() => {
      pausaCarrusel = false;
    }, 2500);
  });

  carruselProductos.addEventListener("mouseenter", () => {
    pausaCarrusel = true;
  });

  carruselProductos.addEventListener("mouseleave", () => {
    pausaCarrusel = false;
  });

  setInterval(() => {
    if (pausaCarrusel) return;

    const maximo = carruselProductos.scrollWidth -
      carruselProductos.clientWidth;

    if (maximo <= 0) return;

    if (carruselProductos.scrollLeft >= maximo - 5) {
      carruselProductos.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      const tarjeta = carruselProductos.querySelector(".producto");
      const distancia = tarjeta
        ? tarjeta.offsetWidth + 22
        : 250;

      carruselProductos.scrollBy({
        left: distancia,
        behavior: "smooth"
      });
    }
  }, 3500);
}

// INICIAR
actualizarCarrito();
mostrarDiapositiva(0);
