import { createServer } from 'http';
import * as fs from 'fs';
createServer(function (req, res) {

    // // Escribe
    // fs.writeFile('prueba1.txt', 'Contenido….', function (err) {
    //     if (err) throw err;
    //     console.log('Creado!');
    // });

    // // Añade
    // fs.appendFile('prueba1.txt', '\n más contenido….', function (err) {
    //     if (err) throw err;
    //     console.log('Añadido!');
    // });

    // // Borra
    // fs.unlink('prueba1.txt', function (err) {
    //     if (err) throw err;
    //     console.log('Archivo borrado!');
    // });

    // // Renombra
    // fs.rename('prueba1.txt', 'prueba2.txt', function (err) {
    //     if (err) throw err;
    //     console.log('Archivo renombrado!');
    // });




}).listen(8080);