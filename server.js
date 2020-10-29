const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    
    };

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', mongooseOptions);

// Sem o require dir = require('./src/models/Product');
requireDir('./src/models');

// Variavel recebe o modelo do Produto 
// const Product = mongoose.model('Product');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(4004);