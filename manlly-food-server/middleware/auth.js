import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.body.user = decoded.data._id
      next() 
    }catch(e) {
      res.status(401).json({
        message: 'Not authorized'
      })
    }
  }

}

export {auth}