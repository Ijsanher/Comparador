// -----------------------------------------------------
// Estado
// -----------------------------------------------------
let modeloSeleccionado = null;

// -----------------------------------------------------
// 0. BANNER DESLIZABLE
// -----------------------------------------------------
const slidesTrack = document.getElementById("slides-track");
const dotsContenedor = document.getElementById("dots");
const arrowPrev = document.getElementById("arrow-prev");
const arrowNext = document.getElementById("arrow-next");
const heroSlider = document.getElementById("hero-slider");

const totalSlides = slidesTrack ? slidesTrack.children.length : 0;
let slideActual = 0;
let autoplayTimer = null;

function iniciarBanner() {
  if (!slidesTrack || totalSlides === 0) return;

  // crear los puntos (dots)
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " activo" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir al banner ${i + 1}`);
    dot.addEventListener("click", () => irASlide(i));
    dotsContenedor.appendChild(dot);
  }

  arrowPrev.addEventListener("click", () => irASlide(slideActual - 1));
  arrowNext.addEventListener("click", () => irASlide(slideActual + 1));

  // swipe táctil
  let startX = 0;
  slidesTrack.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    detenerAutoplay();
  }, { passive: true });

  slidesTrack.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 40) irASlide(slideActual - 1);
    else if (diff < -40) irASlide(slideActual + 1);
    iniciarAutoplay();
  });

  heroSlider.addEventListener("mouseenter", detenerAutoplay);
  heroSlider.addEventListener("mouseleave", iniciarAutoplay);

  iniciarAutoplay();
}

function irASlide(indice) {
  slideActual = (indice + totalSlides) % totalSlides;
  slidesTrack.style.transform = `translateX(-${slideActual * 100}%)`;

  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("activo", i === slideActual);
  });
}

function iniciarAutoplay() {
  detenerAutoplay();
  autoplayTimer = setInterval(() => irASlide(slideActual + 1), 5000);
}

function detenerAutoplay() {
  if (autoplayTimer) clearInterval(autoplayTimer);
}

// -----------------------------------------------------
// Referencias al DOM
// -----------------------------------------------------
const gridModelos = document.getElementById("grid-modelos");
const panelSeleccion = document.getElementById("panel-seleccion");
const nombreModeloActual = document.getElementById("nombre-modelo-actual");
const selectVersion = document.getElementById("select-version");
const selectColor = document.getElementById("select-color");
const btnVer = document.getElementById("btn-ver");

const selectComparadorCompetidor = document.getElementById("select-comparador-competidor");
const btnComparar = document.getElementById("btn-comparar");

// -----------------------------------------------------
// 1. Pintar el grid de modelos (cada uno con su foto)
// -----------------------------------------------------
function pintarModelos() {
  if (typeof CATALOGO === "undefined") {
    gridModelos.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 20px; background: rgba(255,80,80,0.15); border: 1px solid rgba(200,0,0,0.4); border-radius: 10px; font-size: 14px;">
        ⚠️ No se pudo cargar <strong>catalogo.js</strong>. Revisa que el archivo
        esté en la misma carpeta que index.html y que el nombre esté escrito
        exactamente así (minúsculas, sin espacios). Abre la consola del
        navegador (F12 → pestaña "Console") para ver el error exacto.
      </div>`;
    return;
  }

  gridModelos.innerHTML = "";

  CATALOGO.forEach((modelo) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card-modelo";
    card.dataset.id = modelo.id;

    card.innerHTML = `
      <div class="foto-wrap">
        <img src="${modelo.foto}" alt="${modelo.nombre}"
             onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'placeholder-icon\\'>🚗</span>'">
      </div>
      <div class="nombre">${modelo.nombre}</div>
    `;

    card.addEventListener("click", () => seleccionarModelo(modelo));
    gridModelos.appendChild(card);
  });
}

