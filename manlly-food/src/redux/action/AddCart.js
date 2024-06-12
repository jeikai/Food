const addCart = (item) => {
  return {
    type: 'addToCart',
    payload: item
  }
}

const deleteFromCart = (item) => {
  return {
    type: 'deleteFromCart',
    payload: item
  }
}

const decrementQuantity = (item) => {
  return {
    type: 'decrementQuantity',
    payload: item
  }
}

const incrementQuantity = (item) => {
  return {
    type: 'incrementQuantity',
    payload: item
  }
}
export { addCart, deleteFromCart, decrementQuantity, incrementQuantity }