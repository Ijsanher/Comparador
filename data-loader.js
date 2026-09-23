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
    throw new Error("PapaParse no está cargado en index.html");
  }
  const resultado = Papa.parse(texto, {
    header: true,
    skipEmptyLines: true,
    // Limpia espacios invisibles, saltos de línea y normaliza a mayúsculas
    transformHeader: (header) => header.replace(/[\r\n]+/g, " ").trim().toUpperCase()
  });
  return resultado.data;
}

function construirDatosDesdeFilas(filas) {
  const comparador = {};
  const comparaciones = {};

  filas.forEach((fila) => {
    // 1. MODELO_ID y 2. MODELO_NOMBRE
    const modeloId = (fila.MODELO_ID || "").trim();
    const modeloNombre = (fila.MODELO_NOMBRE || "").trim();

    // 3. COMPETIDOR
    const competidor = (fila.COMPETIDOR || "").trim();

    // Si la fila no tiene ID de modelo ni competidor, se descarta
    if (!modeloId || !competidor) return;

    // --- COMPARADOR: qué competidores existen por modelo ---
    if (!comparador[modeloId]) comparador[modeloId] = [];
    if (!comparador[modeloId].includes(competidor)) {
      comparador[modeloId].push(competidor);
    }

    // --- COMPARACIONES: cuadro comparativo detallado ---
    const llave = `${modeloId}|${competidor}`;
    if (!comparaciones[llave]) {
      comparaciones[llave] = {
        // 5. TITULO
        titulo: (fila.TITULO || "").trim() || `COMPARATIVO: ${modeloNombre || modeloId} vs ${competidor}`,
        competidorNombre: competidor,
        // 4. FOTO_COMPETIDOR
        fotoCompetidor: (fila.FOTO_COMPETIDOR || "").trim() || `images/comparador/${competidor.toLowerCase().replace(/\s+/g, "-")}.jpg`,
        secciones: [],
      };
    }

    const entrada = comparaciones[llave];

    // 6. CATEGORIA
    const categoria = (fila.CATEGORIA || "").trim() || "GENERAL";
    let seccion = entrada.secciones.find((s) => s.categoria === categoria);
    if (!seccion) {
      seccion = { categoria, filas: [] };
      entrada.secciones.push(seccion);
    }

    // 7. ITEM, 8. GEELY, 9. COMPETIDOR_VALOR, 10. VENTAJA
    seccion.filas.push({
      label: (fila.ITEM || "").trim(),
      geely: (fila.GEELY || "").trim(),
      competidor: (fila.COMPETIDOR_VALOR || "").trim(),
      ventaja: (fila.VENTAJA || "").trim(),
    });
  });

  return { comparador, comparaciones };
}

/**
 * Carga los datos en vivo desde Google Sheets y actualiza las variables globales
 */
async function intentarCargarDatosDesdeDrive() {
  if (!SHEET_ID || SHEET_ID.startsWith("PEGA_AQUI")) {
    console.info("[data-loader] SHEET_ID no configurado.");
    return false;
  }

  try {
    const url = construirUrlCsv(SHEET_ID, SHEET_NOMBRE_PESTAÑA);
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`El Sheet respondió con estado ${respuesta.status}. Verifica que esté compartido como Lector público.`);
    }

    const texto = await respuesta.text();
    const filas = parsearCsv(texto);

    if (!filas || filas.length === 0) {
      throw new Error("El Sheet respondió sin registros.");
    }

    const { comparador, comparaciones } = construirDatosDesdeFilas(filas);
    const totalComparaciones = Object.keys(comparaciones).length;

    // Actualiza los objetos globales
    Object.keys(COMPARADOR).forEach((k) => delete COMPARADOR[k]);
    Object.assign(COMPARADOR, comparador);

    Object.keys(COMPARACIONES).forEach((k) => delete COMPARACIONES[k]);
    Object.assign(COMPARACIONES, comparaciones);

    console.info(`[data-loader] Datos cargados en vivo desde Google Sheets ✅ (${filas.length} filas, ${totalComparaciones} comparaciones).`);

    // Refrescar el selector si el usuario ya tenía un vehículo seleccionado
    if (typeof refrescarComparadorActivo === "function") {
      refrescarComparadorActivo();
    }

    return true;
  } catch (error) {
    console.warn("[data-loader] No se pudo cargar el Sheet en vivo, usando respaldo. Motivo:", error.message);
    return false;
  }
}
