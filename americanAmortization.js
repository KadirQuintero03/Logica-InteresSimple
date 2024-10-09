/*
Datos:
Importe (prestamo): 50000
Duracion (n): 6 meses 
Tasa de interes (TEA): 2% mensual
*/

let importe = 50000;
let duracion = 6; // meses
let tasaDeInteres = 2 / 100; // mensual

function generarTablaAmortizacion(importe, duracion, tasaDeInteres) {
    // Inicializar variables
    let saldoInicial = importe;
    let saldo = saldoInicial;
    let amortizacion = 0;
    let totalPagos = 0, totalInteres = 0, totalAmortizacion = 0;
    let tabla = [];

    // Iterar sobre cada periodo
    for (let periodo = 1; periodo <= duracion; periodo++) {
        let interes = saldoInicial * tasaDeInteres;

        // En el último periodo, la amortización será igual al saldo
        if (periodo === duracion) {
            amortizacion = saldo;
            saldo = 0;
        }

        let pagos = amortizacion + interes;

        // Acumular totales
        totalPagos += pagos;
        totalInteres += interes;
        totalAmortizacion += amortizacion;

        // Agregar fila a la tabla: [periodo, pagos, interes, amortizacion, saldo]
        tabla.push([periodo, pagos, interes, amortizacion, saldo]);
    }

    // Agregar fila de totales
    tabla.push([
        "TOTAL",
        totalPagos,
        totalInteres,
        totalAmortizacion,
        ""
    ]);

    return tabla;
}

console.table(generarTablaAmortizacion(importe, duracion, tasaDeInteres));