import { usersRepository } from "../repositories/index.js"

const Login = async (req, res) => {
  try {

    const user = await usersRepository.Login(req.body)
    
    res.status(200).json ({
      message: "Login successful",
      data: user
    })
  }catch (e) {
    res.status(400).json({
      message: "Login failed: " + e.toString(),
    })
  }
}

const Register = async (req, res) => {
  try {
    const user = await usersRepository.Register(req.body)
    res.status(200).json({
      message: 'Successfully registered',
      data: user
    })

  }catch(e) {
    res.status(404).json({
      message: e.toString(),
    })
  }
}

export default {Login, Register}