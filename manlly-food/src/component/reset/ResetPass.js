import React from 'react'
import './resetPass.css'
// import SlideShow from './../slideShow/SlideShow'

function ResetPass() {
  return (
    <section className='reset margin'>
      <div className='container'>
        <h2>Thay đổi mật khẩu</h2>
        <div className='form-control'>
          <input type='text' placeholder='Email *' required />
        </div>
        <button className='button_view'>Gửi yêu cầu</button>
      </div>
    </section>
  )
}

export default ResetPass