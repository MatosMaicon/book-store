export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_CART',
    product
  };
}

export function removeProductToCart(id) {
  return {
    type: 'DEL_PRODUCT_CART',
    id
  };
}

export function removeAllProducts() {
  return {
    type: 'DEL_ALL_PRODUCTS'
  };
}
