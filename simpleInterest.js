let UnidadesDeTiempo = {
  dias: 365,
  meses: 12,
  semestral: 2,
  trimestral: 4,
  cuatrimestral: 3,
  bimestral: 6,
  anual: 1,
};
let CapitalInicial = 0;
let TasaDeInteres = 0;
let MontoFuturo = 0;
let Interes = 0;
let UnidadDeTiempo = "";
let Tiempo = 0;
let tiempoDia = 0;
let tiempoMes = 0;
let tiempoAño = 0;

let TiempoMod = conversionTiempo(
  Tiempo,
  tiempoDia,
  tiempoMes,
  tiempoAño,
  UnidadDeTiempo
);

function conversionTiempo(
  Tiempo,
  tiempoDia,
  tiempoMes,
  tiempoAño,
  UnidadDeTiempo
) {
  //Conversion para tiempo especifico.
  if (tiempoDia !== 0 && tiempoMes !== 0 && tiempoAño !== 0 && Tiempo === 0) {
    console.log("If de tiempo especifico");

    if (UnidadDeTiempo === "dias") {
      return tiempoAño * 365 + tiempoMes * 30 + tiempoDia;
    }

    if (UnidadDeTiempo === "meses") {
      return tiempoAño * 12 + tiempoMes + tiempoDia / 30;
    }

    if (UnidadDeTiempo === "anual") {
      return tiempoAño + tiempoMes / 12 + tiempoDia / 365;
    }
  }

  //Conversion para periodo de tiempo.
  if (Tiempo !== 0 && tiempoDia === 0 && tiempoMes === 0 && tiempoAño === 0) {
    console.log("If de periodo de tiempo");

    if (UnidadDeTiempo === "dias") {
      return Tiempo / 365;
    }

    if (UnidadDeTiempo === "mensual") {
      return Tiempo / 12;
    }

    if (UnidadDeTiempo === "semestral") {
      return Tiempo / 2;
    }

    if (UnidadDeTiempo === "trimestral") {
      return Tiempo / 3;
    }

    if (UnidadDeTiempo === "cuatrimestral") {
      return Tiempo / 4;
    }

    if (UnidadDeTiempo === "bimestral") {
      return Tiempo / 6;
    }

    if (UnidadDeTiempo === "anual") {
      return Tiempo / 1;
    }
  }
}

TasaDeInteres = TasaDeInteres / 100;

// console.log(CalcularInteres(CapitalInicial, TasaDeInteres, TiempoMod, UnidadDeTiempo, MontoFuturo));
// console.log(CalcularCapitalInicial(TasaDeInteres, TiempoMod, Interes));
// console.log(CalcularTasaDeInteres(MontoFuturo, CapitalInicial, TiempoMod));
// console.log(CalcularTiempo(MontoFuturo, CapitalInicial, TasaDeInteres, UnidadDeTiempo));

function CalcularInteres(
  CapitalInicial,
  TasaDeInteres,
  TiempoMod,
  UnidadDeTiempo,
  MontoFuturo
) {
  if (
    tiempoDia != 0 &&
    tiempoAño != 0 &&
    tiempoMes != 0 &&
    UnidadDeTiempo == "anual"
  ) {
    Tiempo = tiempoDia + tiempoMes * 30;
    Tiempo = (Tiempo / 360 + tiempoAño).toFixed(2);
    return (Interes = CapitalInicial * TasaDeInteres * Tiempo);
  }

  //Calcular interes dado el capital inicial y monto futuro.
  if (CapitalInicial != 0 && MontoFuturo != 0) {
    Interes = MontoFuturo - CapitalInicial;
    return console.log("El interes simple es de: ", Interes);
  }

  //Calcular interes dado el capital inicial, tasa de interes y tiempo.
  if (TasaDeInteres != 0 && CapitalInicial != 0 && TiempoMod != 0) {
    Interes = CapitalInicial * TasaDeInteres * Tiempo;
    MontoFuturo = CapitalInicial + Interes;
    return console.log(
      "El interes simple es de: ",
      Interes,
      " Y el valor futuro es de: ",
      MontoFuturo
    );
  }
}

