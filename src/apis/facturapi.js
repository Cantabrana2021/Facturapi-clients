const Facturapi = require("facturapi").default;

const facturapi = new Facturapi(
    "sk_test_B5oDV0NRv7pn3XGz18AQpbRG76OdyWA4QMxr8gaK2m"
);

async function createProduct(product){
    const facturapiProduct = {
        description: product.description,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function updateProduct(productId, updatedProduct) {
    const facturapiProduct = {
        description: updatedProduct.description,
        product_key: "50202306",
        price: updatedProduct.price
    };
    return await facturapi.products.update(productId, facturapiProduct);
}

async function deleteProduct(productId) {
    return await facturapi.products.del(productId);
}


module.exports = { createProduct, updateProduct, deleteProduct };
