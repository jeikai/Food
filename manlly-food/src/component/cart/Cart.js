import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteFromCart ,decrementQuantity ,incrementQuantity } from '../../redux/action/AddCart'
import { NavLink } from 'react-router-dom'
import './cart.css'

const Cart = ({ cart, setCart }) => {
  const CartList = useSelector(state => state.AddCartReducers.cart)
  const totalPrice = CartList.reduce((totalPrice, item) => totalPrice + item.foodPrice * item.quantity, 0)
  const dispatch = useDispatch()
  const handleCloseCart = () => setCart(!cart)
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
  console.log(CartList.length);
  return (
    <div className='cart'>
      <div className='cartClose' onClick={handleCloseCart}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <p>Giỏ hàng <span>{CartList.length}</span></p>
      <div className='cart_list'>

        {CartList.map((item, index) => {
          return (
            <div className='cart_item' key={index}>
              <div className='cart_item-image'>
                <img src={item.foodImage} alt='' />
              </div>
              <div className='cart_item-info'>
                <div className='cart_item-top'>
                  <div className='cart_item-top_title'>{item.foodName}</div>
                  <div className='cart_item-top_brand'>Coca</div>
                  <div className='cart_item-top_price'>{item.foodPrice}</div>
                </div>
                <div className='cart_item-button'>
                  <span onClick={() => handleIncrement(item)}>-</span>
                  <input type='number' min='1' value={item.quantity} disabled />
                  <span onClick={() => handleDecrement(item)}>+</span>
                  <i className="fa-solid fa-trash" onClick={() => handleDelete(item)}></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='cart_footer'>
        <div className='cart_footer-subtotal'>
          <div className='cart_footer-subtotal_line'>
            <div className='line-left'>Tổng tiền</div>
            <div className='line-right'>{totalPrice} đ</div>
          </div>

          <div className='cart_footer-subtotal_line'>
            <div className='line-left'>Giảm giá</div>
            <div className='line-right'>0 đ</div>
          </div>

          <div className='cart_footer-subtotal_line'>
            <div className='line-left'>Tạm tính</div>
            <div className='line-right'>{totalPrice} đ</div>
          </div>
        </div>
        <div className='cart_footer-button'>
          <button className='button_view' ><NavLink to='/cart'>Giỏ hàng</NavLink></button>
          <button className='button_view'><NavLink to= '/checkout'>Đặt hàng</NavLink></button>
        </div>
      </div>
    </div>
  )
}

export default Cart