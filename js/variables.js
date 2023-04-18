let moneda = ""
let monto = 0
let cuotas = 0
let interes = 0
let totalInteres = 0.98
let prestamo = 0
let consulta = true
let interesGarantia = 0
let cotizacion = 0
let cuotaPrestamo = 0
let prestamoMasInteres = 0
const valorDolar = 385
const valorEuro = 400
const prestamos = []

class Prestamo {
    constructor(moneda, monto, prestamo, cuotaPrestamo, prestamoMasInteres) {
        this.moneda = moneda;  
        this.monto = monto;
        this.prestamo = prestamo;
        this.cuotaPrestamo = cuotaPrestamo;
        this.prestamoMasInteres = prestamoMasInteres;
    }
}