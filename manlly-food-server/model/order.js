import mongoose, { Schema, ObjectId } from "mongoose"


const Order = mongoose.model('Order', new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Food'
      }
    }
  ],
  shippingInfo: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true,
      default: 'Hà Nội'
    },
    note: {
      type: String,
    }
  },
  shippingMethods: {
    type: String,
    required: true,
    default: 'giao hàng tận nơi'
  },
  shippingPrice: {
    type: Number,
    // required: false,
  },
  shippingStatus: {
    type: String,
    required: true,
    default: 'pending'
  }
},{
  timestamps: true
}))

export default Order