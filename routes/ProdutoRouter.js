const ProdutoController = require('../Controllers/ProdutoController');
const express = require('express');
const router = express.Router();

router.get('/:idProduto', ProdutoController.getPorCodigo);
router.get('/', ProdutoController.getTotalProdutos);
router.post('/', ProdutoController.postProduto);
router.put('/:idProduto', ProdutoController.putProduto);
router.delete('/:idProduto', ProdutoController.deleteProduto);





module.exports = router;