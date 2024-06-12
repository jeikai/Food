import React from 'react'
import { Food, SlideShow } from '../../component'
import {menu} from '../../assets/index'
import './menu.css'
function Menu() {
  const restaurant = {
    heading: 'Kampong Chicken House',
    menuFiler: ['Đặc Trưng', 'Súp', 'Salad', 'Khai vị', 'Món chính', 'Món ăn thêm', 'Cơm & Xôi', 'Rau - Đậu', 'Lẩu', 'Tráng miệng', 'Đồ uống'],
    // foodList: foods
  }
  return (
    <section className='menu margin'>
      <SlideShow />
      <div className='menu-image'>
        <img src={menu} alt= ''/>
      </div>
      <div className='menu-food'>
        <Food heading={restaurant.heading} menuFiler={restaurant.menuFiler} />
      </div>
    </section>
  ) 
}

export default Menu