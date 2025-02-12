import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";
import { fileURLToPath } from "url";

// Configuración del servidor
const app = express();
const port = 3000;

// Obtener __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir el archivo index.html
app.use(express.static(__dirname));

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

// Ruta para servir `index.html`
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta para obtener todos los usuarios
app.get("/usuarios", async (req, res) => {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const usuarios = await collection.find().toArray();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
});

// Ruta para añadir un usuario
app.post("/usuarios", async (req, res) => {
    try {
        const { nombre, apellido } = req.body;
        if (!nombre || !apellido) {
            return res.status(400).json({ error: "Nombre y apellido son requeridos" });
        }

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        await collection.insertOne({ nombre, apellido });

        res.json({ message: "Usuario añadido correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al añadir usuario" });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
