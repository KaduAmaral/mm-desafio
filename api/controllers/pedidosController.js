'use strict';

var mongoose = require('mongoose'),
    Pedido = mongoose.model('Pedido'),
    Item = mongoose.model('Item');

exports.list_pedido = function(req, res) {
    Pedido.find({}).populate('itens').exec(function(err, pedidos) {
        if (err)
            res.send(err);

        res.json(pedidos);
    });
};

exports.create_pedido = function(req, res) {
    Item.insertMany(req.body.itens, function(error, docs) {
        if (error)
            res.send(error);

        var new_pedido = new Pedido({cliente:req.body.cliente});
        for(let i in docs) {
            new_pedido.itens.push(docs[i]._id);
            new_pedido.total += docs[i].valor;
        }
            

        new_pedido.save(function(err, pedido) {
            if (err)
                res.send(err);

            res.json(pedido);
        });

    });
};

exports.get_pedido = function(req, res) {
    Pedido.findById(req.params.id).populate('itens').exec(function(err, pedidos) {
        if (err)
            res.send(err);

        res.json(pedidos);
    });
}

exports.update_pedido = function(req, res) {
    Pedido.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, pedido) {
        if (err)
            res.send(err);

        req.body.itens.forEach(function(item) {
            Item.findByIdAndUpdate(item._id, item, {new: true}, function(err, _item) {
                if (err)   
                    console.log('Erro: ', err);
            });
        }, this);

        Pedido.findById(pedido._id).populate('itens').exec(function(err, _pedido) {
            _pedido.total = 0;
            _pedido.itens.forEach(function(_iten) {
                _pedido.total += _iten.valor;
            });
            _pedido.save(function(err, __pedido) {
                if (err)
                    res.send(err);

                res.json(__pedido);
            });
        });
    });
};

exports.delete_pedido = function(req, res) {
    Pedido.remove({_id: req.params.id}, function(err, pedido) {
        if (err)
            res.send(err);

        res.json({"message": "Pedido removido com sucesso"});
    });
}