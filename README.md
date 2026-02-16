# LinkReel Landing (MVP)

Landing estática (HTML/CSS/JS) lista para abrir en Visual Studio Code y correr localmente.

## Archivos
- `index.html`
- `styles.css`
- `script.js`

## Paso a paso — correr en tu PC (Windows)
### Opción 1 (recomendada): VS Code + Live Server
1) Descomprimí el ZIP
2) Abrí VS Code
3) **File > Open Folder...** y elegí la carpeta `linkreel-landing`
4) Instalá extensión **Live Server** (Ritwick Dey)
5) Click derecho en `index.html` -> **Open with Live Server**
6) Se abre el navegador y se actualiza solo al guardar

### Opción 2: Python (sin extensiones)
1) Abrí PowerShell en la carpeta del proyecto
2) Ejecutá: `py -m http.server 5500`
3) Abrí: `http://localhost:5500`

## Cambios rápidos
- WhatsApp: en `index.html` buscá `wa.me/5490000000000` y reemplazá por tu número.
- Calendly: buscá `https://calendly.com/` y poné tu link.
- Email del formulario: en `script.js` cambiá `const to='hola@linkreel.app'`.

## Deploy
Es estático: Vercel/Netlify/Cloudflare Pages/GitHub Pages.
