const express = require('express')
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true})) // these two are included bcoz of get & post requests present in Api folder and then users.js API

app.use('/' , express.static(path.join(__dirname , 'public')))
app.use('/api' , require('./routes/api').route)
 // use that api in this server. 

app.listen(2678 , () => console.log('Server started'))

// when you start this server database is created ,when you do db.sync in db.jss , this will creates the database if any database is not created