import mongoose from 'mongoose'
mongoose.set('strictQuery', true)

const connect = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('connect success');
    return connection

    
  }catch (e){
    const {code} = e
    if (code === 8000) {
      throw new Error('Wrong database\'s username or password')
    }else if (code === 'ENOTFOUND') { 
      throw new Error('Wrong server name or connection string')
    }
    throw new Error ('Could not connect to Mongo')
  }
}

export default connect
