const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    });

// Sem o require dir = require('./src/models/Product');
requireDir('./src/models');

// Variavel recebe o modelo do Produto 
// const Product = mongoose.model('Product');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(4004);