import "reflect-metadata";
import express from "express";
import appRouter from "./src/routes/public";


const app = express();
app.use(express.json());
app.use(appRouter);

app.listen(3000, () => console.log("Servidor rodando."));