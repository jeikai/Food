import express from 'express'
import { orderController } from '../controller/index.js'
import { auth, orderValidator } from '../middleware/index.js'
const router = express.Router()


router.post('/', auth, orderValidator, orderController.createOrder)
router.get('/', auth, orderController.getOrderByUserId)
export default router