
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --fondo: #050816;
  --panel: #0c1428;
  --azul: #00c8ff;
  --texto: #f2f8ff;
  --gris: #9eabc2;
  --borde: rgba(0, 200, 255, .2);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--fondo);
  color: var(--texto);
  font-family: 'Inter', Arial, sans-serif;
  overflow-x: hidden;
}

button, a {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

.header {
  min-height: 76px;
  padding: 12px 6%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  background: #050816;
  border-bottom: 1px solid var(--borde);
  position: relative;
  z-index: 10;
}

.logo {
  font-family: 'Orbitron', sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: white;
  letter-spacing: 2px;
}

.logo span {
  color: var(--azul);
}

.brand {
  font-family: 'Orbitron', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
}

.brand span {
  color: var(--azul);
}

.cart-button {
  background: var(--panel);
  color: white;
  border: 1px solid var(--borde);
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 18px;
}

.cart-button span {
  color: var(--azul);
  font-weight: 800;
}

.hero {
  position: relative;
  min-height: 440px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(0, 153, 255, .19), transparent 45%),
    linear-gradient(120deg, #050816, #0a1730 70%, #071126);
  border-bottom: 1px solid var(--borde);
}

.slides {
  min-height: 440px;
  position: relative;
}

.slide {
  position: absolute;
  inset: 0;
  padding: 65px 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(25px);
  transition: opacity .55s ease, transform .55s ease, visibility .55s;
}

.slide.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.hero-text {
  max-width: 570px;
  z-index: 2;
}

.eyebrow {
  color: var(--azul);
  font-family: 'Orbitron', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(34px, 5vw, 57px);
  line-height: 1.2;
  margin: 18px 0;
}

.hero h1 span,
.section-heading h2 span,
.contact-section h2 span {
  color: var(--azul);
  text-shadow: 0 0 22px rgba(0, 200, 255, .35);
}

.hero-text p,
.section-heading p,
.channel-section p,
.contact-section p {
  color: var(--gris);
  line-height: 1.7;
  margin-bottom: 25px;
}

.primary-button,
.whatsapp-button {
  display: inline-block;
  padding: 14px 22px;
  background: linear-gradient(100deg, #007bff, #00c8ff);
  color: #00101c;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 7px;
  box-shadow: 0 0 22px rgba(0, 200, 255, .22);
  transition: transform .2s, box-shadow .2s;
}

.primary-button:hover,
.whatsapp-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 28px rgba(0, 200, 255, .45);
}

.hero-art {
  font-size: clamp(90px, 16vw, 175px);
  filter: drop-shadow(0 0 28px rgba(0, 200, 255, .55));
  animation: flotar 3s ease-in-out infinite;
}

@keyframes flotar {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.slide-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid var(--borde);
  background: rgba(0, 15, 35, .8);
  color: var(--azul);
  font-size: 28px;
}

.slide-arrow.prev { left: 18px; }
.slide-arrow.next { right: 18px; }

.dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 9px;
  z-index: 3;
}

.dot {
  width: 9px;
  height: 9px;
  border: 0;
  border-radius: 20px;
  background: #52647d;
  transition: width .2s;
}

.dot.active {
  width: 26px;
  background: var(--azul);
}

.ticker {
  padding: 17px 5%;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  background: #091225;
  color: var(--azul);
  font-family: 'Orbitron', sans-serif;
  font-size: 11px;
  letter-spacing: 1px;
  border-bottom: 1px solid var(--borde);
}

.products-section {
  padding: 75px 6%;
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2,
.channel-section h2,
.contact-section h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(24px, 4vw, 36px);
  margin: 12px 0;
}

.products-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 8px 3px 20px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: var(--azul) #101a30;
}

