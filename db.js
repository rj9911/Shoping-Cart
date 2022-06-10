// Sequelize framework of database is designed
const Sequelize = require('sequelize')

const db = new Sequelize('shopdb' , 'shopper', 'shoppass', {
    host : 'localhost',
    dialect : 'mysql', // What type of database you are using
    pool : {
        min : 0,  // min. connections are 0
        max : 5,   // max connections are 5. //max should be higher so that SQl process runs faster
    } // pool shows how many connections
})
// we will write in database now.
// user is a class
const User = db.define('user' ,{ // first thing is name of the class
   id : {
       type : Sequelize.INTEGER,     // this basically shows no. of columns//
       autoIncrement : true,
       primaryKey : true
    },
    name : {   // every user would have name
        type : Sequelize.STRING ,
        allowNull : false // which means name cannot be null
    }
})

const Product = db.define('products' ,{
    id : {                            // Products should have id like previous object user.
        type : Sequelize.INTEGER,     // this basically shows no. of columns//
        autoIncrement : true,
        primaryKey : true
     },
     name : Sequelize.STRING ,// product should have name defined
     // You can use this syntx of name as well as previous syntax of naming.
     manufacturer : Sequelize.STRING ,
     price :{
         type : Sequelize.FLOAT, // can also have number 
         allowNull : false,
         defaultValue : 0.0,
     }
})

db.sync()  // this is also a promise so we can write then,catch
  .then(() => console.log("Database has been synced"))
  .catch((err) => console.log("Error creating database"))
  
exports = module.exports ={
    User ,Product // We hv exported the Product and user class.
}

//We will start creating our API in routes Folder as api