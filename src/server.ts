import "dotenv/config";
import "reflect-metadata";
import { app } from "./app.js";
import { AppDataSource } from "./shared/database/data-source.js";

const PORT = process.env.PORT;

async function setupApplication() {
  try {
    await AppDataSource.initialize();
    console.log("Banco conectado");
    app.listen(PORT, ()=>{
      console.log("Servidor rodando")
    })
  } catch (error) {
    console.error(`Erro ao conectar no banco: ${error}`);
  }
}
await setupApplication();