.product-card {
  flex: 0 0 245px;
  background: linear-gradient(150deg, #101d36, #091122);
  border: 1px solid var(--borde);
  border-radius: 15px;
  overflow: hidden;
  scroll-snap-align: start;
  transition: transform .25s, border-color .25s;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: var(--azul);
}

.product-image {
  height: 165px;
  display: grid;
  place-items: center;
  font-size: 75px;
  background: radial-gradient(circle, rgba(0, 200, 255, .18), transparent 70%);
  border-bottom: 1px solid var(--borde);
}

.product-info {
  padding: 18px;
}

.category {
  color: var(--azul);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.product-info h3 {
  font-size: 15px;
  min-height: 42px;
  margin: 10px 0;
}

.price {
  color: white;
  font-size: 23px;
  font-weight: 800;
  margin: 13px 0;
}

.product-info button {
  width: 100%;
  padding: 12px 7px;
  background: transparent;
  border: 1px solid var(--azul);
  color: var(--azul);
  border-radius: 7px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .5px;
}

.product-info button:hover {
  background: var(--azul);
  color: #00101c;
}

.swipe-help {
  color: var(--gris);
  font-size: 12px;
  text-align: right;
  margin-top: 8px;
}

.channel-section {
  margin: 10px 6% 70px;
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 30px;
  background: linear-gradient(120deg, #0c1a36, #071020);
  border: 1px solid var(--borde);
  border-radius: 18px;
}

.channel-icon {
  flex: 0 0 85px;
  height: 85px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  background: rgba(0, 200, 255, .12);
  color: var(--azul);
  font-size: 45px;
}

.channel-section h2 {
  font-size: 24px;
}

.channel-section p {
  margin-bottom: 18px;
}

.contact-section {
  padding: 65px 20px;
  text-align: center;
  background: radial-gradient(ellipse at center, #0c1b35, #050816 70%);
  border-top: 1px solid var(--borde);
}

.whatsapp-button {
  background: #20c96b;
  box-shadow: none;
}

footer {
  padding: 35px 15px;
  text-align: center;
  border-top: 1px solid var(--borde);
  background: #030610;
}

footer .logo {
  display: inline-block;
  margin-bottom: 12px;
}

footer p {
  color: var(--azul);
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

footer small {
  color: var(--gris);
  font-size: 10px;
}

.cart-overlay {
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, .7);
  opacity: 0;
  visibility: hidden;
  transition: .25s;
}

.cart-overlay.visible {
  opacity: 1;
  visibility: visible;
}

.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(420px, 100%);
  height: 100vh;
  height: 100dvh;
  z-index: 21;
  display: flex;
  flex-direction: column;
  padding: 22px;
  background: #0a1224;
  border-left: 1px solid var(--borde);
  transform: translateX(105%);
  transition: transform .3s ease;
}

.cart-panel.open {
  transform: translateX(0);
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--borde);
}

.cart-header h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
}

.cart-header button {
  background: transparent;
  border: 0;
  color: white;
  font-size: 23px;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 18px 0;
}

.empty-cart {
  color: var(--gris);
  text-align: center;
  padding: 40px 10px;
}

.cart-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  padding: 15px 0;
  border-bottom: 1px solid var(--borde);
}

.cart-item h3 {
  font-size: 14px;
  margin-bottom: 7px;
}

.cart-item p {
  color: var(--azul);
  font-weight: 700;
}

.cart-controls {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 10px;
}

.cart-controls button {
  width: 27px;
  height: 27px;
  background: #142746;
  border: 1px solid var(--borde);
  color: white;
  border-radius: 5px;
}

.cart-delete {
  background: transparent;
  border: 0;
  color: #ff657c;
  font-size: 18px;
}

.cart-footer {
  padding-top: 18px;
  border-top: 1px solid var(--borde);
}

.total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-size: 18px;
}

.total-row strong {
  color: var(--azul);
}

.checkout-button,
.continue-button {
  width: 100%;
  padding: 15px;
  border-radius: 7px;
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 1px;
}

.checkout-button {
  background: linear-gradient(100deg, #007bff, #00c8ff);
  border: 0;
  color: #00101c;
}

.continue-button {
  margin-top: 10px;
  background: transparent;
  color: white;
  border: 1px solid var(--borde);
}

@media (max-width: 650px) {
  .header {
    min-height: 65px;
    padding: 10px 4%;
  }

  .logo {
    font-size: 24px;
  }

  .brand {
    max-width: 145px;
    font-size: 9px;
    line-height: 1.6;
  }

  .cart-button {
    padding: 8px 10px;
    font-size: 16px;
  }

  .hero, .slides {
    min-height: 390px;
  }

  .slide {
    padding: 48px 12%;
  }

  .hero h1 {
    font-size: 32px;
  }

  .hero-text p {
    font-size: 13px;
  }

  .hero-art {
    font-size: 75px;
    position: absolute;
    right: 10%;
    bottom: 55px;
    opacity: .22;
  }

  .slide-arrow.prev { left: 5px; }
  .slide-arrow.next { right: 5px; }

  .ticker {
    font-size: 9px;
    padding: 15px 8px;
    gap: 12px;
  }

  .products-section {
    padding: 55px 5%;
  }

  .product-card {
    flex-basis: 220px;
  }

  .channel-section {
    margin: 5px 5% 50px;
    padding: 25px 18px;
    gap: 15px;
  }

  .channel-icon {
    flex-basis: 55px;
    height: 55px;
    font-size: 30px;
  }

  .channel-section h2 {
    font-size: 18px;
  }

  .channel-section p {
    font-size: 12px;
  }

  .channel-section .primary-button {
    font-size: 10px;
    padding: 12px;
  }

  .contact-section {
    padding: 50px 15px;
  }
}
