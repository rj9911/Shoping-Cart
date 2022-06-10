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

 Go to Postman
 -> when we send get request to this host http://localhost:2678/api/users we see an empty array bcoz now no users are present save this reQuest in our collection.
 -> Now send Post request to the same link only,with name kumar inside it in **body section** .Now an object is created with name,id inside that object and save it.
 -> Send another post request with name neha
 -> Now if you again sent a get request you see the all enteries while doing get request.
 This says you have two users now i.e kumar and neha.
 -> Make a similar thing with products.