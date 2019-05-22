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
