const emojis = ["🔥", "✨", "🎉", "👋", "💥"];

function obtenerEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function saludar(nombre = "Kapoone", idioma = "es") {
  const saludo = idioma === "en" ? "Hello" : "Hola";
  return `${obtenerEmoji()} ${saludo} ${nombre}, bienvenido a tu paquete NPM personalizado!`;
}

function saludarHTML(nombre = "Kapoone", idioma = "es") {
  const saludo = idioma === "en" ? "Hello" : "Hola";
  return `<h1 style="color:#ff4081;">${obtenerEmoji()} ${saludo} ${nombre}</h1><p>¡Bienvenido a tu paquete NPM personalizado!</p>`;
}

module.exports = { saludar, saludarHTML };
