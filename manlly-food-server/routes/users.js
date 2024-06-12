import express from 'express'
import { usersController } from '../controller/index.js'


import { loginValidator, registerValidator } from '../middleware/index.js'

const router = express.Router()


router.get('/', function (req, res) {
  res.send('Get users')
})

router.post('/login',
  loginValidator,
  usersController.Login)

router.post('/register',
  registerValidator,
  usersController.Register)

export default router