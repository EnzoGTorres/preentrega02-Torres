const eligeMoneda = "Ingresa la moneda de garantía \n" + "dolar \n" + "euro"

function elegirMoneda() {
    moneda = prompt(eligeMoneda).toLowerCase().trim()
    if (moneda !== "dolar" && moneda !== "euro") {
        alert("debes elegir una moneda de respaldo valida.")

    } else if (moneda === "dolar") {
        interes = 0.85
        interesGarantia = 1.08
        cotizacion = valorDolar
        calculoPrestamo(moneda, interes, interesGarantia, cotizacion);

    } else {
        interes = 0.88
        interesGarantia = 1.05
        cotizacion = valorEuro
        calculoPrestamo(moneda, interes, interesGarantia, cotizacion);
    }
}

function calculoPrestamo() {
    monto = prompt("elige el monto a depositar en :" + moneda);
    prestamo = prompt("Elige el monto del prestamo en pesos");
    cuotas = prompt("Elige la cantidad de cuotas");
    if (prestamo >= monto * cotizacion * interes) {
        alert(" No puedes pedir este monto en relacion a esa garantia.");
    } else {
        cuotaPrestamo = (((prestamo * (1 + parseFloat(interes / 12))) / cuotas));
        prestamoMasInteres = monto * interesGarantia
        alert(
            "El valor de la cuota a pagar es: " + cuotaPrestamo);
        alert(
            "se guardaran tus " +
            monto +
            " " +
            moneda +
            " recibiendo un total de: " +
            prestamoMasInteres +
            " al finalizar el ultimo pago"
        );
        const nuevoPrestamo = new Prestamo(moneda, monto, prestamo, cuotaPrestamo, prestamoMasInteres);
prestamos.push(nuevoPrestamo);
        console.log("Nuevo prestamo agregado: ", nuevoPrestamo);
        alert("Se ha creado un nuevo prestamo en " + moneda + " por un monto de " + prestamo + " pesos.");
    }
}

function consultarPrestamo() {
    elegirMoneda(); 
}

function agregarPrestamos() {
    let seguirAgregando = true;
    while (seguirAgregando) {
        consultarPrestamo();
        seguirAgregando = confirm("¿Desea agregar mas prestamos?");

        if (!seguirAgregando) {
            alert("¡Gracias por utilizar nuestro servicio de prestamos! ¡Hasta la proxima!");
            if (prestamos.length > 2) {
                prestamos.sort((a,b) => {
                    if(a.cuotaPrestamo < b.cuotaPrestamo){
                        return 1;
                    }
                    if(a.cuotaPrestamo > b.cuotaPrestamo){
                        return -1;
                    }
                    return 0;
                });
                console.table(prestamos);
            } else {
                console.table(prestamos);
            }
        }
    }
}
