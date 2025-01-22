interface Figura {
    a: number;
    b: number;
    c?:number; // Opcional
    area (): number;
}
class Cuadrado implements Figura {
    readonly a: number; // De solo lectura
    b: number;
    constructor (a: number,b:number){
        this.a=a;
        this.b=b;
    }
    area (): number{return this.a*this.b};
}
class Rectangulo implements Figura {
    a: number;
    b: number;
    constructor (a: number,b:number){
        this.a=a;
        this.b=b;
    }
    area (): number{return this.a*this.b};
}
let fig1= new Cuadrado(3,4);
//fig1.a=5; --- No se permite es de sólo lectura
console.log(fig1.area());