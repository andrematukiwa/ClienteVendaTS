const mongoose = require("mongoose");


const VendaModelSchema = new mongoose.Schema({
    Valor: Number,
    Marca: String,
    Quantidade: Number,
});


module.exports = mongoose.model("Venda", VendaModelSchema);