const mongoose = require('mongoose');


const Product = mongoose.model('Product');

module.exports = {

    //GET ALL PRODUCTS
    async index(request, response) {
        //const products = await Product.find();
        const { page = 1 } = request.query;
        const products = await Product.paginate({}, {page, limit: 10});

        return response.json(products);
    },


    //GET ONE PRODUCT BY ID
    async show(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },


    //CREATE NEW PRODUCT
    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    },


    //UPDATE PRODUCT
    async update(request, response) {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(product);
    },


    //DELETE PRODUCT
    async destroy(request, response) {
        await Product.findByIdAndRemove(request.params.id);

        return response.send();
    }

    
};