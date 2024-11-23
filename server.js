import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";
import routes from "./src/routes/postsroutes.js";

const app = express();
routes(app);

app.listen(3000, () =>{
    console.log("Servidor escutando...");
});




