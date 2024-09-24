let VF = 0; //El monto de la anualidad.
let A = 40000; //Pago periodico
let i = 18 / 100;  //Tasa de la anualidad
let n = 24; // Número de periodos de capitalización o de pago de anulidad.
let VA = 0; //Valor actual o presnete de la anualidad.

// console.log(calcutateVF(A, i, n))
// console.log(calculateVA(A, i, n))

function calcutateVF(A, i, n) {
    VF = parseInt(A) * ((Math.pow(1 + i, parseInt(n)) - 1) / i)
    return VF.toFixed(2)
}

function calculateVA(A, i, n) {
    VA = parseInt(A) * ((1 - Math.pow(1 + i, -parseInt(n))) / i)
    return VA.toFixed(2)
}
