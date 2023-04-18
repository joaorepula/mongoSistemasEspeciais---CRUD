const produtoModel = require('../models/produtoModel');
class ProdutoController {
    async postProduto(req, res) {
        let nome = req.body.nome; 
        let idProduto = req.body.idProduto; 
        let quantidade = req.body.quantidade; 
        let preco = req.body.preco; 
        let obj = {
            nome : "",
            idProduto: 0,
            quantidade: 0,
            preco : 0
        }

        if(isNaN(preco) || preco == 0) {
            return res.status(400).json({ error: 'O campo preco é obrigatório' });
        }
        if(isNaN(quantidade)) {
            return res.status(400).json({ error: 'O campo preco é obrigatório' });
        }       
         if(isNaN(idProduto) || idProduto == 0 ) {
            return res.status(400).json({ error: 'O campo idProduto é obrigatório' });
        }
        if(!nome || nome.lenght == 0) {
            return res.status(400).json({ error: 'O nome é obrigatório' });
        }

        let buscaId = await produtoModel.find({'idProduto': idProduto });
        if(buscaId.length > 0) { 
            if(idProduto == buscaId[0].idProduto){
                let max = await produtoModel.findOne({}).sort({ 'idProduto': -1 });
                res.status(400).json({ error: 'Esse Id já foi cadastrado, o ultimo ID a ser incrementado foi' + max.idProduto + "Verifique quais ID estão disponíveis"});
                }
            }else {
                obj.nome = nome;
                obj.idProduto = idProduto;
                obj.quantidade = quantidade;
                obj.preco = preco;
                let resultado = await produtoModel.create(obj);
                res.status(201).json(resultado);
            }
    }
    async getPorCodigo(req, res){
        let idProduto = req.params.idProduto; 

        if(isNaN(idProduto) || idProduto == 0 ) {
            return res.status(400).json({ error: 'O campo idProduto é obrigatório' });
        }
        let resultado = await produtoModel.find({'idProduto': idProduto });
        res.status(200).json(resultado);
    }
    async getTotalProdutos(req, res){
        let resultado = await produtoModel.find({});
        res.status(200).json(resultado);
    }   
    async putProduto(req, res){
        let idProduto = req.params.idProduto;
        let produto = {
            nome: req.body.nome,
            idProduto: req.body.idProduto,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            preco: req.body.preco
        };
        let _id = (await produtoModel.findOne({'idProduto':idProduto}))._id;
        await produtoModel.findByIdAndUpdate(String(_id), produto);
        res.send(_id);
    }
    async deleteProduto(req, res){
        let idProduto = req.params.idProduto;
        const _id = (await produtoModel.findOne({'idProduto':idProduto}))._id;
        await produtoModel.findByIdAndDelete(String(_id));
        res.send("Deletado com sucesso ")
    }
}
module.exports = new ProdutoController();