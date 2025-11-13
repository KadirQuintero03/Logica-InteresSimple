# Lógica y Cálculos de Interés Simple, Rentas y Amortizaciones

## Descripción general
Este repositorio contiene un conjunto de utilidades en JavaScript para realizar cálculos financieros básicos y comunes: interés simple, rentas (annuities) y cronogramas de amortización bajo diferentes métodos (americano, francés y alemán). Está pensado como una librería ligera para uso educativo, prototipos y demostraciones de fórmulas financieras.

El objetivo es ofrecer funciones reutilizables y fáciles de entender para:
- Calcular interés simple (interés, monto, capital, tasa, tiempo).
- Resolver problemas de rentas: valor presente, valor futuro y cuota periódica.
- Generar cronogramas de amortización usando métodos americano, francés y alemán.

---

## ¿Qué hace y qué funciones cumple?
- Calcula componentes de interés simple y monto acumulado.
- Calcula parámetros de rentas (annuities): pago desde valor presente, valor futuro desde pagos periódicos, etc.
- Genera cronogramas detallados de amortización:
  - Sistema francés (cuota fija): cuota constante; interés y amortización cambian por periodo.
  - Sistema alemán (amortización constante): amortización del capital constante; cuotas decrecientes.
  - Sistema americano: pagos periódicos de sólo interés y amortización total al final (pago de globo).

Cada módulo devuelve valores numéricos y, cuando corresponde, listas con el detalle por periodo (período, cuota, interés, amortización, saldo).

---

## Estructura del repositorio
Archivos principales (según contenido actual):

- `README.md` — Documento explicativo (este archivo).
- `simpleInterest.js` — Módulo con funciones de interés simple.
- `annuities.js` — Módulo con funciones para rentas (annuities).
- `americanAmortization.js` — Generador de cronograma para amortización americana.
- `frenchAmortization  .js` — Generador de cronograma para amortización francesa. (Nota: el nombre del archivo contiene espacios; es recomendable renombrarlo a `frenchAmortization.js`).
- `germanAmortization.js` — Generador de cronograma para amortización alemana.

---

## Requisitos e instalación
Requisitos:
- Node.js (versión LTS recomendada).

Pasos para usar localmente:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/KadirQuintero03/Logica-InteresSimple.git
   cd Logica-InteresSimple
   ```
2. Los módulos están en JavaScript puro; no se requiere npm install salvo que añadas dependencias.

---

## Uso y ejemplos
Los ejemplos de abajo suponen que los módulos exportan funciones típicas. Ajusta los nombres según las exportaciones reales en cada archivo.

### Interés simple
Calcular interés y monto:
```javascript
const simpleInterest = require('./simpleInterest');

// Supuestos: funciones comunes
const principal = 1000;
const rate = 0.05; // 5% por periodo (decimal)
const time = 2; // número de periodos

const interest = simpleInterest.calculateInterest(principal, rate, time);
const amount = simpleInterest.calculateAmount(principal, rate, time);

console.log({ interest, amount });
// Ejemplo esperado: { interest: 100, amount: 1100 }
```

### Rentas (annuities)
Calcular cuota periódica desde valor presente:
```javascript
const annuities = require('./annuities');

const presentValue = 10000;
const ratePerPeriod = 0.01; // 1% por periodo
const periods = 36;

const payment = annuities.paymentFromPresentValue(presentValue, ratePerPeriod, periods);
console.log('Cuota periódica:', payment);
```

Calcular valor futuro desde pagos periódicos:
```javascript
const futureValue = annuities.futureValueFromPayment(payment, ratePerPeriod, periods);
console.log('Valor futuro:', futureValue);
```

### Amortización — Sistema francés (cuota fija)
Generar cronograma:
```javascript
const french = require('./frenchAmortization.js');

const loan = 10000;
const interestRate = 0.01; // por periodo
const periods = 12;

const schedule = french.generateSchedule(loan, interestRate, periods);
console.table(schedule);
// Cada elemento: { period, payment, interest, amortization, balance }
```

### Amortización — Sistemas alemán y americano
- `germanAmortization.js` -> `generateSchedule(loan, rate, periods)` que devuelve amortización constante del capital.
- `americanAmortization.js` -> `generateSchedule(loan, rate, periods)` que devuelve pagos periódicos de interés y pago del capital al final.

---

## Convenciones y API esperada
Estas son las convenciones habituales usadas por los módulos del repositorio (ajusta según exportaciones reales):

Entradas comunes:
- principal / loan / capital: número > 0.
- rate / interestRate: tasa por periodo (decimal); por ejemplo 0.05 = 5%.
- time / periods / n: número de periodos (entero).
- payment / cuota: monto por periodo.

Salidas comunes:
- números (interés total, monto final).
- objetos con propiedades descriptivas.
- arrays con cronogramas: cada elemento normalmente incluye period, payment, interest, amortization, balance.

---

## Ejemplo de cronograma (formato de salida)
```json
[
  { "period": 1, "payment": 879.16, "interest": 100.00, "amortization": 779.16, "balance": 9220.84 },
  { "period": 2, "payment": 879.16, "interest": 92.21, "amortization": 786.95, "balance": 8433.89 }
]
```
(Ejemplo tipo francés; las cifras son ilustrativas).

---

## Casos de uso típicos
- Comparar el costo total de un préstamo usando distinto método de amortización.
- Enseñanza de descomposición de pagos entre interés y capital.
- Integrar cálculos financieros ligeros en aplicaciones web o prototipos.
- Generar cronogramas para presentaciones o reportes.

---

## Buenas prácticas
- Normaliza la tasa al periodo correcto: si la tasa es anual y los pagos son mensuales, divide la tasa anual entre 12 y multiplica el tiempo en años por 12.
- Redondea para presentación (2 decimales), pero conserva más precisión en cálculos intermedios.
- Valida entradas: evita tasas negativas, capital ≤ 0 o periodos no enteros.
- Renombra archivos con espacios (p. ej. `frenchAmortization  .js`) para evitar errores al importar.

---

## Contribuir
Si quieres mejorar este repositorio:
1. Abre un issue describiendo el cambio o la mejora.
2. Haz fork y crea una rama para tu feature o fix.
3. Envía un pull request con descripción y ejemplos.

Ideas de mejoras:
- Añadir pruebas unitarias (jest, mocha).
- Documentación de la API con ejemplos concretos de las funciones exportadas.
- Publicar el paquete en npm con control de versiones.
- Normalizar nombres de archivos y estructura del proyecto.

---

## Licencia
Añade un archivo `LICENSE` con la licencia que prefieras (ej. MIT) para clarificar los términos de uso y contribución. Si no hay licencia, el código por defecto no está autorizado para uso público más allá de lo permitido por la plataforma.

---

## Notas finales
Este README está pensado para ser completo y aplicable sobre la estructura actual del repositorio. Ajusta los nombres de funciones y ejemplos exactamente a las exportaciones de cada archivo JavaScript. Si quieres, puedo:
- Extraer automáticamente las funciones exportadas de cada archivo y actualizar los ejemplos del README para que coincidan exactamente con la API del código.
- Preparar un PR que reemplace el README actual por este contenido y renombre el archivo `frenchAmortization  .js` si lo deseas.
