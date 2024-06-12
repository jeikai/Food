import React from 'react'
import { SlideShow } from '../../component'
import { chicken, restaurant_1, restaurant_2 } from '../../assets/index'
import './restaurant.css'
function Restaurant() {
  return (
    <section className='restaurant margin'>
      <SlideShow />
      <div className='restaurant-box'>
        <div className='container'>
          <div className='restaurant-info'>
            <h1>Lịch sử hình thành</h1>
            <p>Ra đời từ tháng 04 năm 2015 với tên gọi Kampong Chicken House, đây là một mô hình Nhà hàng Á phục vụ nhanh, lý tưởng dành cho xã hội hiện đại. Kể từ khi thành lập cho tới nay, Kampong Chicken House luôn được khách hàng nhắc tới là mô hình nhà hàng đầu tiên phục vụ chuyên biệt Cơm gà Hải Nam chuẩn phong vị Singapore. <br />
              Tính tới tháng 10 năm 2020, Kampong Chicken House đã ra mắt tới 6 cơ sở trên khắp các quận nội thành Hà Nội. <br />
              Với tôn chỉ : " Hạnh phúc đơn giản từ sự AN TÂM ", Kampong mong muốn đem lại cho khách hàng những bữa ăn không những ngon miệng mà còn đảm bảo an toàn cho sức khỏe.</p>
          </div>
          <div className='restaurant-image'>
            <img src={restaurant_1} />
          </div>
        </div>
      </div>

      <div className='restaurant-box'>
        <div className='container'>
          <div className='restaurant-image'>
            <img src={restaurant_2} />
          </div>
          <div className='restaurant-info'>
            <h1>QUY MÔ HOẠT ĐỘNG</h1>
            <p>
              Có 6 cơ sở hoạt động,có thể tổ chức tiệc lên tới 100 người.
              <br />
              Nhà hàng có không gian rộng rãi, thoáng mát, bày trí hiện đại, nhiều cây xanh tạo cảm giác dễ chịu, thoải mái, làm nơi nghỉ ngơi thư giãn lý tưởng cho thực khách.
            </p>
          </div>
        </div>
      </div>

      <div className='restaurant-box'>
        <div className='container'>
          <div className='restaurant-info'>
            <h1>MÓN ĂN ĐẶC TRƯNG</h1>
            <p>
              Cơm gà Hải Nam là món ăn làm nên tên tuổi của Kampong Chicken House từ những ngày đầu tiên ra mắt.
              <br />
              Cơm được nấu theo kiểu Singapore với nước dùng gà béo ngậy. Hạt cơm dẻo, xốp thấm gia vị nước dùng, thơm mùi gừng. Cơm gà Kampong được nâng cấp lên bởi nguyên liệu thịt gà được lựa chọn từ gà ta thả vườn, nuôi trong các trang trại eco với những quy định nghiêm ngặt về tiêu chuẩn vệ sinh chuồng tại và nguồn thức ăn. Chính vì vậy chất lượng thịt gà Kampong luôn được đảm bảo yếu tố thịt chắc, ngọt, da giòn.
              <br />
              Không thể thiếu được phải kể đến 3 loại sốt đặc trưng : sốt ớt, sốt gừng, sốt xì dầu. được nhà hàng chế biến tươi, trong ngày.</p>
          </div>
          <div className='restaurant-image'>
            <img src={chicken} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restaurant