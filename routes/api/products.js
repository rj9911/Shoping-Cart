const Product = require('../../db').Product
const route = require('express').Router();
// Error comes as ->
// require a middleware function but got nothing
// basically in server(server.js) we had required API, and API had required products and products didn't export the router(poiting to products.js file in routes) 

route.get('/' , (req , res) => {
    // get all products (Information about the Products)
    Product.findAll()
         .then((products) => {
             res.status(200).send(products)
         })
         .catch((err) =>{
             res.status(500).send({
                 error : "Could not retrieve products"
             })
         })
       
})

route.post('/' , (req ,res) => {
    // validate the values(we need to validate the price as it can be string but we have specified it to be the FloatValues)
    if (isNaN(req.body.price)) {   // if price is a string, Make sure that the price value is valid else there is no use of writing price in the database. 
        return res.status(403).send({   // return written here means after this other code will not be readed 
            error : "Price is not a valid number"
        })
    }

    // Add a new Product (Information to be added)
    Product.create({    // We go in db.js i.e database to see as what we add in the Product Specifications
        // id with be given automatically i.e autoincrement
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : parseFloat(req.body.price) // parseFloat is used as req.body.price is string and database will not accept it, as we have given there float. 
    }).then((product) => {
        res.status(201).send(product) // sended the product theat what we hv created
    }).catch((error) => {
        res.status(501).send({
            error : "Error adding product"
        })
    })

})

exports = module.exports = route