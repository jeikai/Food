import { Users } from '../model/index.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const getUsers = async (req, res, next) => {

}

const Login = async ({ userName, password }) => {

  // get users by username
  const user = await Users.findOne({ userName }).exec()
  // check if user is already
  if (user) {
    // check password is matches
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      let token = jwt.sign({
        data: user
      }, 
      process.env.JWT_SECRET,
      {
        expiresIn: '1 days'
      })


      return {...user.toObject(), password: '', token:token }

    } else {
      throw new Error('Invalid user name or password')
    }
  } else {
    throw new Error('Invalid user name or password')
  }
}

const Register = async ({ userName, password, fullName, phoneNumber, address}) => {
  const isMatch = await Users.findOne(
    {$or: [
      {userName},
      {phoneNumber},
    ]
  }).exec()

  if(isMatch) {
    // email is already
    throw new Error('username or phone number already')
  }else if (!isMatch) {
    const hashPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    const user = await Users.create({userName,password: hashPassword, fullName, phoneNumber, address})
    return user
  }else {
    return res.status(500).json({
      message: 'Can not register user'
    })
  }
}
export default {
  Login,
  Register
}


