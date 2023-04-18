const express = require('express');
const srv = express();
srv.use(express.json());
require('./db/mongo'); 
const produtoRouter = require('./routes/ProdutoRouter');
srv.use('/Produto', produtoRouter);


srv.listen(3000, function () {
    console.log('Servidor rodando na porta 3000!');
});