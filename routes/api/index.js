//This is an API Folder 
const route = require('express').Router()

route.use('/products' , require('./products'))
route.use('/users' ,require('./users'))

exports = module.exports ={
    route // we'll export the route here
}