"use strict";
class Cuadrado {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() { return this.a * this.b; }
    ;
}
class Rectangulo {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    area() { return this.a * this.b; }
    ;
}
let fig1 = new Cuadrado(3, 4);
//fig1.a=5; --- No se permite es de sólo lectura
console.log(fig1.area());
