// Dollar function is present in JQuery.
// Write all stuff in dollar function as it loads after the window is loaded.
$(function () {
    let productList = $('#product-list')
    
    // To do things when my page is loaded.
    fetchProducts(function (products) {
        productList.empty()
        for (let product of products){  // Traverse through all the products in the productList.
            productList.append( createProductCard ( product ))
        }
    })
})