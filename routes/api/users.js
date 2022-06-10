// start with the users API
const User = require('../../db').User // this means importing the user class from db(database file)
const route = require('express').Router()

route.get('/' , (req , res) => {  // for get request
   // We want to send an array of all users
   // To see all the users which are buying the product
   // from our database here
    User.findAll()  // As we know how PromiseAPI works
        .then((users) => { // access to all the users.
              res.status(200).send(users)
        })
        .catch((err) => {
            // if then doesn't work out then catch works
            res.status(500).send({
                error : "could not retrive users"
            })
        })
})

route.post('/' , (req ,res) => {
    // Here Whenever a post request is sent in postman, a new user is created.
    //  We expect the request to hv name in it
    // We'll create a new user.
    // Id will Autoincrement but name came not be null as specified earlied in db.user while specifying the users class. 
    User.create({
        name :req.body.name // fetch it from req.body,name
    }).then((user) => {
        res.status(201).send(user) // we will send newly created user in response.
    }).catch((err) => {
        res.status(501).send({
            error : "Could Not add new user" // if there is any error bcoz of any reason.
        })
    })
})

exports = module.exports = route