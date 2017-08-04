'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidoSchema = new Schema({
    "cliente": {
        type: String,
        required: 'O campo cliente é obrigatório.'
    },
    "itens": [{type: Schema.Types.ObjectId, ref: 'Item'}],
    "total": {
        type: Number,
        default: 0
    },
    "created": {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pedido', PedidoSchema);