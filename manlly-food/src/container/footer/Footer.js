import React, { useEffect, useState } from 'react'
import './footer.css'
const Footer = () => {
  const [goToTop, setGoToTop] = useState(false)

  const handleToTop = () => {
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    const handleScroll = () => setGoToTop(window.scrollY >= 200)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='footer'>
      <div className='footer_info'>
        <h3>Công ty trách nhiệm hữu hạn một thành viên</h3>
        <p>Yên Nghĩa, Hà Đông, Hà Nội</p>
        <div className='footer_phone'>
          <i className="fa-solid fa-phone"></i>
          0982193203
        </div>
        <div className='footer_email'>
          <i className="fa-sharp fa-solid fa-envelope"></i>
          dvc29062003@gmail.com
        </div>
      </div>
      <ul className='footer_links'>
        <li>Thông Tin</li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
        <li>Blog</li>
      </ul>
      <ul className='footer_links'>
        <li>Kết Nối</li>
        <li>Giới thiệu</li>
        <li>Liên hệ</li>
        <li>Blog</li>
      </ul>
      {goToTop && <div className='moveToTop' onClick={handleToTop}>
        <i className="fa-solid fa-jet-fighter"></i>
      </div>}
    </div>
  )
}

export default Footer