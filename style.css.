
"use strict";

const NUMERO_WHATSAPP = "5491178222513";

const productos = [
  { id: 1, nombre: "Cargador Samsung + cable", precio: 6600, emoji: "🔌" },
  { id: 2, nombre: "Auriculares Bluetooth", precio: 15900, emoji: "🎧" },
  { id: 3, nombre: "Cargador USB-C", precio: 8900, emoji: "⚡" },
  { id: 4, nombre: "Vidrio templado", precio: 3500, emoji: "📱" }
];

let carrito = [];

try {
  const guardado = JSON.parse(localStorage.getItem("carritoGLT") || "[]");

  if (Array.isArray(guardado)) {
    carrito = guardado.filter(item =>
      productos.some(producto => producto.id === item.id) &&
      Number.isInteger(item.cantidad) &&
      item.cantidad > 0
    );
  }
} catch (error) {
  carrito = [];
}

function formatoPrecio(numero) {
  return "$" + numero.toLocaleString("es-AR");
}

function guardarCarrito() {
  try {
    localStorage.setItem("carritoGLT", JSON.stringify(carrito));
  } catch (error) {
    console.warn("No se pudo guardar el carrito.");
  }
}

function agregar(id) {
  const producto = productos.find(item => item.id === id);
  if (!producto) return;

  const existente = carrito.find(item => item.id === id);

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({ id: id, cantidad: 1 });
  }

  guardarCarrito();
  actualizarCarrito();
  abrirCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("listaCarrito");
  const contador = document.getElementById("contadorCarrito");
  const totalElemento = document.getElementById("totalCarrito");

  if (!lista || !contador || !totalElemento) return;

  let cantidadTotal = 0;
  let importeTotal = 0;

  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    if (!producto) return;

    cantidadTotal += item.cantidad;
    importeTotal += producto.precio * item.cantidad;
  });

  contador.textContent = cantidadTotal;
  totalElemento.textContent = formatoPrecio(importeTotal);

  if (carrito.length === 0) {
    lista.innerHTML = '<p class="empty-cart">Todavía no agregaste productos.</p>';
    return;
  }

  lista.innerHTML = carrito.map(item => {
    const producto = productos.find(p => p.id === item.id);
    if (!producto) return "";

    const subtotal = producto.precio * item.cantidad;

    return `
      <article class="cart-item">
        <div>
          <h3>${producto.emoji} ${producto.nombre}</h3>
          <p>${formatoPrecio(subtotal)}</p>
          <div class="cart-controls">
            <button onclick="cambiarCantidad(${item.id}, -1)" aria-label="Quitar uno">−</button>
            <strong>${item.cantidad}</strong>
            <button onclick="cambiarCantidad(${item.id}, 1)" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="cart-delete"
          onclick="eliminarProducto(${item.id})"
          aria-label="Eliminar producto">🗑</button>
      </article>
    `;
  }).join("");
}

function cambiarCantidad(id, cambio) {
  const item = carrito.find(p => p.id === id);
  if (!item) return;

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    carrito = carrito.filter(p => p.id !== id);
  }

  guardarCarrito();
  actualizarCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter(item => item.id !== id);
  guardarCarrito();
  actualizarCarrito();
}

function abrirCarrito() {
  document.getElementById("panelCarrito").classList.add("open");
  document.getElementById("fondoCarrito").classList.add("visible");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  document.getElementById("panelCarrito").classList.remove("open");
  document.getElementById("fondoCarrito").classList.remove("visible");
  document.body.style.overflow = "";
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agregá algún producto primero.");
    return;
  }

  let total = 0;
  let mensaje = "¡Hola! Quiero realizar este pedido a Electronics Solutions GLT:\n\n";

  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    if (!producto) return;

    const subtotal = producto.precio * item.cantidad;
    total += subtotal;

    mensaje += `${producto.nombre}\n`;
    mensaje += `Cantidad: ${item.cantidad}\n`;
    mensaje += `Subtotal: ${formatoPrecio(subtotal)}\n\n`;
  });

  mensaje += `TOTAL: ${formatoPrecio(total)}\n\n`;
  mensaje += "Quedo atento/a para confirmar disponibilidad y forma de entrega. ¡Gracias!";

  const enlace = "https://wa.me/" + NUMERO_WHATSAPP +
    "?text=" + encodeURIComponent(mensaje);

  window.open(enlace, "_blank");
}

/* CARRUSEL PRINCIPAL */

let slideActual = 0;
let temporizadorSlides = null;

function mostrarSlide(numero) {
  const slides = document.querySelectorAll(".slide");
  const puntos = document.querySelectorAll(".dot");

  if (!slides.length) return;

  slideActual = (numero + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === slideActual);
  });

  puntos.forEach((punto, index) => {
    punto.classList.toggle("active", index === slideActual);
  });
}

function cambiarSlide(direccion) {
  mostrarSlide(slideActual + direccion);
  reiniciarTemporizador();
}

function irSlide(numero) {
  mostrarSlide(numero);
  reiniciarTemporizador();
}

function reiniciarTemporizador() {
  clearInterval(temporizadorSlides);

  temporizadorSlides = setInterval(() => {
    mostrarSlide(slideActual + 1);
  }, 4000);
}

/* CARRUSEL AUTOMÁTICO DE PRODUCTOS */

let temporizadorProductos = null;
let pausaProductos = false;

function iniciarCarruselProductos() {
  const carrusel = document.getElementById("carruselProductos");
  if (!carrusel) return;

  carrusel.addEventListener("touchstart", () => {
    pausaProductos = true;
  }, { passive: true });

  carrusel.addEventListener("touchend", () => {
    setTimeout(() => {
      pausaProductos = false;
    }, 2500);
  }, { passive: true });

  carrusel.addEventListener("mouseenter", () => {
    pausaProductos = true;
  });

  carrusel.addEventListener("mouseleave", () => {
    pausaProductos = false;
  });

  temporizadorProductos = setInterval(() => {
    if (pausaProductos || document.hidden) return;

    const maximo = carrusel.scrollWidth - carrusel.clientWidth;

    if (maximo <= 0) return;

    if (carrusel.scrollLeft >= maximo - 5) {
      carrusel.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      carrusel.scrollBy({
        left: 240,
        behavior: "smooth"
      });
    }
  }, 3500);
}

/* INICIO DE LA TIENDA */

document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
  mostrarSlide(0);
  reiniciarTemporizador();
  iniciarCarruselProductos();
});
