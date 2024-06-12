import mongoose, { Schema, ObjectId } from 'mongoose'

const Food =  mongoose.model('Food', new Schema({
  id: {
    type: ObjectId
  },
  foodName: {
    type: String,
    required: true,
  },
  foodImage: {
    type: String,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  foodPrice: {
    type: Number,
    required: true,
    defaul: 0,
  },
  foodType: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
})
)
export default Food