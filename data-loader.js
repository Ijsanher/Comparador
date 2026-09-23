/**
 * CARGADOR DE DATOS DINÁMICO (Google Sheets / Drive)
 * -------------------------------------------------------
 * Esto permite que edites el cuadro de comparaciones directamente en
 * un Google Sheet (en Drive) y que esos cambios se reflejen en la web
 * la próxima vez que alguien la abra - sin tener que tocar el código.
 *
 * CÓMO CONFIGURARLO (una sola vez):
 * 1. Sube el archivo "COMPARACIONES_MAESTRO.xlsx" a Google Drive y
 *    ábrelo con Google Sheets (se convierte automáticamente).
 * 2. En Sheets: Archivo -> Compartir -> Compartir con otras personas ->
 *    cambia el acceso general a "Cualquier persona con el enlace" ->
 *    rol "Lector". (Así la web puede LEER los datos; nadie puede
 *    editar el Sheet salvo quien tú autorices).
 * 3. Copia el ID del Sheet desde la URL. Ejemplo de URL:
 *      https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/edit
 *    El ID es la parte entre "/d/" y "/edit":
 *      1AbCdEfGhIjKlMnOpQrStUvWxYz
 * 4. Pega ese ID abajo en SHEET_ID (reemplaza el texto de ejemplo).
 * 5. Guarda este archivo y abre index.html. Si todo está bien
 *    configurado, la web leerá los datos en vivo desde tu Sheet.
 *
 * IMPORTANTE:
 * - La pestaña del Sheet debe llamarse EXACTAMENTE "COMPARACIONES"
 *   (así se llama al abrir el .xlsx, no hace falta cambiar nada).
 * - No cambies los nombres de las columnas (fila 1 del Excel).
 * - Puedes agregar filas nuevas, modelos nuevos, competidores nuevos,
 *   o editar cualquier valor - todo se reflejará automáticamente.
 * - Si la web se abre como archivo local (doble clic) es posible que
 *   el navegador bloquee esta conexión por seguridad. Si eso pasa,
 *   la web sigue funcionando normal, pero usando la copia de
 *   respaldo (comparador.js y comparaciones.js) en vez de tu Sheet
 *   en vivo. Para que la conexión en vivo funcione siempre, lo ideal
 *   es publicar la web en un hosting (ver nota al final del chat).
 */

const SHEET_ID = "12MQDhlfqkIs0EtXVKQZikB0-H1t1b1KiGrf0Q7juYjA";
const SHEET_NOMBRE_PESTAÑA = "COMPARACIONES";

// -----------------------------------------------------
// No hace falta tocar nada de acá para abajo
// -----------------------------------------------------

function construirUrlCsv(sheetId, nombrePestaña) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(nombrePestaña)}`;
}

function parsearCsv(texto) {
  if (typeof Papa === "undefined") {
    throw new Error("PapaParse no está cargado (revisa que el <script> de PapaParse esté en index.html)");
  }
  const resultado = Papa.parse(texto, { header: true, skipEmptyLines: true });
  return resultado.data;
}

function construirDatosDesdeFilas(filas) {
  const comparador = {};
  const comparaciones = {};

  filas.forEach((fila) => {
    const modeloId = (fila.MODELO_ID || "").trim();
    const competidor = (fila.COMPETIDOR || "").trim();
    if (!modeloId || !competidor) return; // fila vacía o incompleta, se ignora

    // --- COMPARADOR: qué competidores existen por modelo ---
    if (!comparador[modeloId]) comparador[modeloId] = [];
    if (!comparador[modeloId].includes(competidor)) comparador[modeloId].push(competidor);

    // --- COMPARACIONES: el cuadro detallado ---
    const llave = `${modeloId}|${competidor}`;
    if (!comparaciones[llave]) {
      comparaciones[llave] = {
        titulo: fila.TITULO || "",
        competidorNombre: competidor,
        fotoCompetidor: fila.FOTO_COMPETIDOR || `images/comparador/${competidor.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        secciones: [],
      };
    }

    const entrada = comparaciones[llave];
    const categoria = fila.CATEGORIA || "General";
    let seccion = entrada.secciones.find((s) => s.categoria === categoria);
    if (!seccion) {
      seccion = { categoria, filas: [] };
      entrada.secciones.push(seccion);
    }

    seccion.filas.push({
      label: fila.ITEM || "",
      geely: fila.GEELY || "",
      competidor: fila.COMPETIDOR_VALOR || "",
      ventaja: fila.VENTAJA || "",
    });
  });

  return { comparador, comparaciones };
}

/**
 * Intenta cargar los datos en vivo desde el Google Sheet configurado.
 * Si todo sale bien, REEMPLAZA las variables globales COMPARADOR y
 * COMPARACIONES (que ya vienen cargadas con los valores de respaldo
 * desde comparador.js y comparaciones.js).
 * Si algo falla (sin configurar, sin internet, bloqueado, etc.),
 * no hace nada y la web sigue usando el respaldo estático tal cual.
 */
async function intentarCargarDatosDesdeDrive() {
  if (!SHEET_ID || SHEET_ID.startsWith("PEGA_AQUI")) {
    console.info("[data-loader] SHEET_ID no configurado todavía - usando datos de respaldo (comparador.js / comparaciones.js).");
    return false;
  }

  try {
    const url = construirUrlCsv(SHEET_ID, SHEET_NOMBRE_PESTAÑA);
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`El Sheet respondió con estado ${respuesta.status}. Revisa que esté compartido como "Cualquier persona con el enlace - Lector".`);
    }

    const texto = await respuesta.text();
    const filas = parsearCsv(texto);

    if (!filas || filas.length === 0) {
      throw new Error("El Sheet respondió vacío o con un formato inesperado.");
    }

    const { comparador, comparaciones } = construirDatosDesdeFilas(filas);

    // Reemplaza las variables globales (ya declaradas por comparador.js / comparaciones.js)
    Object.keys(COMPARADOR).forEach((k) => delete COMPARADOR[k]);
    Object.assign(COMPARADOR, comparador);

    Object.keys(COMPARACIONES).forEach((k) => delete COMPARACIONES[k]);
    Object.assign(COMPARACIONES, comparaciones);

    console.info(`[data-loader] Datos cargados en vivo desde Google Sheets ✅ (${filas.length} filas, ${Object.keys(comparaciones).length} comparaciones).`);
    return true;
  } catch (error) {
    console.warn("[data-loader] No se pudo cargar el Sheet en vivo, se usa el respaldo estático. Motivo:", error.message);
    return false;
  }
}
