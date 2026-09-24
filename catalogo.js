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
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1JC-GhAd6QYqVN59lF-NzZyEUjSyL4Mqk" },
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
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/11cdg_D9E21sV5JQtoP6ooccCkOMHgHnG" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1BRh-JqaojUaruQlc-COPgZdUu4Q7eeYC" },
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
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/12OeN4pI-8DRSyC5EvZaBuXK9OtP9YqYy" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1c5_w7Ic0OveUNyrHcWXbIBXmhnrYquin" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/11eI_6bytlZHhYiD7MyLRyMeEM_hTvRjl" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/12AvlYcWB-JUV_OB4ArHYN58KmyPLPTaa" }
        ]
      },
      {
        nombre: "Signature",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1hotQfYLiPJ9nkZiQdsUt01w3AwC_g0Eu" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1KNhNtv_eE-nFJJcJQFk8cvBNw9-3rKbN" },
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
        nombre: "Exclusive_MT",
        colores: [
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1-YiT3fdN1vB8XgPqaL6wllCC106yOrhN" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1oMu02KA2OygfhONqksP4aPnYDc7EmxZj" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/19VyEuSN9m1DWTZ3UfRS_wW7KfxBgW-J4" }
        ]
      },
      {
        nombre: "Sport",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1Tcg7f5eT-zfwuq8zJQiSnOYa51ZpVVyq" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1ofyUQaVzkWs7wGqa5hwzz9uz92fGucpz" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1vQLtkRWcpK4VgYWDvegTEUR-xZym38KL" }
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
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/11ghQ0nAYAi_wXLVnIvDAMv9N9iawEYX0" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1cqE_8yBrWaUTN6Hhe7a6dKoq8Ie1I_Hc" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1W48ltipix4SDS-TC8NtnTAO-PQ2qpepy" },
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1mCTlVAggvV4qdn293flIyiFV4IE-2x2F" }
        ]
      },
      {
        nombre: "Exclusive",
        colores: [
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1RFcXIusL4OiC-NYTEP-JpGm6tKBOqRJx" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/11ghQ0nAYAi_wXLVnIvDAMv9N9iawEYX0" },
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
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1xaf5MKkINACBHOWwTm1qZ-02vQh3W0bv" }
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
        nombre: "Comfort",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1r3ZaAd31RKtbTu83fMHOdft7B8OUPFwL" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1Jv5QL9aWPhm1xO4sbfNQZdZBQtavI8p8" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1BQ0RVTVW6CyMaRNx9_Fy7NeclV64BXxm" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1cwNxsvaBVMhP5OMt1nezqxxbmyhvp2gY" }
        ]
      },
      {
        nombre: "Exclusive",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1J6uh8DC9XLZ_fAASAB_3tUY1q2IfXi0g" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1TMD6dr2oCH-94hz6j4GkGn_veFE_8ZNj" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1gWIvjB6RDlmzoNX1xBria1x2hk2mAioi" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/11zm-Gi2h9ReDXCpjmLz6-_RqzwuVpBmq" }
        ]
      },
      {
        nombre: "Sport_Plus",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/15tj-U0osk0tDoLM4LEdWbh9GS4IeQ37U" },
          { nombre: "Tornasol", link: "https://drive.google.com/drive/folders/171YTkV_oOUe_ftTlieagtX77u_iFKhci" },
          { nombre: "Silver", link: "https://drive.google.com/drive/folders/12ug5OH8oQhSj_D7u3etJ7-0tLzBrNtM6" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/1VS9GfRmhlYT6JucIVSscObBuZWklx6xh" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1G4LBiLZysC27kAV2nSC5wPpr40iq8zNs" }
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
        nombre: "Exclusive MT",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1xKHG0aaUb2VXomPsizjscSYTqffJqPq2" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/11hwTOiS4KS0cL53ZopcGPQuMRLrqR7fA" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1XGd1Hf9EDMO_Pxyc5qeC53gi1_RWxPuR" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1g3vsAAm1hQ1wFhAE3aEG2gXTx-2aDO1O" }
        ]
      },
      {
        nombre: "Exclusive CVT",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1yu2ES1_ZKbLZhlZCTSSsuPTX9yC57cIg" },
          { nombre: "Azul", link: "https://drive.google.com/drive/folders/1OaZtK9_O8t__IiXZ9KitJhlDpkRuTZgo" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1-lrHgAaONkgg6IQEJVtYk2NcAe3Ei3km" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/1L7usgPANSMN_hAO0Rh8B-qPR_OAerb2y" }
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
        nombre: "Exclusive",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/15uCuPyWeW-nOwWhyR89Eb7YuL9W5wmI5" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1XgAwtKk8_jOn8zcznzkgemGI1cRK3eUp" },
          { nombre: "Verde", link: "https://drive.google.com/drive/folders/1bLjg67o6W4QdTYBDjRWBTceR-7qAYsdD" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1n5uvcoLEAt-Z_WtBBuyBRisKUSDqHsSO" }
        ]
      },
      {
        nombre: "Signature",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1D0CtRGSdrtDae5RqcSYyIjdDQRsI7MMO" },
          { nombre: "Verde", link: "https://drive.google.com/drive/folders/1V2O60EGQYfNqXPVqtH6DGD8hw3k4l3ch" },
          { nombre: "Plata", link: "https://drive.google.com/drive/folders/1dv1hu-G3I8JBggFe3Yhv-ACMUkoJBqXL" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1nORgZkycxPFUSkAR3FH3Ooz1NTCppO-G" }
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
        nombre: "Exclusive_MT",
        colores: [
          { nombre: "Blanco", link: "https://drive.google.com/drive/folders/1U8K9QLS5Ec6r77kKCCrvalVGjRDdyWEs" },
          { nombre: "Negro", link: "https://drive.google.com/drive/folders/1Ge1buUUhTREV4-UWOF3NTp_WVqxfU3A6" },
          { nombre: "Rojo", link: "https://drive.google.com/drive/folders/193hyiTBKUz7UD8If4I-Z4HVleuNYxdfZ" },
          { nombre: "Gris", link: "https://drive.google.com/drive/folders/185ZPkZGQvAXUSJmB2wvZHuXD1o751SaN" }
        ]
      },
      {
        nombre: "Exclusive_AT",
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
