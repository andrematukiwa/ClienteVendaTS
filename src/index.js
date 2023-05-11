const express = require("express");
const app = express();
const rotas = require("./rotas");
require("configCliente/dbConfig");
require("configVenda/dbConfigVenda");
app.use(express.json());
app.use(rotas);




app.listen(8086,(req, res) =>{
    console.log("Servidor rodando");
}
);
