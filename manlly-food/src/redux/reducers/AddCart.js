const initSate = {
  cart: []
}

const addToCart = (state, food) => {
  return {...state, cart: state.cart.map(item => item._id === food._id ? {...item, quantity: item.quantity + 1} : item )}
}

const deleteFromCart = (state, food) => {
  return {...state, cart: state.cart.filter(item => item._id !== food._id)}
}

const AddCartReducers = (state = initSate, action) => {
  const food = action.payload
  switch (action.type) {
    case 'addToCart':
      const isExistAdd = state.cart.find(item => item._id === food._id)
      if (isExistAdd) {
        return addToCart(state, food)
      }else {
        food.quantity = 1
        return {...state, cart: [...state.cart, food]}
      }
    case 'deleteFromCart':
      return deleteFromCart(state, food)
    case 'decrementQuantity':
      let isExistdecre = state.cart.find(item => item._id === food._id)
      if (isExistdecre) {
        return addToCart(state, food)
      }
    case 'incrementQuantity':
      let isExistIncre = state.cart.find(item => item._id === food._id)
      if (isExistIncre.quantity === 1) {
        return deleteFromCart(state, food)
      }else {
        return {...state, cart: state.cart.map(item => item._id === food._id ? {...item, quantity: item.quantity - 1} : item)}
      }
    case 'clear_cart':
      // localStorage.removeItem('cart')
      return {...state, cart: []}
    default:
      return state
  }
}

export default AddCartReducers