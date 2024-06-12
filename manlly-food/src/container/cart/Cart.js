import React from 'react'
import { NavLink } from 'react-router-dom'
import { SlideShow } from '../../component/index'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, decrementQuantity, incrementQuantity } from '../../redux/action/AddCart'

import './cart.css'
const Cart = () => {
  const CartList = useSelector(state => state.AddCartReducers.cart)
  const totalPrice = CartList.reduce((totalPrice, item) => totalPrice + item.foodPrice * item.quantity, 0)
  const dispatch = useDispatch()
  const handleIncrement = (food) => {
    let action = incrementQuantity(food)
    dispatch(action)
  }
  const handleDecrement = (food) => {
    let action = decrementQuantity(food)
    dispatch(action)
  }

  const handleDelete = (food) => {
    let action = deleteFromCart(food)
    dispatch(action)
  }
  return (
    <section className='carts margin'>
      <SlideShow />
      <div className='container'>
        <div className='cart_form'>
          <p>Có <span>{CartList.length} sản phẩm</span> trong giỏ hàng của bạn</p>
          <div className='cart_table'>
            <div className='cart_table-head row'>
              <div className='col-5'>Sản phẩm</div>
              <div className='col-2'>Giá</div>
              <div className='col-2'>Số lượng</div>
              <div className='col-2'>Tổng</div>
              <div className='col-1'></div>
            </div>

            {CartList.map((item, index) => {
              return (
                <div className='cart_table-row row'>
                  <div className='col-5'>
                    <div className='image'>
                      <img src={item.foodImage} alt={item.foodName} />
                    </div>
                    <div className='info'>
                      <div className='title'><NavLink>{item.foodName}</NavLink></div>
                      <div className='brand'><NavLink>{item.foodType}</NavLink></div>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='price'>
                      <span>{item.foodPrice} đ</span>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='quantity'>
                      <input type="number" value={item.quantity} disabled />
                      <div className='quantity-icon'>
                        <i className="fa-solid fa-arrow-up" onClick={() => handleDecrement(item)}></i>
                        <i className="fa-solid fa-arrow-down" onClick={() => handleIncrement(item)}></i>
                      </div>
                    </div>
                  </div>
                  <div className='col-2'>
                    <div className='price'>
                      <span>{item.quantity * item.foodPrice} đ</span>
                    </div>
                  </div>
                  <div className='col-1'>
                    <div className='icon'>
                      <i className="fa-solid fa-trash" onClick={() => handleDelete(item)}></i>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className='cart_status'>
            <button className='button_view'><NavLink to='/menu'><i class="fa-solid fa-chevron-left"></i> Tiếp tục chọn món</NavLink></button>
            <button className='button_view'><NavLink>Cập nhật giỏ hàng <i class="fa-solid fa-rotate"></i></NavLink></button>
          </div>

          <div className='cart_total'>
            <div className='order-subtotal'>
              <div>Tổng tiền: <span>{totalPrice} đ</span></div>
              <div>Giảm giá :  <span>0 đ</span></div>
              <div>Tạm tính :  <span>{totalPrice} đ</span></div>
            </div>
            <button className='button_view'><NavLink to='/checkout'>Đặt hàng</NavLink></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart