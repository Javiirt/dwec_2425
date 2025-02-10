//Interfaz Art 
interface Art {
    id: number;
    cod: string;
    color: string;
    piel: string;
}

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
    async pushArticulos() {

        //Obtenemos el valor de las variables
        let cod = $('#cod').val() as string;
        let color = $('#color').val() as string;
        let piel = $('#piel').val() as string;

        //LLamada fetch
        try {
            let response = await fetch(`/pushArticulos?cod=${cod}&color=${color}&piel=${piel}`);
            let data: Art[] = await response.json();

            //Actualizamos la tabla
            this.updateTable(data);

        } catch (error) {
            console.error('Error al añadir el artículo');
        }
    }

    // Método que muestra en la tabla los artículos añadidos
    async getArticulos() {
        try {
            let response = await fetch('/getArticulos');
            let data: Art[] = await response.json();

            //Actualizamos la tabla
            this.updateTable(data);

        } catch (error) {
            console.error('Error al recibir los artículos');
        }
    }



    //Método que actualiza la tabla
    updateTable(articulos: Art[]) {

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


