import mongoose, { Schema, ObjectId } from "mongoose"

const Users = mongoose.model('Users', new Schema({
  id: {
    type: ObjectId,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true
  })
)

export default Users