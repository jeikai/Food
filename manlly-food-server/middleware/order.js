import { body, validationResult } from "express-validator"


const orderValidator = async (req, res, next) => {
  await body('shippingInfo.name').isLength({min: 5}).withMessage('Full name must be at least 5 characters long').run(req)
  await body('shippingInfo.phoneNumber').notEmpty().withMessage('This field must not empty').isLength(10).withMessage('phone must be 10 characters long').matches(/^[0-9]+$/).withMessage('phone just contains numbers').run(req)
  await body('shippingInfo.address').notEmpty().withMessage('This field is required').run(req)
  await body('shippingInfo.province').notEmpty().withMessage('This field is required').run(req)

  const errors = validationResult(req)
  if(!errors.isEmpty()){
    res.status(400).json({
      message: errors.array()
    })
  }else {
    next()
  }
}

export {orderValidator}