// Function described in this file and used in index.js
// this dollar Function exists in the JQuery So include the jQuery
function fetchProducts(done) { // calback function
    $.get('/api/products', function(data) {
       done(data)   // Called the done function with data. and this function fetch all the data
    }) // we will send the get request here  this link and then we have callback function
 }

 function addProduct (name ,manuf ,price ,done) {
    $.post('/api/products' ,{  // post request go to this path and add this data
        name :name ,    
        manufacturer :manuf,
        price : price
    },function ( data) {  // then we have callback Function
        done(data)  // done function called
    })
 }
 
 function createProductCard (product){
     // whenever you do like ${p} you are creating a new element p 
     // made a function and product is given as object
     // made the ProductCard in downwards Format,the Format that is present in the $() will be made up. 
     return $(`    
     <div class="col-4 card mx-2 p-4"> 
   <h2 class="product-name">${product.name}</h2>
   <div class="product-manufacturer">${product.manufacturer}</div>
   <div class="row">
       <div class="col m-3 p-3">
          <b>${product.price}</b>
       </div> 
         
   <button class="col btn btn-primary m-3 p-1">Buy</button> 
               </div>
 </div>
     `)
 }