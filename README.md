#
Created the Frontend and Backend separately from each other , we use API and data is travelling in the form of JSON. We Submit the info. from frontend using JQuery using $.get and $.post requests which are basically the AJAX requests. And we Simply submit the data int the form of JSON from the frontend to the backend and the backend will also respond with data in the JSON to the frontend.
We will not be using Hbs here.
This Project is like you can run frontend on differnt computer and backend on different computer.
All the modern websites are made in this way only i.e Frontend and Backend are independent from each other and working is done by an API. There are certain URLs on which if you send requests, you will get the certain data but HTML files is not created by the Backend.

You can change the scripts part in the package.json file to start the server.

Go with the Documentation of Sequelize.

We'll use Sequelize library i.e we will not use sql anymore, Sequelize is object oriented interface which means here you make class and every object in the class will represent the row in the database. ORM not only exists in nodejs but exists in other platforms also. Object Relationer Mapper which means it maps with Object oriented programming to relation programming the way you write sQl Queries. 

We'll create the database file(db) separately.
install Sequelize -> npm i sequelize
& also install any one database that you hv -> npm i mysql2

After db.sync -> the database is created
check with these commands.
 -> use shopdb;
 -> show tables;
 -> describe users;
 -> describe products;  // to see the products table
 // now our Table is created
# For Users API
 Go to Postman
 -> when we send get request to this host http://localhost:2678/api/users we see an empty array bcoz now no users are present save this reQuest in our collection.
 -> Now send Post request to the same link only,with name kumar inside it in **body section** .Now an object is created with name,id inside that object and save it.
 -> Send another post request with name neha
 -> Now if you again sent a get request you see the all enteries while doing get request.
 This says you have two users now i.e kumar and neha.
 -> Make a similar thing with products.

 # Now for Products API :
   -> Go to Postman
   -> Start the server
   -> Send the get request to http://localhost:2678/api/products and got result as empty array which means not data is being added in the post request and no data is present for the product.
   -> if you see in the O/P of the terminal you see the SQL Query is been written there ,which happens by Product.findAll() SQl Query is written automatically by SeQuelize(SeQuelize runs this command for me).
   -> Add some Products details by post request by adding name & manufacturer,price and send the post request,you will see all the data in the object with id as autoincrement.
   -> If I pass price value as Rs. 65000 then gives a message that price is not valid as it should be float.
   -> If you now you send the get request you will see all the products that are added by post request.
   -> We are now able to add Products and retrieve Products, Similarly able to add users and retrieve users.

<<<<<<< HEAD
Now We Start Building our Frontend as our Backend part is done completely i.e Backend has a database, it can save users and can save Products, it can fetch those values and can add new values using postman tool.

# Frontend 
 -> Using Bootstrap Framework as CSS
    include both scripts i.e JS and CSS cdn links and also add jQuery and Popper links in public i.e html. Put jQuery and popper links before JS and CSS links.
 -> First will create the collection of fake product data then using our backened gives out the correct data.
 -> Created the card class inside each Product using Bootstrap for that Go that Bootstrap Website and search for card you will get it.\
 -> Same For padding and spacing seach in the Bootstrap website.You will get it.
 -> Now We'll connect the HTML file in public folder with JQuery Script that actually fetch the data from the backend and show it.
 -> The Website or Backend will work if starts from server i.e server.js.
 -> Add the JQuery and Bootstrap four links in the html file in public folder.

Now We Start Building our Frontend as our Backend part is done completely i.e Backend has a database, it can save users and can save Products, it can fetch those values and can add new values using postman tool. 

# Create a new Page to add Products
 -> add_products -> Add the Bootstrap and JQuery links in the new html file.
 -> Changed files as :
    shop_frontend.js to index.js
    make new file named as shop.js, include these files in the html file in public.

# How to Use ?
-> To add the product you have to go to localhost:2678/add_products.html
-> To see the changes in the Product list can be seen on the server directly. 
