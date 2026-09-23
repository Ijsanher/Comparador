/**
 * CARGADOR DE DATOS DINÁMICO (Google Sheets / Drive)
 */

const SHEET_ID = "12MQDhlfqkIs0EtXVKQZikB0-H1t1b1KiGrf0Q7juYjA";
const SHEET_NOMBRE_PESTAÑA = "COMPARACIONES";

function construirUrlCsv(sheetId, nombrePestaña) {
  const timestamp = new Date().getTime();
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(nombrePestaña)}&t=${timestamp}`;
}

function parsearCsv(texto) {
  if (typeof Papa === "undefined") {
    throw new Error("PapaParse no está cargado");
  }
  const resultado = Papa.parse(texto, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim().toUpperCase() // Asegura que no fallen mayúsculas ni espacios
  });
  return resultado.data;
}

function construirDatosDesdeFilas(filas) {
  const comparador = {};
  const comparaciones = {};

  filas.forEach((fila) => {
    // Normalización de claves por si difieren en el Sheet
    const modeloId = (fila.MODELO_ID || fila["MODELO ID"] || fila.MODELO || "").trim();
    const competidor = (fila.COMPETIDOR || fila.RIVAL || "").trim();

    if (!modeloId || !competidor) return;

    // --- COMPARADOR: lista de competidores por modelo ---
    if (!comparador[modeloId]) comparador[modeloId] = [];
    if (!comparador[modeloId].includes(competidor)) comparador[modeloId].push(competidor);

    // --- COMPARACIONES: contenido del cuadro ---
    const llave = `${modeloId}|${competidor}`;
    if (!comparaciones[llave]) {
      comparaciones[llave] = {
        titulo: fila.TITULO || `Comparativa: ${modeloId} vs ${competidor}`,
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
      label: fila.ITEM || fila.LABEL || "",
      geely: fila.GEELY || fila.VALOR_GEELY || "",
      competidor: fila.COMPETIDOR_VALOR || fila.VALOR_COMPETIDOR || "",
      ventaja: fila.VENTAJA || "",
    });
  });

  return { comparador, comparaciones };
}

async function intentarCargarDatosDesdeDrive() {
  if (!SHEET_ID || SHEET_ID.startsWith("PEGA_AQUI")) {
    console.info("[data-loader] SHEET_ID no configurado todavía.");
    return false;
  }

  try {
    const url = construirUrlCsv(SHEET_ID, SHEET_NOMBRE_PESTAÑA);
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`El Sheet respondió con estado ${respuesta.status}.`);
    }

    const texto = await respuesta.text();
    const filas = parsearCsv(texto);

    if (!filas || filas.length === 0) {
      throw new Error("El Sheet respondió vacío.");
    }

    const { comparador, comparaciones } = construirDatosDesdeFilas(filas);

    // Reemplaza las variables globales con los datos en vivo
    Object.keys(COMPARADOR).forEach((k) => delete COMPARADOR[k]);
    Object.assign(COMPARADOR, comparador);

    Object.keys(COMPARACIONES).forEach((k) => delete COMPARACIONES[k]);
    Object.assign(COMPARACIONES, comparaciones);

    console.info(`[data-loader] Datos cargados en vivo desde Google Sheets ✅ (${filas.length} filas, ${Object.keys(comparaciones).length} comparaciones).`);

    // Refrescar el selector en app.js si ya había un auto elegido
    if (typeof refrescarComparadorActivo === "function") {
      refrescarComparadorActivo();
    }

    return true;
  } catch (error) {
    console.warn("[data-loader] No se pudo cargar el Sheet en vivo, usando respaldo. Motivo:", error.message);
    return false;
  }
}