// -----------------------------------------------------
// 2. Al elegir un modelo -> mostrar panel y llenar versiones
// -----------------------------------------------------
function seleccionarModelo(modelo) {
  modeloSeleccionado = modelo;

  // marcar visualmente la card activa
  document.querySelectorAll(".card-modelo").forEach((c) => {
    c.classList.toggle("seleccionado", c.dataset.id === modelo.id);
  });

  nombreModeloActual.textContent = modelo.nombre;
  panelSeleccion.classList.add("visible");

  llenarSelect(selectVersion, modelo.versiones.map((v) => v.nombre), "Elige una versión");
  resetSelect(selectColor, "Primero elige una versión");
  actualizarBoton();

  // --- Comparador: ver si este modelo tiene data de comparación ---
  const competidoresDisponibles = (typeof COMPARADOR !== "undefined") ? COMPARADOR[modelo.id] : null;

  if (competidoresDisponibles && competidoresDisponibles.length > 0) {
    llenarSelect(selectComparadorCompetidor, competidoresDisponibles, "Elige modelo a comparar");
  } else {
    resetSelect(selectComparadorCompetidor, "Próximamente para este modelo");
  }
  actualizarBotonComparar();

  // en mobile, llevamos la vista hacia el panel
  panelSeleccion.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// -----------------------------------------------------
// 3. Al elegir versión -> llenar colores de esa versión
// -----------------------------------------------------
selectVersion.addEventListener("change", () => {
  const version = modeloSeleccionado.versiones.find(
    (v) => v.nombre === selectVersion.value
  );

  if (version) {
    llenarSelect(selectColor, version.colores.map((c) => c.nombre), "Elige un color");
  } else {
    resetSelect(selectColor, "Primero elige una versión");
  }

  actualizarBoton();
});

selectColor.addEventListener("change", actualizarBoton);

// -----------------------------------------------------
// 3b. COMPARADOR: al elegir el modelo rival -> habilitar botón
// -----------------------------------------------------
selectComparadorCompetidor.addEventListener("change", actualizarBotonComparar);

// -----------------------------------------------------
// 4. Botón final -> abrir carpeta de Drive
// -----------------------------------------------------
btnVer.addEventListener("click", () => {
  const version = modeloSeleccionado.versiones.find(
    (v) => v.nombre === selectVersion.value
  );
  const color = version?.colores.find((c) => c.nombre === selectColor.value);

  if (color?.link) {
    window.open(color.link, "_blank");
  }
});

// -----------------------------------------------------
// 4b. Botón "Comparar" -> abre pestaña con el cuadro comparativo
// -----------------------------------------------------
btnComparar.addEventListener("click", () => {
  const competidor = selectComparadorCompetidor.value;
  const llave = `${modeloSeleccionado.id}|${competidor}`;

  const datos = (typeof COMPARACIONES !== "undefined") ? COMPARACIONES[llave] : null;

  if (datos) {
    abrirCuadroComparativo(modeloSeleccionado, datos);
  } else {
    abrirCuadroComparativoPendiente(modeloSeleccionado.nombre, competidor);
  }
});

function abrirCuadroComparativo(modelo, datos) {
  const ventana = window.open("", "_blank");
  if (!ventana) return; // por si el navegador bloquea el popup

  const fotoPropia = `images/comparador/${modelo.id}.jpg`;

  // Algunos modelos (ej. Coolray Lite, GX3 Pro) no traen columna de
  // "ventaja competitiva" -> si ninguna fila la tiene, no mostramos esa columna.
  const tieneVentaja = datos.secciones.some((s) => s.filas.some((f) => f.ventaja && f.ventaja.trim() !== ""));
  const colspanCategoria = tieneVentaja ? 4 : 3;

  const seccionesHtml = datos.secciones.map((seccion) => {
    const filasHtml = seccion.filas.map((fila) => `
      <tr>
        <td class="col-label">${fila.label}</td>
        <td>${fila.geely || "—"}</td>
        <td>${fila.competidor || "—"}</td>
        ${tieneVentaja ? `<td class="col-ventaja">${fila.ventaja || "—"}</td>` : ""}
      </tr>
    `).join("");

    return `
      <tr class="fila-categoria">
        <td colspan="${colspanCategoria}">${seccion.categoria}</td>
      </tr>
      ${filasHtml}
    `;
  }).join("");

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${datos.titulo}</title>
      <style>
        :root {
          --bg-gradient: linear-gradient(180deg, #C9D4FE 0%, #ECEFFD 25%, #D1ECF5 60%, #A3B7FF 100%);
          --text: #171b2e;
          --text-muted: #5a6180;
          --accent: #2a4bdb;
          --border: rgba(30, 40, 90, 0.14);
        }
        * { box-sizing: border-box; }
        body {
          font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
          background: var(--bg-gradient);
          background-attachment: fixed;
          color: var(--text);
          margin: 0;
          padding: 24px 16px 60px;
        }
        .contenedor { max-width: 980px; margin: 0 auto; }
        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
          margin: 0 0 8px;
          text-align: center;
        }
        h1 {
          font-size: clamp(18px, 4vw, 24px);
          margin: 0 0 22px;
          text-align: center;
          line-height: 1.3;
        }

        /* --- espacio para las 2 fotos --- */
        .fotos-comparativas {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 12px;
          max-width: 640px;
          margin: 0 auto 22px;
        }
        .foto-card {
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          text-align: center;
        }
        .foto-card.propio { border: 2px solid var(--accent); }
        .foto-card .foto-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .foto-card .foto-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .foto-card .placeholder-foto {
          font-size: 11px;
          color: var(--text-muted);
          padding: 10px;
        }
        .foto-card .nombre-vehiculo {
          padding: 8px 10px;
          font-weight: 700;
          font-size: 12px;
        }
        .fotos-comparativas .vs-central {
          font-weight: 800;
          color: var(--accent);
          font-size: 15px;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        td {
          padding: 10px 12px;
          font-size: 13px;
          border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        td.col-label {
          font-weight: 600;
          color: var(--text-muted);
          width: 20%;
        }
        td.col-ventaja {
          color: var(--accent);
          font-size: 12px;
          width: 26%;
        }
        tr.fila-categoria td {
          background: var(--accent);
          color: #fff;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 10px 12px;
        }
        tr:last-child td { border-bottom: none; }
        p.nota {
          color: var(--text-muted);
          font-size: 12px;
          text-align: center;
          max-width: 480px;
          margin: 24px auto 0;
        }
        @media (max-width: 700px) {
          table, tbody, tr, td { display: block; width: 100%; }
          tr.fila-categoria { margin-top: 14px; border-radius: 8px; overflow: hidden; }
          tr:not(.fila-categoria) {
            background: rgba(255,255,255,0.7);
            border-radius: 10px;
            margin-bottom: 8px;
            border: 1px solid var(--border);
          }
          td.col-label { width: 100%; border-bottom: none; padding-bottom: 2px; }
          td.col-ventaja { width: 100%; border-top: 1px dashed var(--border); margin-top: 6px; font-style: italic; }
          tr:not(.fila-categoria) td:not(.col-label) { padding-top: 0; }
          td { border-bottom: none; }
        }
      </style>
    </head>
    <body>
      <div class="contenedor">
        <p class="eyebrow">Cuadro Comparativo</p>
        <h1>${datos.titulo.replace('COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: ', '')}</h1>

        <div class="fotos-comparativas">
          <div class="foto-card propio">
            <div class="foto-wrap">
              <span class="placeholder-foto">Foto pendiente<br>${fotoPropia}</span>
              <img src="${fotoPropia}" alt="${modelo.nombre}" onerror="this.remove()">
            </div>
            <div class="nombre-vehiculo">GEELY ${modelo.nombre.toUpperCase()}</div>
          </div>
          <div class="vs-central">VS</div>
          <div class="foto-card">
            <div class="foto-wrap">
              <span class="placeholder-foto">Foto pendiente<br>${datos.fotoCompetidor}</span>
              <img src="${datos.fotoCompetidor}" alt="${datos.competidorNombre}" onerror="this.remove()">
            </div>
            <div class="nombre-vehiculo">${datos.competidorNombre.toUpperCase()}</div>
          </div>
        </div>

        <table>
          <tbody>
            ${seccionesHtml}
          </tbody>
        </table>

        <p class="nota">Ficha comparativa referencial. Las especificaciones pueden variar según el año de fabricación y disponibilidad de stock.</p>
      </div>
    </body>
    </html>
  `;

  ventana.document.write(html);
  ventana.document.close();
}

function abrirCuadroComparativoPendiente(vehiculoPropio, competidor) {
  const ventana = window.open("", "_blank");
  if (!ventana) return;

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Cuadro Comparativo</title>
      <style>
        body {
          font-family: -apple-system, "Segoe UI", system-ui, sans-serif;
          background: #0f1220;
          color: #f5f6f8;
          margin: 0;
          padding: 40px 20px;
          text-align: center;
        }
        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6c8dff;
          font-weight: 700;
          margin-bottom: 10px;
        }
        h1 { font-size: 22px; margin: 0 0 30px; }
        .vs-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          max-width: 640px;
          margin: 0 auto 30px;
        }
        .vehiculo {
          flex: 1 1 220px;
          background: #1a1f2e;
          border: 1px solid #2a3040;
          border-radius: 12px;
          padding: 20px;
          font-weight: 600;
        }
        .vs-label { font-weight: 800; color: #6c8dff; font-size: 14px; }
        p.nota { color: #9aa2b5; font-size: 14px; max-width: 480px; margin: 0 auto; }
      </style>
    </head>
    <body>
      <p class="eyebrow">Cuadro Comparativo</p>
      <h1>Comparación de vehículos</h1>
      <div class="vs-row">
        <div class="vehiculo">${vehiculoPropio}</div>
        <div class="vs-label">VS</div>
        <div class="vehiculo">${competidor}</div>
      </div>
      <p class="nota">Todavía no está cargado el cuadro detallado de esta combinación.</p>
    </body>
    </html>
  `;

  ventana.document.write(html);
  ventana.document.close();
}

// -----------------------------------------------------
// Helpers
// -----------------------------------------------------
function llenarSelect(select, opciones, placeholder) {
  select.disabled = false;
  select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
  opciones.forEach((op) => {
    const option = document.createElement("option");
    option.value = op;
    option.textContent = op;
    select.appendChild(option);
  });
}

function resetSelect(select, placeholder) {
  select.disabled = true;
  select.innerHTML = `<option value="" disabled selected>${placeholder}</option>`;
}

function actualizarBoton() {
  const versionOk = selectVersion.value && !selectVersion.disabled;
  const colorOk = selectColor.value && !selectColor.disabled;
  btnVer.disabled = !(versionOk && colorOk);
}

function actualizarBotonComparar() {
  const competidorOk = selectComparadorCompetidor.value && !selectComparadorCompetidor.disabled;
  btnComparar.disabled = !competidorOk;
}

// -----------------------------------------------------
// Iniciar
// -----------------------------------------------------
// Primero se pinta todo con los datos de respaldo (para que la web
// nunca se vea vacía ni "cargando"), y en paralelo se intenta traer
// la versión en vivo desde Google Sheets. Si llega a tiempo, no se
// nota ningún cambio visual porque el modelo aún no fue elegido.
//
// Todo va envuelto en try/catch: si UNA parte falla (por ejemplo,
// falta algún archivo .js), el resto de la página sigue funcionando
// en vez de quedar completamente en blanco.
try {
  pintarModelos();
} catch (error) {
  console.error("[app.js] Error al pintar los modelos:", error);
}

try {
  iniciarBanner();
} catch (error) {
  console.error("[app.js] Error al iniciar el banner:", error);
}

try {
  if (typeof intentarCargarDatosDesdeDrive === "function") {
    intentarCargarDatosDesdeDrive();
  }
} catch (error) {
  console.error("[app.js] Error al intentar cargar datos desde Drive:", error);
}
