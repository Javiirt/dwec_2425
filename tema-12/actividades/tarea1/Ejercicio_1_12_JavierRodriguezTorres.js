"use strict";
// Clase GrupoBot 
class GrupoBot {
    constructor() {
        this.contador = 0;
    }
    // Método para añadir un botón
    add() {
        this.contador++; // Incrementa el contador
        new Boton(this.contador); // Crea una nueva instancia de Boton
    }
    // Método para eliminar un botón
    rest() {
        if (this.contador > 0) {
            $(`#boton${this.contador}`).remove(); // Elimina el último botón basado en su ID
            this.contador--; // Decrementa el contador
        }
    }
}
// Clase para representar un botón
class Boton {
    constructor(numero) {
        // Crea un botón utilizando jQuery
        let $boton = $("<button>")
            .text(`${numero}`)
            .attr("id", `boton${numero}`)
            .on("click", () => {
            alert(`Hola desde ${numero}`);
        });
        $("body").append($boton); // Añade el botón
    }
}
$(document).ready(() => {
    let grupoBot = new GrupoBot(); // Crea un GrupoBot
    // Botón para añadir un nuevo botón
    let $btnAdd = $("<button>")
        .text("Añadir Botón")
        .on("click", () => grupoBot.add());
    // Botón para eliminar el último botón
    let $btnRemove = $("<button>")
        .text("Eliminar Botón")
        .on("click", () => grupoBot.rest());
    let $salto = $("<br>"); // Crea un salto de línea
    // Añade los botones de control al contenedor
    $("body").append($btnAdd, $btnRemove, $salto);
});
