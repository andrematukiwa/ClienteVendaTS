const express = require("express");
const rotas = express.Router();
const ClienteController = require("./controllersCliente/clienteController");
const VendaController = require("./controllersVenda/vendaController");


rotas.post('/cliente', ClienteController.create);
rotas.get('/cliente', ClienteController.read);
rotas.delete('/cliente/:id', ClienteController.delete);
rotas.post('/cliente/:id', ClienteController.update);
rotas.get('/cliente/:id', ClienteController.procura);

rotas.post('/venda', VendaController.create);
rotas.get('/venda', VendaController.read);
rotas.delete('/venda/:id', VendaController.delete);
rotas.post('/venda/:id', VendaController.update);
rotas.get('/venda/:id', VendaController.procura);


module.exports = rotas;
