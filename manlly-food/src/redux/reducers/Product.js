const ProductReducer = (state = {products : []}, action) => {
  switch (action.type) {
    case 'product_pending':
      return {loading: true, products: []}
    case 'product_success':
      return {loading: false, products: action.payload}
    case 'product_error':
      return {loading: false, error: action.payload, products: []}
    default:
      return state
  }
}

export default ProductReducer