'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProdutoSchema = new Schema({
    "descrição": {
        type: String,
        required: 'O campo descrição é obrigatório.'
    },
    "created": {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Produto', ProdutoSchema);