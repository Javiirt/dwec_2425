$(function () {

    interface Objeto {
        marca: string;
        modelo: string;
    }

    function funAjax(e: any) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.

        let marca = $('#marca').val();
        let modelo = $('#modelo').val();

        // Crear un objeto de tipo Objeto
        let objeto: Objeto = {
            marca: marca as string,
            modelo: modelo as string
        };


        //--------------------- Ajax Con Promesas --------------------------------------------------------

        // // Solicitud Fetch con Promesas
        // fetch('Ensayo_examen1_2Eva_25.php', {
        //     method: 'POST',
        //     body: JSON.stringify(objeto)
        // })
        // .then(response => response.json())
        // .then((json: Objeto) => {
        //     $('#datos').html(`<h1>El coche es un ${json.marca} ${json.modelo}</h1>`);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     $('#datos').html('<h1>Error en la solicitud (Ajax Con Promesas)</h1>');
        // });

        //-----------------------------------------------------------------------------------

        // ----------------------Ajax Con jQuery-------------------------------------------------

        // $.post('Ensayo_examen1_2Eva_25.php', { marca, modelo }, (data: Objeto) => {
        //     const mensaje = `<h1>El coche es un ${data.marca} ${data.modelo}</h1>`;
        //     $("#datos").html(mensaje);
        // }, 'json')
        // .fail(error => console.error('Error en jQuery $.post:', error));


        //---------------------------------------------------------------------------------------

        // -------------Enviando el formulario usando FormData-------------------------

        // //Crear un FormData a partir del formulario
        // let formData = document.getElementById('form1') as HTMLFormElement;

        // // Enviar la solicitud AJAX con FormData
        // $.ajax({
        //     url: 'Ensayo_examen1_2Eva_25.php',
        //     type: 'POST',
        //     data: formData,
        //     contentType: false,  // No establecer un contentType, ya que se maneja automáticamente con FormData
        //     processData: false,  // No procesar los datos, ya que están en el formato correcto de FormData
        //     success: function(response) {
        //         // Parsear la respuesta del servidor como JSON
        //         let jsonResponse =  JSON.parse(response) as Objeto;
        //         // Mostrar la respuesta del servidor
        //         $('#datos').html(`<h1>El coche es un ${jsonResponse.marca}  ${jsonResponse.modelo}</h1>`);
        //     },
        //     error: function() {
        //         // Si hay un error en la solicitud, mostrar un mensaje
        //         $('#datos').html('<h1>Error en la solicitud</h1>');
        //     }
        // });

        //----------------------------------------------------------------------------------

        // ----------------------Usando Async/Await-------------------------

        // async function postData() {
        //     try {
        //         let response = await fetch('Ensayo_examen1_2Eva_25.php', {

        //             method: 'POST',
        //             body: JSON.stringify(objeto)
        //         }
        //         );
        //         if (!response.ok) {
        //             throw new Error("Error en la respuesta del servidor");
        //         }
        //         let json = await response.json();
        //         $('#datos').html(`<h1>El coche es un ${json.marca} ${json.modelo}</h1>`);
        //     } catch (error) {
        //         console.error('Error:', error);
        //         $('#datos').html('<h1>Error en la solicitud (Async/Await)</h1>');
        //     }
        // }

        // postData();

        //----------------------------------------------------------------------------------

    }
    $('form').on('submit', funAjax);
})


