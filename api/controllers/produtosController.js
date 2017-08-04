'use strict';

var mongoose = require('mongoose'),
    Produto = mongoose.model('Produto');

exports.list_produtos = function(req, res) {
    Produto.find({}, function(err, produtos) {
        if (err)
            res.send(err);

        res.json(produtos);
    });
};

exports.create_produto = function(req, res) {
    var new_produto = new Produto(req.body);
    new_produto.save(function(err, produto) {
        if (err)
            res.send(err);

        res.json(produto);
    });
};

exports.get_produto = function(req, res) {
    Produto.findById(req.params.id, function(err, produtos) {
        if (err)
            res.send(err);

        res.json(produtos);
    });
}

exports.update_produto = function(req, res) {
    Produto.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, produto) {
        if (err)
            res.send(err);
        res.json(produto);
    });
};

exports.delete_produto = function(req, res) {
    Produto.remove({_id: req.params.id}, function(err, produto) {
        if (err)
            res.send(err);

        res.json({"message": "Produto removido com sucesso"});
    });
}