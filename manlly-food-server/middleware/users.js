import { body, validationResult } from 'express-validator'


// middleware kiểm tra tính hợp lệ của password và sự tồn tại của người dùng
const loginValidator = async (req, res, next) => {

  await body('userName').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long').run(req)

  await body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).withMessage('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number').run(req)

  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() })
  }else {
    next()
  }
}

const registerValidator = async (req, res, next) => {
  debugger
  await body('userName').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long').run(req)
  await body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).withMessage('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number').run(req)
  body('confirmPassword').custom((value, {req} ) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match')
    }
    return true
  }).run(req)
  await body('fullName').isLength({min: 5}).withMessage('Full name must be at least 5 characters long').run(req)
  await body('phoneNumber').notEmpty().withMessage('This field must not empty').isLength(10).withMessage('phone must be 10 characters long').matches(/^[0-9]+$/).withMessage('phone just contains numbers').run(req)

  await body('address').notEmpty().withMessage('This field is required').run(req)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()
    })
  }else {
    next()
  }
}

export { loginValidator, registerValidator }