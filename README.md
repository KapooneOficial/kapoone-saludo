# @marcokapoone/kapoone-saludo

Saluda con estilo en texto o HTML, con emojis, soporte para navegador y multilenguaje.

## 📦 Instalación

```bash
npm install @marcokapoone/kapoone-saludo
```

## 🧠 Uso en Node.js

```js
const { saludar, saludarHTML } = require('@marcokapoone/kapoone-saludo');

console.log(saludar("Marco"));       // 🎉 Hola Marco...
console.log(saludar("Marco", "en")); // 👋 Hello Marco...

console.log(saludarHTML("Kapoone"));
// Devuelve HTML para insertar en una página
```

## 🌐 Uso en HTML (navegador)

```html
<script src="saludo.js"></script>
<script>
  document.body.innerHTML = SaludoKapoone.saludarHTML("Marco", "en");
</script>
```
