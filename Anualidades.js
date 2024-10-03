let VP = 0; //Capital o valor presente de una anualidad.
let VF = 0; //Valor futuro o monto.
let R = 0; // Anualidad, cuota o renta periódica.
let N = 0 * 1; //Tiempo, periodo o plazo de anualidad.
let Y = 0 * 1; //Periodo de gracia.
let I = (0 / 100 / 1).toFixed(4); //Tasa de interés efectiva periódica.

/* ********** Anualidades vencidas **********
// console.log(AV_renta_teniendo_montoFinal(VF, I, N))
// console.log(AV_periodo_teniendo_montoFinal(VF, I, R))
// console.log(AV_calcular_valorPresente(R, I, N))
// console.log(AV_calcular_valorFuturo(R, I, N))
// console.log(AV_renta_teniendo_valorPresente(VP, I, N))
// console.log(AV_periodo_teniendo_valorPresente(VP, I, R))

//Hallar renta cuando tenemos el monto final.✅
function AV_renta_teniendo_montoFinal(VF, I, N) {
    R = parseInt(VF) / ((Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I))
    return console.log("El valor de la renta teniendo el mondo final es de: ", R.toFixed(2))
}

//Hallar numero de periodos cuando tenemos monto final.✅
function AV_periodo_teniendo_montoFinal(VF, I, R) {
    N = Math.log((parseInt(VF) * parseFloat(I)) / parseInt(R) + 1) / Math.log(1 + parseFloat(I))
    return console.log("El valor de numero de periodos teniendo el monto final es de: ", N.toFixed(2))
}

//Formula para calcular valor presente.✅
function AV_calcular_valorPresente(R, I, N) {
    console.log(R, I, N)
    VP = parseInt(R) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))) / parseFloat(I)
    return console.log("El valor presente de la anualidad es de: ", VP.toFixed(2))
}

//Formula para calcular el valor futuro.✅
function AV_calcular_valorFuturo(R, I, N) {
    VF = parseInt(R) * (Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I)
    return console.log("El valor futuro de la anualidad es de: ", VF.toFixed(2))
}

//Hallar renta cuando tenemos el valor presente.✅
function AV_renta_teniendo_valorPresente(VP, I, N) {
    R = (parseInt(VP) * parseFloat(I)) / (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))
    return console.log("El valor de la renta teniendo el valor presente es de: ", R.toFixed(2))
}

//Hallar numero de periodos cuando tenemos valor presente.✅
function AV_periodo_teniendo_valorPresente(VP, I, R) {
    N = Math.log(1 - (parseInt(VP) * parseFloat(I)) / parseInt(R)) / Math.log(1 + parseFloat(I))
    return console.log("El valor del numero de periodos teniendo el valor presente es de: ", N.toFixed(2))
}*/

/* ********** Anualidades diferida anticipada **********
// console.log(ADA_calcular_capitalInicial(R, I, N, Y))
// console.log(ADA_calcular_renta(VP, I, N, Y))
console.log(ADA_calcular_periodoGracia(VP, I, N, R))
// console.log(ADA_calcular_tiempo(VP, I, R, Y))

//Hallar el capital inicial.✅
function ADA_calcular_capitalInicial(R, I, N, Y) {
    VP = parseInt(R) * ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) / (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) * parseFloat(I)))
    return console.log("El capital inicial de la ADA es de: ", VP.toFixed(2))
}

//Hallar la renta.✅
function ADA_calcular_renta(VP, I, N, Y) {
    R = ((parseInt(VP) * parseFloat(I)) / (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) * (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) / 1)
    return console.log("El valor de la renta de la ADA es de: ", R.toFixed(2))
}

//Hallar el periodo de gracia.✅
function ADA_calcular_periodoGracia(VP, I, N, R) {
    Y = (Math.log(parseInt(R)) * (1 + parseFloat(I)) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))) - Math.log(parseInt(VP) * parseFloat(I))) / Math.log(1 + parseFloat(I))
    console.log("El periodo de gracia de la ADA es de: ", Y.toFixed(2))
}

//Hallar el tiempo.✅
function ADA_calcular_tiempo(VP, I, R, Y) {
    N = (Math.log(parseInt(R)) - Math.log(parseInt(R) - parseInt(VP) * (Math.pow(1 + parseFloat(I), parseInt(Y - 1)) * parseFloat(I)))) / Math.log(1 + parseFloat(I))
    console.log("El tiempo calculado en el ADA es de: ", N.toFixed(2))
}*/

