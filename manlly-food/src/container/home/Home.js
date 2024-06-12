import React from 'react'
import { SlideShow, Food, Blog } from '../../component'
import './home.css'
function Home() {

  const restaurant = [
    {
      heading: 'Kampong Chicken House',
      menuFiler: ['Đặc Trưng', 'Súp', 'Salad', 'Khai vị', 'Món chính', 'Món ăn thêm', 'Cơm & Xôi', 'Rau - Đậu', 'Lẩu', 'Tráng miệng', 'Đồ uống'],
      // foodList: foods
    },
    {
      heading: 'COCA Restaurant',
      menuFiler: ['Set Lẩu "Vị Ngon Chuẩn Thái"', 'Gỏi Thái', 'Khai Vị', 'Cơm - Mì', 'Mì nhúng lẩu', 'Thịt nhúng lẩu', 'Hải sản nhúng lẩu', 'Rau - Nước lẩu', 'Tráng miệng', 'Đồ uống', 'Nhóm canh', 'Nhóm rau xào'],
    }
  ]
  return (
    <section className='home margin'>
      <SlideShow />
      {restaurant.map((item, index) => {
        return (
          <Food heading={item.heading} menuFiler={item.menuFiler} key={index} />
        )
      })}
      <Blog />
    </section>
  )
}

export default Home