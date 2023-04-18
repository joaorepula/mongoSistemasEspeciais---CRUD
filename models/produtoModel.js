const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: String,
    idProduto:Number,
    produto: String,
    quantidade: Number,
    preco:Number
  });


module.exports = mongoose.model('Produto', produtoSchema);