/* ********** Anualidades diferida vencida **********
// console.log(ADV_calcular_capitalInicial(R, I, N, Y))
// console.log(ADV_calcular_renta(VP, I, N, Y))
// console.log(ADV_calcular_periodoGracia(VP, I, N, R))
// console.log(ADV_calcular_tiempo(VP, I, R, Y))

//Hallar el capital inicial.✅
function ADV_calcular_capitalInicial(R, I, N, Y) {
    VP = parseInt(R) * ((1 - Math.pow(1 + parseFloat(I), -parseInt(N))) / (Math.pow(1 + parseFloat(I), parseInt(Y)) * parseFloat(I)))
    return console.log("El capital inicial de la ADV es de: ", VP.toFixed(2))
}

//Hallar la renta.✅
function ADV_calcular_renta(VP, I, N, Y) {
    R = ((parseInt(VP) * parseFloat(I)) / (1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) * Math.pow(1 + parseFloat(I), parseInt(Y))
    return console.log("El valor de la renta de la ADV es de: ", R.toFixed(2))
}

//Hallar el periodo de gracia.✅
function ADV_calcular_periodoGracia(VP, I, N, R) {
    Y = ((Math.log(parseInt(R)) + Math.log(1 - Math.pow(1 + parseFloat(I), -parseInt(N)))) - Math.log(parseInt(VP) * parseFloat(I))) / Math.log(1 + parseFloat(I))
    console.log("El periodo de gracia de la ADV es de: ", Y.toFixed(2))
}

//Hallar el tiempo.✅
function ADV_calcular_tiempo(VP, I, R, Y) {
    N = (Math.log(parseInt(R)) - Math.log(parseInt(R) - parseInt(VP) * (Math.pow(1 + parseFloat(I), parseInt(Y)) * parseFloat(I)))) / Math.log(1 + parseFloat(I))
    console.log("El tiempo calculado en el ADV es de: ", N.toFixed(2))
}*/

/* ********** Anualidades Anticipada **********
// console.log(AA_renta_teniendo_montoFinal(VF, I, N))
// console.log(AA_periodo_teniendo_montoFinal(VF, I, R))
// console.log(AA_calcular_valorPresente(R, I, N))
// console.log(AA_calcular_valorFuturo(R, I, N))
// console.log(AA_renta_teniendo_valorPresente(VP, I, N))
// console.log(AA_periodo_teniendo_valorPresente(VP, I, R))

//Hallar renta cuando tenemos el monto final.✅
function AA_renta_teniendo_montoFinal(VF, I, N) {
    R = parseInt(VF) / ((Math.pow(1 + parseFloat(I), parseInt(N)) - 1) / parseFloat(I) * (1 + parseFloat(I)))
    return console.log("El valor de la renta teniendo el monto final es de: ", R.toFixed(2))
}

//Hallar numero de periodos cuando tenemos monto final.✅
function AA_periodo_teniendo_montoFinal(VF, I, R) {
    N = Math.log(((parseInt(VF) * parseFloat(I)) / (parseInt(R) * (1 + parseFloat(I)))) + 1) / Math.log(1 + parseFloat(I))
    return console.log("El numero de periodos teniendo el monto final es de: ", N.toFixed(2))
}

//Formula para calcular valor presente.✅
function AA_calcular_valorPresente(R, I, N) {
    VP = parseInt(R) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))) / parseFloat(I) * (1 + parseFloat(I))
    return console.log("El valor presente en la anualidad anticipada es de: ", VP.toFixed(2))
}

//Formula para calcular el valor futuro.✅
function AA_calcular_valorFuturo(R, I, N) {
    VP = parseInt(R) * (1 - Math.pow(1 + parseFloat(I), parseInt(N))) / parseFloat(I) * (1 + parseFloat(I))
    return console.log("El valor futuro en la anualidad anticipada es de: ", VF.toFixed(2))
}

//Hallar renta cuando tenemos el valor presente.✅
function AA_renta_teniendo_valorPresente(VP, I, N) {
    R = parseInt(VP) * parseFloat(I) / ((1 + parseFloat(I)) * (1 - Math.pow(1 + parseFloat(I), -parseInt(N))))
    return console.log("El valor de la renta teniendo el valor presente es de: ", R.toFixed(2))
}

//Hallar numero de periodos cuando tenemos valor presente.✅ 
function AA_periodo_teniendo_valorPresente(VP, I, R) {
    let N = 1 - Math.log(1 - (parseInt(VP) * parseFloat(I)) / parseInt(R) + parseFloat(I)) / Math.log(1 + parseFloat(I));
    return console.log("El numero de periodos teniendo el valor presente es de: ", N)
}*/