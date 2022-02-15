// Programado por: Luis Vanegas
import express from "express";
import cors from "cors";
import db from "./database/db.js";
import blogRoutes from './routes/routes.js';

const app = express();
app.use(cors('*'));
app.use(express.json());
app.use('/blogs', blogRoutes);

//conexion db

try {
    await db.authenticate;
    console.log('conexion exitosa a la DB....');
} catch (error) {
    console.log('Error', error);
}

app.get('/', (req, res) => {
    res.send('Hola mundo')
});

app.listen(8000, () => {
    console.log('server 8000');
})