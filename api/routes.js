'use strict';

module.exports = function(app) {

    var produtos = require('./controllers/produtosController');
    var pedidos = require('./controllers/pedidosController');

    app.route('/produtos')
        .get(produtos.list_produtos)
        .post(produtos.create_produto);

    app.route('/produtos/:id')
        .get(produtos.get_produto)
        .put(produtos.update_produto);
        // .delete(produtos.delete_produto);

    app.route('/pedidos')
        .get(pedidos.list_pedido)
        .post(pedidos.create_pedido);
    
    app.route('/pedidos/:id')
        .get(pedidos.get_pedido)
        .put(pedidos.update_pedido);
        // .delete(pedidos.delete_pedido)

}