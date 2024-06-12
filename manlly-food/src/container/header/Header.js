import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Cart } from '../../component'
import { logout } from '../../redux/action/User'
import logo from './../../assets/logo.png'

import './header.css'
function Header() {

  const [cart, setCart] = useState(false)
  const [search, setSearch] = useState(false)
  const [nav, setNav] = useState(true)
  const dispatch = useDispatch()
  const handleViewCart = () => setCart(!cart)
  const handleViewSearch = () => setSearch(!search)

  const CartList = useSelector(state => state.AddCartReducers.cart)
  const user = useSelector(state => state.LoginReducer.userInfo)
  const Search = () => {
    return (
      <div className='header_search'>
        <form>
          <input type="text" name='search' placeholder='Tìm kiếm' />
        </form>
      </div>
    );
  }
  const handleLogOut = () => {
    dispatch(logout());
  }
  return (
    <header>
      <div className='container'>
        <div className='header_left'>

          <NavLink to='/'><img src={logo} alt='' /></NavLink>
        </div>
        <div className='header_right'>
          
          <ul className={nav ? 'nav goRight' : 'nav active'}>
            <li onClick={() => setNav(!nav)}><NavLink to='/'>TRANG CHỦ</NavLink></li>
            <li onClick={() => setNav(!nav)}><NavLink to='/introduction'>GIỚI THIỆU</NavLink></li>
            <li onClick={() => setNav(!nav)}><NavLink to='/restaurant'>NHÀ HÀNG</NavLink></li>
            <li onClick={() => setNav(!nav)}><NavLink to='/menu'>THỰC ĐƠN</NavLink></li>
            <li onClick={() => setNav(!nav)}><NavLink to='/blog'>BLOG</NavLink></li>
          </ul>
          <ul className='icons'>
            <li 
            data={CartList.length}
            >
              <label htmlFor='icon-1'>
                <i className="fa-sharp fa-solid fa-cart-shopping" title='giỏ hàng' onClick={handleViewCart}></i>
              </label>
            </li>
            {user 
              ? <>
              <li><label htmlFor='icon-2'><NavLink to='/myorder'><i className="fa-solid fa-right-to-bracket" title='Đăng nhập'></i></NavLink></label></li>
              <li><label htmlFor='icon-5'><NavLink onClick={handleLogOut}><i class="fa-solid fa-left-long"></i></NavLink></label></li>
              </>
              : <li><label htmlFor='icon-2'><NavLink to='/login'><i className="fa-solid fa-right-to-bracket" title='MyOrder'></i></NavLink></label></li>
            }

            <li>
              <label htmlFor='icon-3'>
                <i className="fa-solid fa-magnifying-glass" title='Tìm kiếm' onClick={handleViewSearch}></i>
              </label>
            </li>
            {
              nav ? 
              <li className='open-icon' onClick={() => setNav(!nav)}>
                <label>
                  <i className="fa-solid fa-bars"></i>
                </label>
              </li> :
              <li className='close-icon' onClick={() => setNav(!nav)}>
                <label>
                  <i className="fa-solid fa-xmark"></i>
                </label>
              </li>
            }
          </ul>
        </div>
      </div>
      {search && <Search />}
      {cart && <Cart cart={cart} setCart={setCart} />}
    </header>
  )
}

export default Header