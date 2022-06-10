// File made for add_products.html file
$(function () {

    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    // let btnProductAdd (You can do this also but we'll do directly)

    $('#btnProductAdd').click(function () {
        // When btn is clicked,now go to shop.js in the function AddProduct 
        addProduct( // this function called now goes to shop.js to add products
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct) {
                window.alert("Added " + addedProduct.name + " to Database")
            }
    )
        })
})