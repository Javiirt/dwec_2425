// const express = require('express');
// const path = require('path');
// const client = require('./conexion.js'); // Importamos la conexión a MongoDB

// const app = express();
// const PORT = 3000;

// // Middleware para analizar JSON
// app.use(express.json());

// // Servir el archivo HTML en la raíz
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Obtener todos los usuarios desde la base de datos
// app.get('/usuarios', async (req, res) => {
//     try {
//         const db = client.db('miBaseDeDatos'); // Cambia "miBaseDeDatos" por el nombre real
//         const collection = db.collection('usuarios');
//         const usuarios = await collection.find({}).toArray();
//         res.json(usuarios);
//     } catch (error) {
//         res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
//     }
// });

// // Añadir un usuario a la base de datos
// app.post('/usuarios', async (req, res) => {
//     try {
//         const { nombre, apellido } = req.body;
//         const db = client.db('miBaseDeDatos'); // Cambia "miBaseDeDatos" por el nombre real
//         const collection = db.collection('usuarios');
//         await collection.insertOne({ nombre, apellido });
//         res.json({ mensaje: 'Usuario añadido' });
//     } catch (error) {
//         res.status(500).json({ mensaje: 'Error al añadir usuario', error });
//     }
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//     console.log(`Servidor en http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const uri = "mongodb+srv://javiirt:0Nj02WwXqL06Af9d@cluster0.cgbmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
const dbName = "Cluster0"; // Nombre de la base de datos
const collectionName = "usuarios"; // Nombre de la colección

// Función para conectar a MongoDB
async function connectDB() {
    await client.connect();
    console.log("✅ Conectado a MongoDB");
}
connectDB();

// Ruta para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const usuarios = await collection.find().toArray();
    res.json(usuarios);
});

// Ruta para añadir un usuario
app.post("/usuarios", async (req, res) => {
    const { nombre, apellido } = req.body;
    if (!nombre || !apellido) {
        return res.status(400).json({ error: "Nombre y apellido son requeridos" });
    }

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    await collection.insertOne({ nombre, apellido });

    res.json({ message: "Usuario añadido correctamente" });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});