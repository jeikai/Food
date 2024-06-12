import Order from "../model/order.js"



const newOrder = async ({user, orderItems, shippingInfo, shippingMethods, shippingPrice}) => {
  try {
    // console.log(user)
    debugger
    const order = await Order.create({user, orderItems, shippingInfo, shippingMethods,shippingPrice})
    debugger
    return order
  } catch (error) {
    throw new Error(`Failed to order`)    
  }
}
const getOrderByUserId = async ({user}) => {
  try {
    const order = await Order.find({user: user})
    return order
  } catch (error) {
    throw new Error(`Failed to get order by user`)
  }
}

export default {newOrder, getOrderByUserId}