function CalcularCapitalInicial(TasaDeInteres, TiempoMod, Interes) {
  //Calcular el capital inicial dado el interes, tasa de interes y tiempo.
  if (
    Interes != 0 &&
    TiempoMod != 0 &&
    TasaDeInteres != 0 &&
    MontoFuturo == 0
  ) {
    CapitalInicial = Interes / (TasaDeInteres * TiempoMod);
    return console.log("El capital inicial es de: ", CapitalInicial);
  }

  //Calcular el capital inicial dado el Monto futuro, tasa de interes y tiempo.
  if (
    MontoFuturo != 0 &&
    TiempoMod != 0 &&
    TasaDeInteres != 0 &&
    Interes == 0
  ) {
    CapitalInicial = MontoFuturo / (1 + TiempoMod * TasaDeInteres);
    return console.log("El capital inicial es de: ", CapitalInicial);
  }

  //Calcular el capital inicial dado el interes y el monto futuro.
  if (Interes != 0 && MontoFuturo != 0 && TasaDeInteres == 0) {
    CapitalInicial = MontoFuturo - Interes;
    return console.log("El capital inicial es de: ", CapitalInicial);
  }
}

function CalcularTasaDeInteres(MontoFuturo, CapitalInicial, TiempoMod) {
  //Calcular la tasa de interes dado Capital inicial, monto futuro y tiempo.
  if (
    CapitalInicial != 0 &&
    MontoFuturo != 0 &&
    TiempoMod != 0 &&
    Interes == 0
  ) {
    //En esta condicion necesitamos el interes, así que lo calculamos.
    Interes = MontoFuturo - CapitalInicial;
    TasaDeInteres = (Interes / (CapitalInicial * TiempoMod)) * 100;
    return console.log("La tasa de interes es de: ", TasaDeInteres, "%");
  }

  //Calcular la tasa de interes dado el Capital inicial, Interes y tiempo.
  if (
    Interes != 0 &&
    TiempoMod != 0 &&
    CapitalInicial != 0 &&
    MontoFuturo == 0
  ) {
    MontoFuturo = CapitalInicial + Interes;
    TasaDeInteres = ((MontoFuturo / CapitalInicial - 1) / TiempoMod) * 100;
    return console.log("La tasa de interes es de: ", TasaDeInteres, "%");
  }
}

function CalcularTiempo(
  MontoFuturo,
  CapitalInicial,
  TasaDeInteres,
  UnidadDeTiempo
) {
  //Calculamos el tiempo dado el capital inicial, monto futuro y tasa de interes.
  if (
    MontoFuturo != 0 &&
    CapitalInicial != 0 &&
    TasaDeInteres != 0 &&
    Interes == 0
  ) {
    //Dado que necesitamos saber el interes para calcular el tiempo, lo sacamos usando el CI y el MF.
    Interes = MontoFuturo - CapitalInicial;
    Tiempo = Interes / (CapitalInicial * TasaDeInteres);
    return console.log("El tiempo es de: ", Tiempo);
  }

  //Calculamos el tiempo dado el Capital inicial, tasa de interes, interes y unidad de tiempo.
  if (
    CapitalInicial != 0 &&
    TasaDeInteres != 0 &&
    Interes != 0 &&
    UnidadDeTiempo != "" &&
    MontoFuturo == 0
  ) {
    Tiempo =
      (UnidadesDeTiempo[UnidadDeTiempo] * Interes) /
      (CapitalInicial * TasaDeInteres);
    return console.log("El tiempo es dee: ", Tiempo);
  }

  //Calculamos el tiempo dado el capital inicial, tasa de interes e interes.
  if (CapitalInicial != 0 && Interes != 0 && TasaDeInteres != 0) {
    MontoFuturo = CapitalInicial + Interes;
    Tiempo = (MontoFuturo / CapitalInicial - 1) / TasaDeInteres;
    return console.log("El tiempo es deee: ", Tiempo);
  }
}
