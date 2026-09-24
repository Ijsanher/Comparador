/**
 * CATÁLOGO DE DATOS
 * -------------------------------------------------------
 * Acá va TODA la información de tu inventario.
 * Estructura: MODELO -> VERSIONES -> COLORES -> link de Drive
 *
 * Generado a partir de "LISTA_VIDEOS_GEELY.xlsx" (pestaña "CARPETAS"),
 * que ya incluye el link real de Google Drive de cada color.
 *
 * CÓMO EDITAR:
 * 1. Cada modelo necesita: id, nombre, foto (ruta a una imagen en /images) y su lista de versiones.
 * 2. Cada versión necesita: nombre y su lista de colores.
 * 3. Cada color necesita: nombre y el link de la carpeta de Google Drive con las fotos/videos.
 *
 * TIP: para conseguir el link de una carpeta de Drive -> click derecho en la carpeta
 * -> "Compartir" -> "Copiar enlace". Asegúrate que el acceso sea "Cualquier persona con el enlace".
 */

const CATALOGO = [
  {
    id: "ex5-em-i",
    nombre: "EX5 EM-i",
    foto: "images/ex5-em-i.jpg",
    versiones: [
      {
        nombre: "Signature",
        colores: [
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1TFQxL9_7V3hmsplWhIcunG6yVqykaIrE" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/16rvO0MaLoPDxZ_PH6TwhdKfSjSprdrji" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1yBvURKONZJ-kpgTj42OJ1UF5UjE_3EQh" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1CJIrOxtK2N_EQV1ps1HdedhIObiS0ehl" }
        ]
      }
    ]
  },
  {
    id: "ex5",
    nombre: "EX5",
    foto: "images/ex5.jpg",
    versiones: [
      {
        nombre: "Signature",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1b6Bw8fELPQ68wTE21tR_kKMdI8ZncLLU" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1KlXJHcgPh003j58rs89WrvWYtyV0zwRH" },
          { nombre: "Verde", link: "https://drive.google.com/drive/folders/12hzo5OHWSSgk7g8FyzTzC9lJExmoS6UB" }
        ]
      }
    ]
  },
  {
    id: "new-okavango",
    nombre: "New Okavango",
    foto: "images/new-okavango.jpg",
    versiones: [
      {
        nombre: "Exclusive",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/12OeN4pI-8DRSyC5EvZaBuXK9OtP9YqYy" }
        ]
      },
      {
        nombre: "Signature",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1hotQfYLiPJ9nkZiQdsUt01w3AwC_g0Eu" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/18xfMKZT0zkOHzabWcsZVZMeK7UnMCqKp" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1ZPHolD9tXKXDkcxWWxL9HGh-L3iuM9RT" }
        ]
      }
    ]
  },
  {
    id: "emgrand",
    nombre: "Emgrand",
    foto: "images/emgrand.jpg",
    versiones: [
      {
        nombre: "Sport",
        colores: [
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1ofyUQaVzkWs7wGqa5hwzz9uz92fGucpz" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1Tcg7f5eT-zfwuq8zJQiSnOYa51ZpVVyq" }
        ]
      }
    ]
  },
  {
    id: "cityray",
    nombre: "Cityray",
    foto: "images/cityray.jpg",
    versiones: [
      {
        nombre: "Comfort",
        colores: [
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/11ghQ0nAYAi_wXLVnIvDAMv9N9iawEYX0" }
        ]
      },
      {
        nombre: "Exclusive",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1RFcXIusL4OiC-NYTEP-JpGm6tKBOqRJx" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1ZDJZCbCJG8cQqHl4DrwUxddZQT9Dieh6" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1Ue8-AIvPHtg76hWjQAWqPfPtqlVxC7Gl" }
        ]
      },
      {
        nombre: "Signature",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1TI0LSLKalr6r6f6cpJbPFsTp6Yl08d0Z" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1Lv7NQKn3fo0P0IdmZxvz49tANk2gxQ2o" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1YzOu85JO_PmriVQZ7FM6necSArgqfisz" },
          { nombre: "Silver", link: "https://drive.google.com/drive/folders/1xaf5MKkINACBHOWwTm1qZ-02vQh3W0bv" }
        ]
      }
    ]
  },
  {
    id: "new-coolray-2026",
    nombre: "New Coolray 2026",
    foto: "images/new-coolray-2026.jpg",
    versiones: [
      {
        nombre: "Sport",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/15tj-U0osk0tDoLM4LEdWbh9GS4IeQ37U" },
          { nombre: "Tornasol", link: "https://drive.google.com/drive/folders/171YTkV_oOUe_ftTlieagtX77u_iFKhci" },
          { nombre: "Silver", link: "https://drive.google.com/drive/folders/12ug5OH8oQhSj_D7u3etJ7-0tLzBrNtM6" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1VS9GfRmhlYT6JucIVSscObBuZWklx6xh" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1G4LBiLZysC27kAV2nSC5wPpr40iq8zNs" }
        ]
      },
      {
        nombre: "Exclusive",
        colores: [
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1TMD6dr2oCH-94hz6j4GkGn_veFE_8ZNj" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1J6uh8DC9XLZ_fAASAB_3tUY1q2IfXi0g" }
        ]
      }
    ]
  },
  {
    id: "coolray-lite",
    nombre: "Coolray Lite",
    foto: "images/coolray-lite.jpg",
    versiones: [
      {
        nombre: "Exclusive CVT",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1L7usgPANSMN_hAO0Rh8B-qPR_OAerb2y" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1-lrHgAaONkgg6IQEJVtYk2NcAe3Ei3km" },
          { nombre: "Celeste", link: "https://drive.google.com/drive/folders/1OaZtK9_O8t__IiXZ9KitJhlDpkRuTZgo" }
        ]
      }
    ]
  },
  {
    id: "starray",
    nombre: "Starray",
    foto: "images/starray.jpg",
    versiones: [
      {
        nombre: "Signature",
        colores: [
          { nombre: "Verde", link: "https://drive.google.com/drive/folders/1V2O60EGQYfNqXPVqtH6DGD8hw3k4l3ch" }
        ]
      }
    ]
  },
  {
    id: "okavango-mild-hybrid",
    nombre: "Okavango Mild Hybrid",
    foto: "images/okavango-mild-hybrid.jpg",
    versiones: [
      {
        nombre: "Signature",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/13Gt9KjycfEIISpMr5AF0GBTEfYXCnudR" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1PcOVok-5Bf8JkrvKIufFV1pFMf0Q60nQ" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1z9UOKSsRVdcUSQEBfnrh_S4jZx3ubT0o" }
        ]
      }
    ]
  },
  {
    id: "gx3-pro",
    nombre: "GX3 Pro",
    foto: "images/gx3-pro.jpg",
    versiones: [
      {
        nombre: "Exclusive MT",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1U8K9QLS5Ec6r77kKCCrvalVGjRDdyWEs" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1Ge1buUUhTREV4-UWOF3NTp_WVqxfU3A6" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/193hyiTBKUz7UD8If4I-Z4HVleuNYxdfZ" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/185ZPkZGQvAXUSJmB2wvZHuXD1o751SaN" }
        ]
      },
      {
        nombre: "Exclusive AT",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1AVuA2z7OMsDloSu5R_WDwD4RX_f8kBcp" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1WmRbHFs5oW4sBrY7q86grr77isETrbhz" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1z8kpnVzUFyV37BQVjYk66GEErK8aoGlT" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1QqawCU2ANaXk0vRoY5Eew8gxE6XwAnqO" }
        ]
      }
    ]
  }
];
