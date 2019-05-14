export function addProductToCart(product) {
  return {
    type: 'ADD_PRODUCT_CART',
    product
  };
}

export function removeProductToCart(product) {
  return {
    type: 'DEL_PRODUCT_CART',
    product
  };
}
