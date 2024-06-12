import React from 'react'
import {NavLink} from 'react-router-dom'
import './blog.css'
const Blog = ({showHeading}) => {
  return (
    <div className='blog_home'>
      {showHeading ?? <h2 className='blog_home-heading'>BLOG</h2> } 
      <div className='blog_list'>
        <div className='blog_item'>
          <img src='https://delivery.kampong.vn/storage/images/Kh%C3%B4ng-gian.jpg' alt='' className='blog_image' />
          <h4 className='blog_title'>Cựu BTV Ngọc Diệp tặng 1000 suất cơm gà tới các y bác sĩ tuyến đầu chống</h4>
          <p className='blog_content'>Cuộc sống hiện đại với guồng quay bận rộn, gấp gáp khiến người trẻ thường chọn chữ "tạm" để làm đáp án cho hầu hết mọi vấn đề mà họ không giải quyết được. Không có gì để mặc</p>
          <div className='blog_duaration'>
            <div className='blog_duaration-content'>
              <i className="fa-sharp fa-solid fa-eye"></i>
              <span>1990 lượt xem</span>
            </div>
            <div className='blog_duaration-content'>
              <i className="fa-solid fa-clock"></i>
              <span>19/01/2021</span>
            </div>
          </div>
        </div>


        <div className='blog_item'>
          <img src='https://delivery.kampong.vn/storage/images/Kh%C3%B4ng-gian.jpg' alt='' className='blog_image' />
          <h4 className='blog_title'>Cựu BTV Ngọc Diệp tặng 1000 suất cơm gà tới các y bác sĩ tuyến đầu chống</h4>
          <p className='blog_content'>Cuộc sống hiện đại với guồng quay bận rộn, gấp gáp khiến người trẻ thường chọn chữ "tạm" để làm đáp án cho hầu hết mọi vấn đề mà họ không giải quyết được. Không có gì để mặc</p>
          <div className='blog_duaration'>
            <div className='blog_duaration-content'>
              <i className="fa-sharp fa-solid fa-eye"></i>
              <span>1990 lượt xem</span>
            </div>
            <div className='blog_duaration-content'>
              <i className="fa-solid fa-clock"></i>
              <span>19/01/2021</span>
            </div>
          </div>
        </div>

        <div className='blog_item'>
          <img src='https://delivery.kampong.vn/storage/images/Kh%C3%B4ng-gian.jpg' alt='' className='blog_image' />
          <h4 className='blog_title'>Cựu BTV Ngọc Diệp tặng 1000 suất cơm gà tới các y bác sĩ tuyến đầu chống</h4>
          <p className='blog_content'>Cuộc sống hiện đại với guồng quay bận rộn, gấp gáp khiến người trẻ thường chọn chữ "tạm" để làm đáp án cho hầu hết mọi vấn đề mà họ không giải quyết được. Không có gì để mặc</p>
          <div className='blog_duaration'>
            <div className='blog_duaration-content'>
              <i className="fa-sharp fa-solid fa-eye"></i>
              <span>1990 lượt xem</span>
            </div>
            <div className='blog_duaration-content'>
              <i className="fa-solid fa-clock"></i>
              <span>19/01/2021</span>
            </div>
          </div>
        </div>
      </div>
      <button className='button_view'><NavLink to='/blog'>Xem thêm</NavLink></button>
    </div>
  )
}

export default Blog