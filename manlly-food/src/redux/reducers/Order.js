
const OrderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'order_pending':
      return {loading: true}
    case 'order_success':
      return {loading: false, order: action.payload}
    case 'order_error':
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

export default OrderReducer