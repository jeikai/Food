import express from 'express'
import { foodController } from '../controller/index.js'
const router = express.Router()

router.get('/', foodController.getAllFoods)

router.get('/:id', foodController.getFoodById)

router.post('/addNewFood', foodController.addNewFood)

router.post('/generateFakeFood', foodController.generateFakeFood)


export default router