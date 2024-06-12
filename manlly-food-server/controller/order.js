import { orderRespository } from "../repositories/index.js"


const createOrder = async (req, res) => {
  try {
    // console.log(req.body)
    debugger
    const order = await orderRespository.newOrder(req.body)
    // debugger
    res.status(200).json({
      message: 'Order created successfully'
    })
  } catch (error) {
    res.status(404).json({
      message: error.toString()
    })
  }
}

const getOrderByUserId = async (req, res) => {
  try {
    const order = await orderRespository.getOrderByUserId(req.body)
    res.status(200).json({
      message: 'Success',
      data: order
    })
  } catch (error) {
    res.status(404).json({
      message: error.toString()
    })
  }
}


export default {createOrder, getOrderByUserId}