// tarea1.js

import express from 'express';
import path from 'path';

// Crear una instancia de Express
const app = express();

// Servir el archivo index.html cuando se acceda a la ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'index.html'));
});

// Ruta para devolver el JSON con los datos
app.get('/pagAjax', (req, res) => {
  const data = {
    NOMBRE: 'Javier',
    APELLIDO: 'Rodríguez'
  };
  res.json(data); // Devolver el JSON como respuesta
});

// Servir archivos estáticos si es necesario
app.use(express.static('public'));

// Iniciar el servidor en el puerto 3000
app.listen(3000);
console.log('Escuchando en puerto 3000');
