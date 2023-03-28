import express from "express";  
import pedidosRouter from "./routes/pedidos.js";
import { readFile, writeFile } from 'fs/promises';

const app = express();
app.use(express.json());

app.use("/pedido", pedidosRouter);

app.listen(3000, async () => {

    try {
        await readFile("pedidos.json");
        console.log("API Started!"); 
    } catch (error) {

        const initialJson = {
            nextId : 1,
            pedidos: []
        }

        try {
            writeFile("pedidos.json", JSON.stringify(initialJson))    
        } catch (error) {
            console.log(error); 
            
        }               
    }

});