'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
    "produto": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto",
        required: 'O campo produto é obrigatório.'
    },
    "valor": {
        type: Number,
        required: 'Informe o valor do item'
    },
    "created": {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);