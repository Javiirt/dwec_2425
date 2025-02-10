"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Clase Artículos
class Articulos {
    //Constructor con controlador de eventos submit
    constructor() {
        //Leemos los artículos actuales
        this.getArticulos();
        //Cuando se envíe un formulario, añadimos el artículo 
        $('#f1').on('submit', (e) => {
            e.preventDefault();
            this.pushArticulos();
        });
    }
    // Método que que hace llamada con fetch
    pushArticulos() {
        return __awaiter(this, void 0, void 0, function* () {
            //Obtenemos el valor de las variables
            let cod = $('#cod').val();
            let color = $('#color').val();
            let piel = $('#piel').val();
            //LLamada fetch
            try {
                let response = yield fetch(`/pushArticulos?cod=${cod}&color=${color}&piel=${piel}`);
                let data = yield response.json();
                //Actualizamos la tabla
                this.updateTable(data);
            }
            catch (error) {
                console.error('Error al añadir el artículo');
            }
        });
    }
    // Método que muestra en la tabla los artículos añadidos
    getArticulos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch('/getArticulos');
                let data = yield response.json();
                //Actualizamos la tabla
                this.updateTable(data);
            }
            catch (error) {
                console.error('Error al recibir los artículos');
            }
        });
    }
    //Método que actualiza la tabla
    updateTable(articulos) {
        //Obtenemos los valores y vaciamos la tabla
        let tbody = $('#carteras');
        tbody.empty();
        //Imprimimos cada artículo en la tabla
        articulos.forEach(art => {
            tbody.append(`
                <tr>
                    <td>${art.id}</td>
                    <td>${art.cod}</td>
                    <td>${art.color}</td>
                    <td>${art.piel}</td>
                </tr>
            `);
        });
    }
}
