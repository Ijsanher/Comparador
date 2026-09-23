/**
 * DATOS DE COMPARACIONES (respaldo estático)
 * -------------------------------------------------------
 * Se genera automáticamente a partir de COMPARACIONES_MAESTRO.xlsx.
 * Esta es la copia de RESPALDO que usa la web si no logra conectarse
 * al Google Sheet en Drive. Ver nota en comparador.js.
 *
 * Cada comparación se busca con una llave "id-del-modelo|competidor".
 */

const COMPARACIONES = {
  "cityray|Toyota Corolla Cross": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. TOYOTA COROLLA CROSS",
    competidorNombre: "Toyota Corolla Cross",
    fotoCompetidor: "images/comparador/toyota-corolla-cross.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Distancia entre ejes: 2,701 mm)", competidor: "4,460 × 1,825 × 1,620 mm (Distancia entre ejes: 2,640 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie en todas las versiones)", competidor: "440 Litros (de serie en todas las versiones)", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "161 mm despeje | Tanque de 47 L (2.0L) / 36 L (Híbrido)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "2.0L Gasolina Inyección Mixta D-4S (1,987 cc) o 1.8L Dynamic Force Híbrido Auto-recargable", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "2.0L: 169 HP @ 6,600 rpm | 1.8L Híbrido: 120.7 HP combinados (Motor comb. 96.6 HP + Motor eléc. 71.1 HP)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "2.0L: 203 Nm @ 4,800 rpm | 1.8L Híbrido: 142 Nm comb.", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT húmeda | Tracción Delantera (2WD)", competidor: "Automática Direct Shift CVT (2.0L) / e-CVT (Híbrido) | Tracción Delantera (2WD)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (todas las versiones)", competidor: "Barra de torsión semi-independiente con barra estabilizadora (todas las versiones)", ventaja: "Cityray ofrece suspensión trasera independiente Multi-link de serie (mayor confort y estabilidad vs eje de torsión)." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC (Control Crucero Adaptativo), AEB (Frenado Autónomo de Emergencia), LDW, LKA, ELKA, HWA (Carretera), IHBC, BSD (Punto Ciego), RCTA (Tráfico Cruzado)", competidor: "Toyota Safety Sense: PCS (Pre-colisión), LDA con LTA (Alerta y Mantenimiento de Carril), ACC (Control Crucero Adaptativo), AHB (Luces Altas Auto)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Toyota Corolla Cross las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Equipado desde versión EXCLUSIVE y SIGNATURE (Comfort no incluye)", competidor: "Disponible ÚNICAMENTE en versiones FULL D-LUX (2.0 & Híbrido) y PREMIUM (Híbrido). (Versiones Base y Full no incluyen)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Toyota Corolla Cross las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "7 Airbags (Frontales, Laterales, Cortina y Rodilla para Conductor) de serie", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras de Asistencia", geely: "Cámara 540° con vista de chasis transparente (desde Exclusive) / Cámara y sensores traseros (Comfort)", competidor: "Cámara de retroceso estándar en todas las versiones (No ofrece cámara 360° en ninguna versión)", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil HD vertical de 13.2\" con Apple CarPlay (de serie)", competidor: "Pantalla táctil de 9\" (Base 2.0) | Pantalla táctil de 10\" con CarPlay/Android Auto (Full en adelante)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel Digital LCD de 10.2\" (de serie)", competidor: "Display TFT 4.2\" (Base) | Display TFT 7\" (Full y Full D-Lux) | Digital TFT 12.3\" (Solo Hybrid Premium)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico / Sunroof", geely: "Techo Panorámico completo de cristal con apertura eléctrica (desde Exclusive)", competidor: "Sunroof corredizo simple de 1 cuerpo (Solo en Full D-Lux y Hybrid Premium)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Portón Trasero Eléctrico", geely: "Apertura eléctrica con sensor (desde Exclusive)", competidor: "Compuerta eléctrica con sensor de patada Kick Open (Solo en Full D-Lux y Hybrid Premium)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Asientos y Tapicería", geely: "Ecocuero con tela (Comfort) / Ecocuero regulable eléctrico 6 vías (Exclusive) / Memoria y calefacción (Signature)", competidor: "Tela (Base y Full) / Cuero sintético con ajuste eléctrico de conductor (Solo Full D-Lux y Premium)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cargador Inalámbrico", geely: "Disponible desde versión Exclusive", competidor: "Disponible desde versión Full (2.0 y Híbrida)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Hyundai Tucson": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. HYUNDAI TUCSON NX4C FL",
    competidorNombre: "Hyundai Tucson",
    fotoCompetidor: "images/comparador/hyundai-tucson.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,670 × 1,865 × 1,665 mm (Batalla: 2,755 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "582 Litros detrás de la segunda fila", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "181 mm despeje | Tanque de 54 L", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "2.0L MPI Atmosférico (1,999 cc) / 1.6L Turbo T-GDI (1,598 cc) / 1.6L Híbrido HEV", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "2.0L: 154 HP @ 6,200 rpm (Design/Premium) | 1.6L Turbo: 178 HP @ 5,500 rpm (Premium Plus) | HEV: 231 HP comb. (Limited)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "2.0L: 192 Nm @ 4,500 rpm | 1.6L Turbo: 265 Nm @ 1,500-4,500 rpm | HEV: 367 Nm comb.", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera (2WD)", competidor: "Manual 6MT / Automática 6AT con palanca SBW eléctrica en volante | Tracción Delantera 2WD", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Multi-link Independiente (de serie)", ventaja: "Ambos modelos equipan suspensión trasera independiente Multi-link." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "Hyundai SmartSense: FCA (Frenado Frontal), LKA/LFA (Mantenimiento Carril), BCA (Punto Ciego), HBM, DAW, TSA, PSA", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Hyundai Tucson NX4c FL las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Disponible desde versión intermedia EXCLUSIVE y versión SIGNATURE", competidor: "Disponible ÚNICAMENTE en la versión tope de gama AT LIMITED HEV. (MT/AT Design, MT Premium y AT Premium Plus NO cuentan con ADAS)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Hyundai Tucson NX4c FL las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags (Frontales, Laterales, Cortina) de serie", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras y Sensores", geely: "Cámara 540° HD con chasis transparente (desde Exclusive)", competidor: "Cámara de retroceso estándar (Design/Premium/Premium Plus) | Cámara 360° SVM (Solo Limited HEV)", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil vertical de 13.2\" HD (de serie)", competidor: "Pantalla táctil panorámica de 12.3\" con Apple CarPlay & Android Auto (de serie)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel digital LCD de 10.2\" (de serie)", competidor: "Display TFT de 4.0\" (Design y Premium) | Doble pantalla curva integrada de 12.3\" (desde Premium Plus y Limited HEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico", geely: "Techo Panorámico de cristal con apertura eléctrica (desde Exclusive)", competidor: "Sunroof Panorámico corredizo (Solo en versiones AT Premium Plus y AT Limited HEV)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Asientos y Climatización", geely: "Ecocuero, asiento eléctrico con memoria y calefacción (Signature)", competidor: "Tela (Design/Premium) / Cuero con piloto/copiloto eléctrico, memoria, calefacción y ventilación (Limited HEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Audio Premium", geely: "8 parlantes (en versión Signature)", competidor: "6 parlantes (Design/Premium) | Sistema de sonido Premium BOSE (Solo en versión Limited HEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Kia Sportage": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. KIA NEW SPORTAGE",
    competidorNombre: "Kia Sportage",
    fotoCompetidor: "images/comparador/kia-sportage.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,515 – 4,660 × 1,865 × 1,665 mm (Batalla: 2,680 – 2,755 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "543 – 591 Litros", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "181 mm despeje | Tanque de 54 L", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "2.0L MPI Atmosférico (1,999 cc) o 1.6L Turbo GDI (1,598 cc)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "2.0L: 154 HP @ 6,200 rpm (LX/EX) | 1.6L Turbo: 178 HP @ 5,500 rpm (GT-Line / X-Line)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "2.0L: 192 Nm @ 4,500 rpm | 1.6L Turbo: 265 Nm @ 1,500-4,500 rpm", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera (2WD)", competidor: "Automática 6AT (2.0L) / Doble embrague 7DCT (1.6T) | Tracción 2WD o Tracción Integral AWD", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Multi-link Independiente (de serie)", ventaja: "Ambos modelos equipan suspensión trasera independiente Multi-link." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "Drive Wise: FCA (Colisión Frontal), LKA/LFA (Mantenimiento de Carril), BCA (Punto Ciego), SCC (Crucero Inteligente), MSLA", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Kia New Sportage las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Disponible desde versión intermedia EXCLUSIVE y versión SIGNATURE", competidor: "Disponible ÚNICAMENTE en versiones tope de gama (GT-Line / X-Line). Versiones LX y EX intermedias no incluyen paquete completo", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Kia New Sportage las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags de serie en todas las versiones", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras de Parqueo", geely: "Cámara 540° con chasis transparente HD (desde Exclusive)", competidor: "Cámara de retroceso estándar en versiones de entrada | Monitor SVM 360° con sensor de punto ciego en cluster solo en versiones tope", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil HD vertical de 13.2\" (de serie)", competidor: "Pantalla táctil de 8\" (versión base LX) | Pantalla táctil de 12.3\" curva integrada (desde versión EX)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel digital LCD de 10.2\" (de serie)", competidor: "Display digital 4.2\" (LX) | Panel 100% digital integrado de 12.3\" (GT-Line / X-Line)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico", geely: "Techo Panorámico completo de cristal (desde Exclusive)", competidor: "Sunroof panorámico con apertura de un toque (desde versiones intermedias-altas EX)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Asientos y Tapicería", geely: "Ecocuero con tela (Comfort) / Ecocuero con reglaje eléctrico (Exclusive) / Memoria y calefacción (Signature)", competidor: "Tela (LX) / Cuero artificial con regulación eléctrica, soporte lumbar y memoria (GT-Line/X-Line)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Selector de Cambios", geely: "Palanca electrónica tipo joystick en consola central", competidor: "Palanca tradicional (LX/EX) o perilla selectora rotativa E-Shift (versiones tope)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Nissan Qashqai": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. NISSAN QASHQAI",
    competidorNombre: "Nissan Qashqai",
    fotoCompetidor: "images/comparador/nissan-qashqai.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,425 × 1,835 × 1,625 mm (Batalla: 2,665 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "504 Litros detrás de la 2da fila", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "180 mm despeje | Tanque de 55 L", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "1.3L Turbo 4 cilindros 16V Turboalimentado con Intercooler (1,332 cc)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "147 HP @ 5,500 rpm (Sense MT & Advance CVT) | 155 HP @ 5,500 rpm (Exclusive AWD)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "249 Nm @ 4,600 rpm (Sense/Advance) | 265 Nm @ 4,600 rpm (Exclusive AWD)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera 2WD", competidor: "Manual 6 velocidades (Sense) / Automática Xtronic CVT con modo manual y paletas (Advance/Exclusive) | Tracción 2WD o AWD", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Multi-link Independiente (de serie)", ventaja: "Ambos modelos equipan suspensión trasera independiente Multi-link." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "Nissan Intelligent Mobility: LDW/LDP (Carril), P-FCW (Colisión Predictiva), P-FEB (Frenado Emergencia con peatón), BSW (Punto Ciego), RCTA, DAA, AVM 360°", ventaja: "Nissan ofrece NIM de serie en todas las versiones; Cityray incorpora paquete integral desde versión intermedia Exclusive." },
          { label: "Disponibilidad ADAS por Versión", geely: "Disponible desde versión intermedia EXCLUSIVE y versión SIGNATURE", competidor: "VENTAJA NISSAN: Paquete NIM completo equipado de serie desde versión base SENSE MT en adelante", ventaja: "Nissan ofrece NIM de serie en todas las versiones; Cityray incorpora paquete integral desde versión intermedia Exclusive." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags de serie en todas las versiones", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras y Monitoreo", geely: "Cámara 540° HD con chasis transparente (desde Exclusive)", competidor: "Cámara de retroceso estándar (Sense) | Monitor de Visión Periférica AVM 360° con detector de objetos en movimiento (Advance y Exclusive)", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil vertical de 13.2\" HD (de serie)", competidor: "Pantalla táctil de 12.3\" con Apple CarPlay y Android Auto inalámbrico (de serie en todas las versiones)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel digital LCD de 10.2\" (de serie)", competidor: "Tacómetro y velocímetro análogo con pantalla de 7\" (Sense) | Cuadro 100% digital de 12.3\" (Advance y Exclusive)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico", geely: "Techo Panorámico con apertura eléctrica corrediza (desde Exclusive)", competidor: "Techo panorámico de cristal fijo con cortinilla eléctrica de serie en todas las versiones (no abre cristal)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Audio Premium", geely: "8 parlantes (Signature)", competidor: "6 parlantes (Sense/Advance) | Sistema Premium BOSE con 10 parlantes (Solo en versión Exclusive AWD)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Portón Trasero", geely: "Apertura eléctrica con sensor (desde Exclusive)", competidor: "Manual (Sense/Advance) | Compuerta eléctrica con función manos libres Hands-Free (Solo Exclusive)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Mazda CX-5": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. MAZDA CX-5",
    competidorNombre: "Mazda CX-5",
    fotoCompetidor: "images/comparador/mazda-cx-5.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,575 × 1,845 × 1,680 mm (Batalla: 2,700 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "442 – 471 Litros", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "193 mm despeje | Tanque de 56 L (2WD) / 58 L (AWD)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "2.0L Skyactiv-G (1,998 cc) / 2.5L Skyactiv-G (2,488 cc) / 2.5T Turbo Skyactiv-G (2,488 cc)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "2.0L: 154 HP @ 6,000 rpm (Core/Active/High) | 2.5L: 187 HP @ 6,000 rpm (Sport) | 2.5T: 228 HP @ 5,000 rpm (Signature)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "2.0L: 200 Nm @ 4,000 rpm | 2.5L: 252 Nm @ 4,000 rpm | 2.5T: 420 Nm @ 2,000 rpm", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera (2WD)", competidor: "Automática Secuencial Skyactiv-Drive de 6 velocidades | Tracción Delantera 2WD o Integral i-ACTIV AWD", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Multi-link Independiente (de serie)", ventaja: "Ambos modelos equipan suspensión trasera independiente Multi-link." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "i-ACTIVSENSE: BSM (Punto Ciego), RCTA, LDWS (Alerta de Carril), SCBS (Frenado Autónomo Ciudad), AFLH (Luces Adaptativas), DAA", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Mazda CX-5 las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Disponible desde versión intermedia EXCLUSIVE y versión SIGNATURE", competidor: "BSM y RCTA disponibles desde versión ACTIVE | Frenado Autónomo (SCBS), Carril (LDWS) y Luces AFLH SOLO en versiones SPORT 2.5 y SIGNATURE 2.5T. (Core y Active base no tienen frenado autónomo)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Mazda CX-5 las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags de serie en todas las versiones", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras de Parqueo", geely: "Cámara 540° HD con chasis transparente (desde Exclusive)", competidor: "Cámara de retroceso estándar (Core, Active, High) | Monitor de vista 360° solo en versiones Sport y Signature", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Central", geely: "Pantalla táctil vertical de 13.2\" HD (de serie)", competidor: "Pantalla TFT de 10.25\" controlada por mando rotativo Commander en consola central (No es táctil en movimiento)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Head-Up Display / Panel", geely: "Panel Digital LCD de 10.2\" (de serie)", competidor: "Display digital en tablero | Head-Up Display con proyección en el parabrisas (desde versión High, Sport y Signature)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Sunroof / Techo Panorámico", geely: "Techo Panorámico amplio corredizo (desde Exclusive)", competidor: "Sunroof corredizo simple de 1 cuerpo (disponible desde versión Active en adelante)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Audio Premium", geely: "8 parlantes (Signature)", competidor: "6 parlantes (Core/Active) | Sistema de Sonido Envolvente BOSE Centerpoint con 10 parlantes (High, Sport y Signature)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Portón Trasero Eléctrico", geely: "Apertura eléctrica (desde Exclusive)", competidor: "Apertura de maletera eléctrica disponible a partir de versión High 2.0", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Ford Territory": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. FORD TERRITORY",
    competidorNombre: "Ford Territory",
    fotoCompetidor: "images/comparador/ford-territory.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,630 × 1,935 × 1,706 mm (Batalla: 2,726 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "448 Litros detrás de la 2da fila (1,422 L con asientos abatidos)", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "180 mm despeje | Tanque de 60 L (Gasolina) / 52 L (FHEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "1.5L EcoBoost Turbo (1,490 cc) Gasolina / 1.5L EcoBoost Híbrido no enchufable (FHEV)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "1.5T Gasolina: 158 HP @ 5,500 rpm (Trend/Titanium) | 1.5T FHEV: 252 HP combinados (Motor comb. 148 HP + Motor eléc. 218 HP)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "1.5T Gasolina: 248 Nm @ 1,500-3,500 rpm | 1.5T FHEV: 230 Nm (gas.) + 315 Nm (eléc.)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera 2WD", competidor: "Automática Doble Embrague 7 velocidades (Gasolina) / Automática DHT Híbrida | Selector rotativo Rotary Shifter | Tracción FWD", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Multi-link Independiente (de serie)", ventaja: "Ambos modelos equipan suspensión trasera independiente Multi-link." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "Ford Co-Pilot 360: Asistente Pre-colisión con AEB, BLIS (Punto Ciego) con Tráfico Cruzado, Mantenimiento de Carril con Alerta, ACC con Stop & Go, Luces Altas Auto (AHB)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Ford Territory las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Disponible desde versión intermedia EXCLUSIVE y versión SIGNATURE", competidor: "Disponible ÚNICAMENTE desde versión TITANIUM (Gasolina y FHEV) y PLATINUM FHEV. (Versión de entrada TREND no incluye ADAS)", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Ford Territory las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags de serie en todas las versiones", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras y Sensores", geely: "Cámara 540° HD con chasis transparente (desde Exclusive)", competidor: "Cámara de retroceso y sensores traseros (Trend) | Cámara 360° y sensores delanteros/traseros (desde Titanium)", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil vertical de 13.2\" HD (de serie)", competidor: "Pantalla táctil panorámica horizontal de 12.3\" con Apple CarPlay & Android Auto inalámbrico (de serie)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel digital LCD de 10.2\" (de serie)", competidor: "Pantalla digital de 7\" (Trend) | Cuadro de instrumentos 100% digital de 12.3\" (Titanium y Platinum FHEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico", geely: "Techo Panorámico corredizo (desde Exclusive)", competidor: "Techo Panorámico eléctrico de serie en todas las versiones (desde Trend)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Asientos y Climatización", geely: "Ecocuero con tela (Comfort) / Ecocuero eléctrico (Exclusive) / Calefacción y memoria (Signature)", competidor: "Cuero sintético con ajuste manual (Trend) / Asiento conductor eléctrico 10 vías con calefacción y refrigeración (desde Titanium)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Audio", geely: "8 parlantes (Signature)", competidor: "6 parlantes (Trend) | 8 parlantes con subwoofer (Titanium y Platinum FHEV)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "cityray|Volkswagen Taos": {
    titulo: "COMPARATIVO TÉCNICO Y DE EQUIPAMIENTO: GEELY CITYRAY vs. VOLKSWAGEN TAOS",
    competidorNombre: "Volkswagen Taos",
    fotoCompetidor: "images/comparador/volkswagen-taos.jpg",
    secciones: [
      {
        categoria: "1. DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Dimensiones (Largo × Ancho × Alto)", geely: "4,510 × 1,865 × 1,650 mm (Batalla: 2,701 mm)", competidor: "4,467 × 1,841 × 1,638 mm (Batalla: 2,689 mm)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Capacidad de Maletera", geely: "571 Litros (de serie)", competidor: "500 Litros de maletero", ventaja: "Cityray ofrece 571 L de maletera de serie, superando ampliamente el volumen de carga." },
          { label: "Despeje al Suelo / Tanque", geely: "200 mm despeje | Tanque de 51 L", competidor: "185 mm despeje | Tanque de 50 L", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      },
      {
        categoria: "2. TREN MOTRIZ Y CHASIS",
        filas: [
          { label: "Motor y Alimentación", geely: "1.5L Turbo Inyección Directa (1,499 cc)", competidor: "1.4L TSI Inyección Directa con Turbocompresor e Intercooler (1,395 cc)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Potencia Máxima", geely: "174 HP @ 5,500 rpm (de serie)", competidor: "150 HP (110 kW) @ 5,000 - 6,000 rpm (todas las versiones)", ventaja: "Cityray equipa motor 1.5L Turbo (174 HP / 290 Nm) de serie con caja 7DCT, ofreciendo mayor torque que motores atmosféricos de entrada rivales." },
          { label: "Torque Máximo", geely: "290 Nm @ 2,000 - 3,500 rpm", competidor: "250 Nm @ 1,400 - 3,500 rpm (todas las versiones)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Transmisión y Tracción", geely: "Automática Doble Embrague 7DCT | Tracción Delantera (2WD)", competidor: "Automática Tiptronic de 6 velocidades con levas al volante | Tracción Delantera", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Suspensión Trasera", geely: "Multi-link Independiente (de serie)", competidor: "Eje semi-independiente con barra de torsión (todas las versiones)", ventaja: "Cityray ofrece suspensión trasera independiente Multi-link de serie (mayor confort y estabilidad vs eje de torsión)." }
        ]
      },
      {
        categoria: "3. SEGURIDAD ACTIVA Y ASISTENCIAS ADAS",
        filas: [
          { label: "Sistemas ADAS Disponibles", geely: "ACC, AEB, LDW, LKA, ELKA, HWA, IHBC, BSD, RCTA", competidor: "IQ.DRIVE: Front Assist con Frenado Autónomo AEB, Control Crucero Adaptativo ACC con Stop & Go, Lane Assist (Mantenimiento Carril), Side Assist (Punto Ciego), Park Pilot", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Volkswagen Taos las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Disponibilidad ADAS por Versión", geely: "Paquete ADAS completo equipado desde versión intermedia EXCLUSIVE y SIGNATURE", competidor: "Front Assist (AEB) y ACC con Stop & Go de serie desde Trendline | Lane Assist (Carril) y Side Assist (Punto Ciego) SOLO en versión tope HIGHLINE", ventaja: "Cityray democratiza ADAS completas desde versión intermedia Exclusive, mientras que Volkswagen Taos las reserva para versiones tope o híbridas de mayor precio." },
          { label: "Airbags", geely: "6 Airbags (Frontales, Laterales, Cortina)", competidor: "6 Airbags de serie en todas las versiones (Calificación 5 Estrellas Latin NCAP)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Cámaras y Sensores", geely: "Cámara 540° HD con chasis transparente (desde Exclusive)", competidor: "Cámara de retroceso Rear View en todas las versiones | Sensores traseros (Trendline) / Sensores delanteros y traseros Park Pilot con frenado en maniobra (desde Comfortline). No equipa cámara 360°", ventaja: "Cityray equipa cámara 540° con chasis transparente desde versión intermedia Exclusive." }
        ]
      },
      {
        categoria: "4. EQUIPAMIENTO Y CONFORT INTERIOR",
        filas: [
          { label: "Pantalla Multimedia", geely: "Pantalla táctil vertical de 13.2\" HD (de serie)", competidor: "Sistema VW Play con pantalla táctil de 10\" semi-flotante con App-Connect inalámbrico (de serie en todas las versiones)", ventaja: "Cityray destaca con la pantalla táctil vertical HD de mayor tamaño en el segmento (13.2 pulgadas)." },
          { label: "Cuadro de Instrumentos", geely: "Panel digital LCD de 10.2\" (de serie)", competidor: "Digital Cockpit de 8\" (Trendline y Comfortline) | Digital Cockpit Pro de 10.25\" configurable (Solo en Highline)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Techo Panorámico", geely: "Techo Panorámico con apertura eléctrica (desde Exclusive)", competidor: "Sunroof panorámico con cortinilla eléctrica ÚNICAMENTE en versión tope HIGHLINE (Trendline y Comfortline no tienen techo)", ventaja: "Techo panorámico amplio con apertura eléctrica desde versión Exclusive." },
          { label: "Asientos y Tapicería", geely: "Ecocuero con tela (Comfort) / Ecocuero eléctrico (Exclusive) / Calefacción y memoria (Signature)", competidor: "Tela (Trendline) / Leatherette con inserciones (Comfortline) / Cuero perforado con ajuste eléctrico de 10 vías y ajuste lumbar (Highline)", ventaja: "Comparar relación costo-beneficio según versión requerida." },
          { label: "Climatización", geely: "Automático digital", competidor: "Aire acondicionado estándar (Trendline) / Climatronic Touch Bizona táctil (desde Comfortline)", ventaja: "Comparar relación costo-beneficio según versión requerida." }
        ]
      }
    ]
  },
  "coolray-lite|Changan CS35 Max": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Changan New CS35 Max 1.5",
    competidorNombre: "Changan CS35 Max",
    fotoCompetidor: "images/comparador/changan-cs35-max.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "1.5L Blue Whale / 1.5L Turbo Blue Whale (1,494 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "102 HP @ 6,000 rpm (MT) / 178 HP @ 6,000 rpm (1.5T AT)", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "145 Nm @ 4,000 rpm (MT) / 280 Nm @ 4,000 rpm (1.5T AT)", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 5MT / Automática 7DCT FWD", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (FWD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Comfort / Motion / Eco", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 5", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,580 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,860 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,620 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,715 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "175 mm aprox.", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "400 L aprox.", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "53 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,320 - 1,390 kg / 1,695 - 1,765 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Independiente Multi-link", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistida Eléctricamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "225/55 R18 (Aluminio) / 225/60 R17 (Acero)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal T125/80 R17 acero", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "LED automáticos ajustables en altura", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Luz trasera y freno LED", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED de montaje alto", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof eléctrico (según versión)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos, calefactables con desempañador y direccional", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (eléctricos en Flagship)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Apertura eléctrica (Flagship) / manual", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Spoiler con luz de freno", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil 12.3\" con Apple CarPlay & Android Auto", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital LCD 12.3\" (Inglés/Español)", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth / AM/FM", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "4 o 6 parlantes según versión", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (en versión Flagship)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "Tipo A y C delanteros y traseros", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Eco cuero (Tela en Core MT)", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Eléctrico 6 pos. (Flagship) / manual", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual 4 posiciones", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Automático con filtración PM0.1", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Forrado en eco cuero regulable en altura y profundidad", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (PEPS + Botón Start/Stop + Arranque a distancia)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico (EPB) + Auto Hold", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + BA)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP + TCS + ROM antivuelco)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HHC arranque + HDC descenso)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (TPMS pantalla/alarma)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Traseros (Radar ultrasónico 3)", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara reversa 360° + Chasis transparente / Cámara punto ciego der.", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero adaptativo (ACC) / Crucero constante (CC)", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "Sí (ACC a máxima velocidad en Flagship)", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "Sí (en versión Flagship)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No especificado", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "Cámara de punto ciego en espejo derecho", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km (Changan Derco)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Chery Tiggo 4": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Chery New Tiggo 4 1.5 Full",
    competidorNombre: "Chery Tiggo 4",
    fotoCompetidor: "images/comparador/chery-tiggo-4.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "1.5L 4 cil. en línea DOHC 16V MPFI DVVT (1,499 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "114 HP @ 6,150 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "143 Nm @ 4,000 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 5 vel. / Automática CVT + retroceso", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Eco / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,320 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,831 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,652 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,610 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "160 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "340 L - 1,100 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "51 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,340 kg / 1,701 - 1,747 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión semi-independiente", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistencia eléctrica (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "215/60 R17 (Aros de aleación 17\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "LED con regulador de altura y Follow Me Home", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED DRL + Neblineros posteriores", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED estilo tigre continuos", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí (Barras portaequipajes)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos con direccionales", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Manual", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Apertura a distancia e iluminada", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Doble salida decorativa", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil LCD 10.25\" con conexión inalámbrica", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital LCD con vista dinámica", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Chery Link Apple CarPlay & Android Auto inalámbrico", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "4 parlantes + 2 tweeters (6 total)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Portacelular antideslizante", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "2 USB Tipo A + 1 USB Tipo C", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Eco cuero premium", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Ajuste manual 6 direcciones", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Ajuste manual 4 direcciones", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado digital con salidas 2da fila", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Multifunción forrado en cuero reg. en altura con ctrl crucero", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Keyless Entry/Start + Encendido remoto de motor)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico (EPB) + AutoHold", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + EBA + BAS)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HAC arranque + HDC descenso)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (TPMS)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Sensores traseros", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso con líneas guía", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero integrado al volante", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km / Motor de por vida (Chery Astara)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Chevrolet Groove": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Chevrolet Groove 2026 RS (MT / Turbo CVT)",
    competidorNombre: "Chevrolet Groove",
    fotoCompetidor: "images/comparador/chevrolet-groove.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "1.5L MPI (1,485 cc) / 1.5L Turbo DOHC DVVT (1,451 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "98 HP (RS MT) / 149 HP (RS Turbo CVT)", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "143 Nm @ 3,400 rpm / 255 Nm @ 1,600 - 3,600 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 6MT / Automática CVT con modo Sport", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (FWD/4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Normal / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,365 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,800 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,610 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,550 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "175 mm aprox.", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "436 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "45 L (11.9 galones)", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,260 - 1,345 kg / 1,635 - 1,755 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente McPherson / Barra de torsión", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Semi-independiente con barra de torsión", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos hidráulicos / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistencia eléctrica progresiva (piñón y cremallera)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "215/55 R17 (Aros 17\" aluminio RS bitono)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "LED ajustables en altura con apagado retardado", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Neblineros delanteros y traseros", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED con luz direccional integrada", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof con apertura/cierre en consola superior", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí (Barras de techo ornamentales)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos calefactados, direccional y abatibles eléctricamente", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (plegado eléctrico)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Apertura electrónica remota táctil", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "Sí (con ajuste automático en Turbo CVT)", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Bumper bitono deportivo RS", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil de 10.25\" Full Color FHD", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Computador a bordo de 7\" Full Color FHD", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth / USB", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "6 parlantes", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "USB Tipo C carga rápida en consola + 12V", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Ecocuero con costuras rojas (Butacas Sport RS)", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Eléctrico de 6 posiciones", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual de 4 posiciones", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado digital", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Tapizado en ecocuero con costuras rojas y mandos de audio", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (PEPS Smart Key en conductor y maletero)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Mecánico (RS MT) / Electrónico (Turbo CVT)", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + Asistente de frenado inteligente)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (StabiliTrak)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí (TC)", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (Asistente de arranque en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (TPMS)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Sensores traseros", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de reversa con líneas guía estáticas y dinámicas", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí (ISOFIX + Top Tether)", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero adaptativo (Turbo CVT) / Estándar (MT)", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "Sí (en RS Turbo CVT con seguimiento frontal)", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "Sí (Alerta colisión frontal + asistente inteligente)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "Sí (Alerta y corrección de cambio de carril)", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "Detección de obstáculos y peatones delanteros", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km (Chevrolet Perú)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Hyundai Creta": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Hyundai New Creta 1.5",
    competidorNombre: "Hyundai Creta",
    fotoCompetidor: "images/comparador/hyundai-creta.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "Smartstream 1.5L MPI Gasolina (1,497 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "113 HP @ 6,300 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "144 Nm (14.7 kgf-m) @ 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 6MT / Automática IVT (CVT Inteligente)", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Eco / Normal / Sport (en versiones AT/IVT)", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,330 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,790 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,635 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,610 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "190 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "433 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "45 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,200 kg / 1,670 - 1,700 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "CTBA (Eje de torsión acoplado)", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistida Electrónicamente (MDPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "205/65 R16 (16\") / 215/60 R17 (17\" aleación)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Tamaño normal con aro de aleación", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "LED (Design Plus) / Halógenas de proyección", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED DRL + Sensor automático de luces", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED + Bombilla / LED completo", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof Panorámico (en Design Plus)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos color carrocería con direccionales", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (abatibles eléctricamente)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Manual con cobertor corredizo y luz", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil 8\" o 9\" con Apple CarPlay & Android Auto", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Supervision Cluster TFT LCD de 4.2\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth / USB", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "4 parlantes + 2 Tweeters (6 total)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (en versiones Design)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "2 USB delanteros + Toma 12V habitáculo y maletero", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Cuero automotriz (Design Plus) / Tela", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Eléctrico (Design Plus) / Manual regulable altura", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Climatizador automático / Manual", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Forrado en cuero reg. en altura y prof. con Paddle Shifters", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Smart Key botón de encendido)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico con Auto Hold (EPB)", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (Piloto, copiloto, laterales y cortinas)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESC)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HAC Asistente arranque en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (TPMS)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Sensores posteriores", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso con guías dinámicas", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero integrado", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "Sí (FCA Prevención colisión frontal en Design)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "Sí (LKA Mantenimiento de carril en Design)", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "Sí (BCA Prevención colisión punto ciego)", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "Sí (en versión Design Plus)", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km (Hyundai Gildemeister)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Jetour X50": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Jetour X50 (1.5 MT Confort / 1.5T 6DCT Limited)",
    competidorNombre: "Jetour X50",
    fotoCompetidor: "images/comparador/jetour-x50.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "1.5L DVVT (111 HP) / 1.5L Turbo DVVT E4T15C (145 HP) (1,498 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "111 HP @ 6,150 rpm / 145 HP @ 5,500 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "138 Nm @ 4,000 rpm / 210 Nm @ 1,750 - 4,000 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 5MT / Automática Doble Embrague 6DCT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Eco / Normal / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,397 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,841 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,654 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,601 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "180 mm aprox.", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "398 L - 1,262 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "45 L (12 galones)", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,310 - 1,380 kg / 1,690 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Independiente Multi-Link", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistencia eléctrica C-EPS (Confort / Sport)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "215/60 R17 (Confort) / 215/55 R18 (Limited)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "Halógenos (Confort) / LED (Limited) con nivelación eléctrica", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Luces direccionales LED", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED + Neblineros traseros LED", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof eléctrico (en versión Limited)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí (Barras longitudinales)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos con calefacción y luz direccional", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (automáticos en Limited)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Desbloqueo desde control remoto con cobertura", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Parrilla cascada y spoiler trasero LED", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil Smart de 10.25\"", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Computadora LCD 10.25\" con 2 temas", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth / USB", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "6 parlantes", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (40W en versión Limited)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "Delanteros (1 Tipo C + 1 Tipo A) + 2 Traseros Tipo A", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Cuero automotriz deportivo", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Eléctrico de 6 posiciones (Limited) / manual", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual deportivo", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Digital con filtro de polen CN95", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí (en 2da fila)", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "D-Shape forrado en cuero reg. en altura y prof. con ctrl crucero", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Keyless Entry + Smart Key botón + encendido remoto)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico (EPB) + AutoHold", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + BAS)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP + ARP Antivuelco)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HSA Asistente arranque en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (TPMS digital)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Sensores traseros", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara panorámica 360° + chasis transparente 180° (540°)", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí (en 2da fila)", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero integrado", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "Sí (LDWS Sistema de aviso de salida de carril)", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "Sí (BSD Aviso de puntos ciegos + DOW Puerta abierta)", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "Sí (RCTA Aviso de tráfico cruzado)", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km (Jetour Altos Andes)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Kia Seltos": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Kia New Seltos 1.5 (MT / CVT)",
    competidorNombre: "Kia Seltos",
    fotoCompetidor: "images/comparador/kia-seltos.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "Smartstream 1.5L MPI Gasolina (1,497 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "113 HP @ 6,300 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "144 Nm (14.7 kgf-m) @ 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 6MT / Automática CVT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (2WD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Normal, Eco y Sport (modos de terreno en CVT)", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,365 mm / 4,385 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,800 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,620 mm / 1,635 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,610 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "190 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "429 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "50 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,240 kg / 1,685 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente tipo McPherson con resorte", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Eje de torsión (Semi-independiente)", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados 15\" / Discos sólidos 14\"", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistida Electrónicamente (MDPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "205/65 R16 / 215/60 R17 (Aros de aleación)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Llanta de repuesto de tamaño completo", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "Halógenos con proyector / Faros LED según versión", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Encendido automático de luces", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED integrados continuos", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof panorámico (según versión)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí (Barras portaequipajes)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos con carcasas color carrocería", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (abatibles eléctricamente con direccionales)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Apertura manual con ganchos de red", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Doble salida decorativa", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil de 8\" o 10.25\" con Apple CarPlay & Android Auto", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Supervision Cluster digital LCD 4.2\" / 10.25\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "4 o 6 parlantes con tweeters", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (en versiones superiores)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "Tomas USB delanteras y Tipo C traseras de carga rápida", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Cuero automotriz / Tela premium", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Eléctrico / Regulador manual de altura", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual con bolsillos revisteros", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Climatizador automático dual / Manual", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí (ductos de salida posterior)", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Forrado en cuero reg. en altura y profundidad con mandos", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Smart Key con encendido por botón)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico con Auto Hold (EPB) / Palanca", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESC Control Electrónico de Estabilidad)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HAC Asistente en pendientes)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Delanteros y posteriores", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso con guías dinámicas", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero integrado al volante", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible en gama base", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "No disponible en ficha adjunta", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible en ficha adjunta", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible en ficha adjunta", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible en ficha adjunta", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "7 años o 150,000 km (Kia Perú)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Omoda C5": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Omoda C5 (1.5 Style / 1.5T Lux)",
    competidorNombre: "Omoda C5",
    fotoCompetidor: "images/comparador/omoda-c5.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "1.5L MPI (111 HP) / 1.5L Turbo DVVT (145 HP) (1,498 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "111 HP / 145 HP @ 5,500 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "138 Nm / 210 Nm @ 1,750 - 4,000 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Automática CVT de 9 velocidades con modo secuencial", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (FWD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Eco / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,400 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,830 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,588 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,630 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "170 mm aprox.", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "378 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "51 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,380 kg / 1,720 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "Independiente tipo McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión semi-independiente", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistida Eléctricamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "215/60 R17 (Aros de aleación 17\" bitono)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "Faros LED con follow-me-home", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED integrada de ancho completo", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Sunroof eléctrico (en versión Lux)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "No disponible (estilo coupé)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos con luces direccionales", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (abatibles eléctricamente en Lux)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Manual / Apertura remota", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Doble salida embellecedora y spoiler trasero", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Pantalla dual integrada LCD 20.5\" (2x 10.25\")", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital integrado 10.25\" HD", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Asistente de voz", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "6 parlantes Premium", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (50W en versión Lux)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "2 USB + Tipo C de carga rápida", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Ecocuero con tela de alta calidad", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Ajuste eléctrico de 6 posiciones / manual", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Manual de 4 posiciones", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Climatizador digital con encendido remoto de A/C", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Deportivo reg. en altura y prof. con mandos multimedia", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Smart Key con encendido remoto motor y A/C)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico (EPB) + Función AutoHold", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales delanteros + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + BAS Asistente de frenado)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HAC Asistente en pendientes)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí (Monitor de presión TPMS)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Delanteros y traseros (Lux) / Traseros (Style)", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de visión trasera con guías dinámicas", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero estándar", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km (Omoda Perú)", ventaja: "" }
        ]
      }
    ]
  },
  "coolray-lite|Toyota Yaris Cross": {
    titulo: "COMPARATIVO: Geely Coolray Lite 1.5 Exclusive vs Toyota New Yaris Cross 1.5 (MT / CVT)",
    competidorNombre: "Toyota Yaris Cross",
    fotoCompetidor: "images/comparador/toyota-yaris-cross.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas (1,499 cc)", competidor: "2NR-VE 1.5L 4 cil. Dual VVT-i (1,496 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "125 HP @ 6,300 rpm", competidor: "104.6 HP @ 6,000 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "152 Nm @ 4,000 - 5,000 rpm", competidor: "138 Nm (14.1 kgf-m) @ 4,200 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica 5MT / Automática CVT", competidor: "Mecánica 5MT / Automática CVT secuencial de 7 velocidades", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (2WD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Eco / Sport / Confort", competidor: "Eco, Normal, Power", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,330 mm", competidor: "4,310 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,800 mm", competidor: "1,770 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,609 mm", competidor: "1,615 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,600 mm", competidor: "2,620 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "180 mm aprox.", competidor: "210 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "330 L - 1,100 L aprox.", competidor: "471 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "42 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,290 kg / 1,670 kg aprox.", competidor: "1,140 kg / 1,600 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente tipo McPherson", competidor: "McPherson con barra estabilizadora", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión con barra estabilizadora", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Eléctricamente (EPS)", competidor: "Asistida Eléctricamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "215/65 R16 (Aros de aleación 16\")", competidor: "215/60 R17 o 215/55 R18 (Aleación)", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático", competidor: "LED con luces de posición y DRL", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Neblineros LED", ventaja: "" },
          { label: "Faros Traseros", geely: "LED combinados", competidor: "LED combinados", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "No disponible en versión Lite", competidor: "Techo panorámico (en versión Full D-Lux)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí", competidor: "Sí (Riel de techo)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con luz direccional", competidor: "Eléctricos con direccionales integradas", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible en versión Lite", competidor: "Sí (abatibles eléctricamente)", ventaja: "" },
          { label: "Maletera", geely: "Apertura manual", competidor: "Manual / Eléctrica con sensor de pie (D-Lux)", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Doble salida decorativa", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil HD de 8\"", competidor: "Táctil de 10.1\" con Apple CarPlay & Android Auto", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital TFT a color de 7\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Bluetooth / Toyota Connect", ventaja: "" },
          { label: "Parlantes", geely: "4 parlantes", competidor: "4 parlantes + 2 tweeters (6 total)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (en versión Full D-Lux)", ventaja: "" },
          { label: "Puertos USB", geely: "Delanteros y posteriores", competidor: "4 entradas USB (delanteras y posteriores)", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Tela estándar / Cuero automotriz", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 direcciones", competidor: "Ajuste manual (reclinable, deslizable, altura)", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 direcciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Climatizador automático digital", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "Sí", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Multifunción forrado en cuero con ctrl crucero", competidor: "Uretano / Cuero con controles de audio, Bluetooth y display", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Push Button Start + Cierre centralizado)", competidor: "Sí (Smart Entry + Botón de encendido)", ventaja: "" },
          { label: "Freno de Mano", geely: "Eléctrico (EPB) + Auto Hold", competidor: "Eléctrico (EPB) con función Auto Hold", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "6 (2 Frontales + 2 Laterales + 2 Cortina)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + HBA)", competidor: "Sí (ABS + EBD + BA)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (VSC Control de estabilidad)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (TCS)", competidor: "Sí (TRC)", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC arranque + HDC descenso)", competidor: "Sí (HAC Asistencia en pendientes)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (TPMS Indirecto)", competidor: "Sí", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros", competidor: "Sensores de proximidad posteriores", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar", competidor: "Control crucero integrado", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible en versiones a gasolina", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible", competidor: "No disponible en versiones a gasolina", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible en versiones a gasolina", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible en versiones a gasolina", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible en versiones a gasolina", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km / Renovable a 10 años (Toyota 10)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|JAC JS2": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs JAC JS2 1.5 Luxury (MT/CVT)",
    competidorNombre: "JAC JS2",
    fotoCompetidor: "images/comparador/jac-js2.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "1.5L Gasolina 4 cil. 16V VVT (1,499 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "111 HP @ 6,000 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "146 Nm @ 3,500 - 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica 5MT / Automática 6CVT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Estándar", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 5", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "4,135 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,750 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,568 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,490 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "> 120 mm (con carga completa)", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "450 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "42 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,185 - 1,200 kg / 1,560 - 1,575 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión semi-independiente", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistida Electrónicamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "205/55 R16 (Aros de aluminio 16\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Aro de fierro", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "Halógenos con encendido auto y reg. altura", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Neblineros del./tras.", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "Halógenos con tercera luz de freno", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "No disponible", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Barras transversales de techo)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Manual con cobertor", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil 9\" MP5 (o 10\" Android en Comfort)", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Analógico con display central", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes (2 del. + 2 tras.)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "Entrada USB delantera", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Eco-cuero (Tela en Comfort)", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado manual", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Forrado en eco-cuero con ctrl radio y reg. altura", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Llave con mando remoto (No botón)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "2 (Frontales piloto y copiloto)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD + HBA Hidráulico + BOS)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESC)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HAC Asistencia en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "No disponible", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores de retroceso acústicos", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Control crucero (CCS)", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "No disponible (BOS Asistente Inteligente)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km (JAC Derco)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Kia Sonet": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Kia New Sonet 1.5 (MT / CVT)",
    competidorNombre: "Kia Sonet",
    fotoCompetidor: "images/comparador/kia-sonet.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "Smartstream 1.5L MPI Gasolina (1,497 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "113 HP @ 6,300 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "144 Nm (14.7 kg-m) @ 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica de 6 vel. (6MT) / Automática CVT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (2WD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Normal, Eco y Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "4,110 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,790 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,610 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,500 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "205 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "374 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "45 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,200 kg / 1,580 - 1,600 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "McPherson con resorte delantero", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Eje de torsión (Semi-independiente)", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados 15\" / Discos sólidos 14\"", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistida Electrónicamente (MDPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "205/55 R16 (Aros de aleación 16\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Aro de fierro 15\"", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "Halógenos con silueta cromada y encendido auto", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "Halógenas / LED según versión", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "Tercera luz de freno", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Rieles en el techo)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos con carcasa color carrocería", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "Sí (abatibles eléctricamente con direccional)", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Manual con cobertor", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil 8\" (LX) / 10.25\" (EX Plus)", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Cluster digital LCD 4.2\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes + 2 Tweeters delanteros (6 total)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "Toma de corriente 12V + USB delantero", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Tela con Cuero", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Regulador manual de altura", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Manual con bolsillo revistero", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Manual (LX) / Climatizador automático (EX Plus)", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Forrado en cuero con ctrl crucero, audio y voz", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Smart Key con botón encendido (EX Plus) / Llave retráctil", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESC)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HAC pendientes + DBC descenso en cuestas)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "No especificado", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores posteriores", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Control crucero integrado en el volante", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "MCB (Multi-Collision Brake Asistente Post-Colisión)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "7 años o 150,000 km (Kia Perú)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Suzuki Fronx": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Suzuki New Fronx Smart Hybrid 1.5",
    competidorNombre: "Suzuki Fronx",
    fotoCompetidor: "images/comparador/suzuki-fronx.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "K15C DualJet 1.5L + Generador ISG Smart Hybrid (1,462 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "101.6 HP @ 6,000 rpm (ISG: +2.95 HP)", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "136.8 Nm @ 4,400 rpm (ISG: +55 Nm)", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica 5MT / Automática 6AT con Paddle Shift", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Híbrido autorrecargable inteligente (ISG)", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "3,995 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,765 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,550 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,520 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "170 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "304 L (hasta 1,009 L máxima)", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "37 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,035 - 1,065 kg / 1,480 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Tipo McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión con resortes", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Tambores traseros", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Piñón y cremallera asistida eléctricamente", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "195/60 R16 (Aros de aleación 16\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Temporal 195/60 R16", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "Faros LED con encendido automático", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "LED combinados integrados", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "No disponible", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Color negro o plata)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos con direccional integrada", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "Sí (abatibles eléctricamente)", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Manual con cobertor", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil 7\" (GL) / 9\" HD (GLX)", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Display a color 4.2\" + Head-Up Display (GLX)", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes + 2 tweeters (6 total en GLX)", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "Sí (en consola en versión GLX)", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "Delantero + 2 USB traseros de carga rápida", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Tela bitono de alta calidad", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Ajuste manual de altura", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Automático con ventilación trasera", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "Sí", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Forrado en cuero reg. altura y profundidad con Paddle Shift", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Sí (Keyless Start System + Botón)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "6 (2 Frontales + 2 Laterales + 2 Cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD + BAS)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (Hill Hold Control)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "No especificado", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores traseros", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara 360° (GLX) / Cámara de retroceso (GL)", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí (x2)", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Sí (integrado al volante)", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "3 años o 100,000 km (Suzuki Derco)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Toyota Raize": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Toyota Raize 1.2 (MT / CVT)",
    competidorNombre: "Toyota Raize",
    fotoCompetidor: "images/comparador/toyota-raize.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "WA-VE 1.2L 3 cilindros en línea, 12V DOHC Dual VVT-i (1,198 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "87.2 HP @ 6,000 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "113 Nm (11.5 kg-m) @ 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica de 5 vel. / Automática CVT con modo secuencial (7 vel.)", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (2WD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Modo Power (en volante CVT)", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "4,030 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,710 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,605 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,525 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "200 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "369 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "36 L (9.5 galones)", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "995 - 1,025 kg / 1,680 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Independiente McPherson con barra estabilizadora", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Barra de torsión con resortes", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Tambores posteriores", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistida Eléctricamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "205/65 R16 (Aros de aleación 16\") / 17\" según vers.", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "LED multirreflector con nivelador manual", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "LED combinados", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "No disponible", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "No disponible de fábrica", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos color carrocería", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "Sí (abatibles eléctricamente con luz direccional)", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Manual", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil de 8\"", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Estándar con display digital", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / AM/FM / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "Entrada USB delantera", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Tela estándar de alta durabilidad", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Ajuste manual (reclinable, deslizable, regulable altura)", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado manual", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Uretano con mandos de audio, llamadas y modo Power", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Llave con apertura a distancia (Arranque con llave)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "2 (Frontales piloto y copiloto)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD + BA)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (VSC Control de Estabilidad)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí (TRC)", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HAC Asistencia en pendientes)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "No especificado", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores delanteros y posteriores (según vers.)", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "No disponible", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km / Renovable a 10 años con Toyota 10", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Changan CS15": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Changan New CS15 1.5 (MT / DCT)",
    competidorNombre: "Changan CS15",
    fotoCompetidor: "images/comparador/changan-cs15.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "EA15 BlueCore 1.5L VVT Gasolina (1,480 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "95 HP @ 5,500 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "137 Nm @ 3,500 - 4,500 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica de 5 vel. / Automática Doble Embrague 5DCT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Normal / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "4,135 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,740 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,630 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,520 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "180 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "360 L aprox.", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "44 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,210 kg / 1,585 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Semi-independiente con muelles helicoidales", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistida Eléctricamente (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "205/50 R17 (Aleación 17\") / 205/55 R16", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Temporal 125/70 R16 aro de acero", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "LED (Luxury) / Halógenos con regulación de altura", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "Combinados con spoiler y tercera luz de freno", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "Sunroof panorámico / Sunroof eléctrico", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Barras de techo portaequipajes)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos con desempañador y luz direccional", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "Sí (abatibles eléctricamente)", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Apertura eléctrica con botón", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil de 10\" con Android Auto y Apple CarPlay", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital multifunción (consumo, odómetro, puertas)", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 o 6 parlantes según versión", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "3 USB: 1 Tipo A + 1 Tipo C del. / 1 Tipo C tras.", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Ecocuero automotriz (Tela en Confort)", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Ajuste eléctrico (Luxury) / manual 6 pos.", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Ajuste manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado digital", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Forrado en cuero con ctrl de audio y crucero", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Sí (Keyless Entry + Botón Start/Stop en Elite/Lux)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "4 (2 Frontales + 2 Laterales en asientos)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD + BA)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HHC Asistente arranque en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "Sí (Sistema TPMS)", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores de retroceso acústicos", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Control crucero integrado", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 150,000 km (Changan Derco)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Chery Tiggo 2 ProMax": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Chery Tiggo 2 Pro Max 1.5",
    competidorNombre: "Chery Tiggo 2 ProMax",
    fotoCompetidor: "images/comparador/chery-tiggo-2-promax.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "ACTECO 1.5L 4 cil. DOHC 16V DVVT (1,499 cc / 1,497 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "107 HP @ 6,000 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "140 - 143 Nm @ 3,000 - 4,000 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica de 5 vel. / Automática CVT (9 vel. simuladas)", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (4x2)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Eco / Sport", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "4,220 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,760 mm (1,860 mm según ficha gráfica)", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,570 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,555 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "165 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "420 L", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "50 L (13.2 galones)", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,260 kg / 1,650 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "Semi-independiente eje de torsión", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistencia eléctrica (EPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "205/55 R16 (Aros de aleación 16\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Temporal", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "Faros deportivos con regulador de altura", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED + Luces posteriores integradas", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "LED integrados de ancho completo", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "Sunroof eléctrico (según versión)", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Barras portaequipajes decorativas)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Eléctricos con luz direccional", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "Manual", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Apertura a distancia e iluminada", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Doble salida embellecedora", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil de 9\" LCD con Chery Link", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Digital LCD 3.5\" / 7\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "1 puerto USB delantero", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Ecocuero con tela", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Ajuste manual de 6 direcciones", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Ajuste manual de 4 direcciones", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado digital", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "D-Shape en ecocuero con mandos de audio y crucero", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Sí (Botón Start/Stop + Smart Key)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Mecánico convencional", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "4 (2 Frontales + 2 Laterales delanteros)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD + EBA + BOS)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESP)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HAC arranque + HDC descenso)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "Sí", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensores traseros", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso con líneas guía", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Control crucero integrado", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "No disponible", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km / Motor: De por vida (Chery Astara)", ventaja: "" }
        ]
      }
    ]
  },
  "gx3-pro|Hyundai Venue": {
    titulo: "COMPARATIVO: Geely New GX3 Pro 1.5 Exclusive vs Hyundai The All-New Venue 1.0 Turbo Comfort",
    competidorNombre: "Hyundai Venue",
    fotoCompetidor: "images/comparador/hyundai-venue.jpg",
    secciones: [
      {
        categoria: "MOTORIZACIÓN Y RENDIMIENTO",
        filas: [
          { label: "Motor", geely: "1.5L Gasolina 4 cilindros en línea, 16 válvulas DVVT (1,498 cc)", competidor: "Kappa 1.0 Turbo GDi 3 cil. 12V (998 cc)", ventaja: "" },
          { label: "Potencia Máxima", geely: "105 HP @ 6,000 rpm", competidor: "118 HP @ 6,000 rpm", ventaja: "" },
          { label: "Torque Máximo", geely: "137 Nm @ 4,000 - 5,000 rpm", competidor: "172 Nm (17.5 kg-m) @ 1,500 - 4,000 rpm", ventaja: "" },
          { label: "Transmisión", geely: "Mecánica de 5 vel. / Automática CVT (8 vel. simuladas)", competidor: "Mecánica 6MT / Automática Doble Embrague 7DCT", ventaja: "" },
          { label: "Tracción", geely: "Delantera (FWD)", competidor: "Delantera (2WD)", ventaja: "" },
          { label: "Modos de Conducción", geely: "Sport y Eco", competidor: "Normal / Eco / Sport (según versión)", ventaja: "" },
          { label: "Emisiones", geely: "Euro 6", competidor: "Euro 6", ventaja: "" }
        ]
      },
      {
        categoria: "DIMENSIONES Y CAPACIDADES",
        filas: [
          { label: "Largo (mm)", geely: "4,005 mm", competidor: "3,995 mm", ventaja: "" },
          { label: "Ancho (mm)", geely: "1,760 mm", competidor: "1,800 mm", ventaja: "" },
          { label: "Alto (mm)", geely: "1,575 mm", competidor: "1,650 mm", ventaja: "" },
          { label: "Distancia entre Ejes (mm)", geely: "2,480 mm", competidor: "2,520 mm", ventaja: "" },
          { label: "Distancia Libre al Suelo (mm)", geely: "185 mm", competidor: "190 mm", ventaja: "" },
          { label: "Capacidad Maletera (L)", geely: "400 L aprox.", competidor: "350 L (VDA)", ventaja: "" },
          { label: "Capacidad Tanque Combustible (L)", geely: "45 L", competidor: "45 L", ventaja: "" },
          { label: "Peso Neto / Bruto (kg)", geely: "1,215 kg / 1,590 kg aprox.", competidor: "1,220 kg / 1,630 - 1,660 kg", ventaja: "" }
        ]
      },
      {
        categoria: "CHASIS, RUEDAS Y MECÁNICA",
        filas: [
          { label: "Suspensión Delantera", geely: "Independiente McPherson", competidor: "Independiente McPherson", ventaja: "" },
          { label: "Suspensión Trasera", geely: "Barra de torsión semi-independiente", competidor: "CTBA (Eje de torsión acoplado)", ventaja: "" },
          { label: "Frenos Delanteros / Traseros", geely: "Discos ventilados / Discos sólidos", competidor: "Discos ventilados / Discos sólidos", ventaja: "" },
          { label: "Dirección", geely: "Asistida Electrónicamente (EPS)", competidor: "Asistida Electrónicamente (MDPS)", ventaja: "" },
          { label: "Neumáticos / Aros", geely: "205/60 R16 (Aros de aleación 16\")", competidor: "215/60 R16 (Aleación de aluminio 16\")", ventaja: "" },
          { label: "Neumático de Repuesto", geely: "Temporal de fierro", competidor: "Temporal de fierro (195/65 R15)", ventaja: "" }
        ]
      },
      {
        categoria: "EQUIPAMIENTO EXTERIOR",
        filas: [
          { label: "Faros Delanteros", geely: "Halógenos con encendido automático y reg. de altura", competidor: "Halógenas de proyección", ventaja: "" },
          { label: "Luces Diurnas (DRL)", geely: "LED", competidor: "LED", ventaja: "" },
          { label: "Faros Traseros", geely: "Combinados LED", competidor: "LED continuos horizontales", ventaja: "" },
          { label: "Techo Panorámico / Sunroof", geely: "Sunroof eléctrico", competidor: "No disponible en versión Comfort", ventaja: "" },
          { label: "Rieles de Techo", geely: "Sí (Roof Rack)", competidor: "Sí (Barras de techo / roof rack)", ventaja: "" },
          { label: "Espejos Exteriores", geely: "Eléctricos con calefacción (desempañador)", competidor: "Retrovisores exteriores eléctricos", ventaja: "" },
          { label: "Espejos Abatibles Eléctricamente", geely: "No disponible", competidor: "No disponible en ficha", ventaja: "" },
          { label: "Maletera", geely: "Apertura eléctrica manual con botón", competidor: "Manual", ventaja: "" },
          { label: "Sensor de Lluvia", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Salidas de Escape", geely: "Oculta", competidor: "Oculta", ventaja: "" }
        ]
      },
      {
        categoria: "INTERIOR, CONFORT Y TECNOLOGÍA",
        filas: [
          { label: "Pantalla Multimedia", geely: "Táctil LCD de 8\"", competidor: "Táctil de 10.25\" HD", ventaja: "" },
          { label: "Panel de Instrumentos", geely: "Digital LCD de 3.5\"", competidor: "Cluster de supervisión digital TFT 4.2\"", ventaja: "" },
          { label: "Conectividad", geely: "Apple CarPlay & Android Auto / Bluetooth", competidor: "Apple CarPlay & Android Auto inalámbrico / Bluetooth", ventaja: "" },
          { label: "Parlantes", geely: "6 parlantes", competidor: "4 parlantes", ventaja: "" },
          { label: "Cargador Inalámbrico", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Puertos USB", geely: "1era y 2da fila (USB Tipo A)", competidor: "2 USB Tipo C delanteros + 2 USB Tipo C traseros", ventaja: "" },
          { label: "Tapiz de Asientos", geely: "Ecocuero", competidor: "Acabado de tela de alta durabilidad", ventaja: "" },
          { label: "Asiento del Conductor", geely: "Ajuste manual de 6 posiciones", competidor: "Regulable en altura manual", ventaja: "" },
          { label: "Asiento del Copiloto", geely: "Ajuste manual de 4 posiciones", competidor: "Manual", ventaja: "" },
          { label: "Asientos Calefactables / Ventilados", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Climatizador / Aire Acondicionado", geely: "Aire acondicionado digital", competidor: "Aire acondicionado manual (Climatizador según vers.)", ventaja: "" },
          { label: "Salida A/C Posterior", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Volante", geely: "Ecocuero multifunción con control crucero y reg. altura", competidor: "Regulable en altura con mandos de audio y control crucero", ventaja: "" },
          { label: "Keyless Entry & Push Start", geely: "Sí (Keyless Entry + Encendido Start/Stop)", competidor: "Llave con mando a distancia (Encendido por llave)", ventaja: "" },
          { label: "Freno de Mano", geely: "Mecánico convencional", competidor: "Eléctrico con Auto Hold (EPB)", ventaja: "" }
        ]
      },
      {
        categoria: "SEGURIDAD ACTIVA Y PASIVA",
        filas: [
          { label: "Airbags", geely: "2 (Frontales piloto y copiloto)", competidor: "6 (Piloto, copiloto, laterales y cortina)", ventaja: "" },
          { label: "Frenos ABS + EBD + BA", geely: "Sí (ABS + EBD + EBA Asist. Frenado)", competidor: "Sí (ABS + EBD)", ventaja: "" },
          { label: "Control de Estabilidad (ESP)", geely: "Sí (ESC)", competidor: "Sí (ESC)", ventaja: "" },
          { label: "Control de Tracción (TCS)", geely: "Sí (VDC Control Dinámico)", competidor: "Sí", ventaja: "" },
          { label: "Asistente Pendientes (HAC/HDC)", geely: "Sí (HHC Asistente arranque en pendiente)", competidor: "Sí (HAC Asistente arranque en pendiente)", ventaja: "" },
          { label: "Monitoreo Presión Neumáticos (TPMS)", geely: "Sí (ITPMS Indirecto)", competidor: "Sí", ventaja: "" },
          { label: "Sensores de Estacionamiento", geely: "Sensores traseros de parqueo", competidor: "Sensor de estacionamiento trasero", ventaja: "" },
          { label: "Cámara", geely: "Cámara de retroceso con guías", competidor: "Cámara de retroceso con guías dinámicas", ventaja: "" },
          { label: "Anclajes ISOFIX", geely: "Sí", competidor: "Sí", ventaja: "" }
        ]
      },
      {
        categoria: "ASISTENCIAS A LA CONDUCCIÓN (ADAS)",
        filas: [
          { label: "Control Crucero", geely: "Control crucero estándar en el volante", competidor: "Control crucero inteligente / adaptativo (SCC)", ventaja: "" },
          { label: "Control Crucero Adaptativo (ACC)", geely: "No disponible", competidor: "Sí (SCC Smart Cruise Control)", ventaja: "" },
          { label: "Frenado Autónomo Emergencia (AEB)", geely: "No disponible (Incluye desbloqueo colisión)", competidor: "Sí (FCA Asistente anticolisión frontal)", ventaja: "" },
          { label: "Alerta / Mantenimiento de Carril (LDW/LKA)", geely: "No disponible", competidor: "Sí (LKA Mantención + LFA Seguimiento de carril)", ventaja: "" },
          { label: "Monitor Punto Ciego (BSD)", geely: "No disponible", competidor: "No disponible", ventaja: "" },
          { label: "Alerta Tráfico Cruzado Trasero (RCTA)", geely: "No disponible", competidor: "No disponible", ventaja: "" }
        ]
      },
      {
        categoria: "GARANTÍA Y POSTVENTA",
        filas: [
          { label: "Garantía Comercial", geely: "5 años o 150,000 km (Geely Perú)", competidor: "5 años o 100,000 km (Hyundai Gildemeister)", ventaja: "" }
        ]
      }
    ]
  }
};
