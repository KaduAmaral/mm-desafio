var express = require('express'),
    port = process.env.PORT || 3000,
    app = express(),
    cors = require('cors'),
    mongoose = require('mongoose'),
    Produto = require('./models/produtoModel'),
    Pedido = require('./models/pedidoModel'),
    Item = require('./models/itemModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MMDesafioDB');

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes');

routes(app);

app.listen(port);

process.on('exit', function() {
    app.close();
})

console.log('Iniciado na porta '+port);