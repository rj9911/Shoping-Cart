const Product = require('../../db').Product
const route = require('express').Router();
// Error comes as ->
// require a middleware function but got nothing
// basically in server(server.js) we had required API, and API had required products and products didn't export the router(poiting to products.js file in routes) 

route.get('/' , (req. res) => {
    // get all products (Information about the Products)
})

route.post('/' , (req ,res) => {
    // Add a new Product (Information to be added)
})

exports = module.exports = route