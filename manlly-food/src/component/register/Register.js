import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SlideShow from './../slideShow/SlideShow'
import './register.css'
const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    address: '',
  })
  const [errors, setErrors] = useState()
  const [success, setSuccess] = useState()
  const hanleSubmit = (e) => {
    e.preventDefault()
    const user = {...form}
    axios.post(process.env.REACT_APP_API_URL + '/users/register', user)
      .then(response => {
        console.log(response.data)
        setErrors()
        setSuccess(response.data.message)
        navigate('/login')
      })
      .catch(err => {
        console.log(err.response.data.message)
        setErrors(err.response.data.message)

      })
  }

  
  return (
    <section className='register margin'>
      <SlideShow />
      <form aria-autocomplete='off' onSubmit={hanleSubmit}>
      <div className='register-info'>
        <h2>Thông tin tài khoản</h2>
        <div className='register-row'>
          <div className='form-control'>
            <input type='text' name='userName' placeholder='Tên tài khoản *' required onChange={(e) => setForm({...form,userName: e.target.value })}/>
          </div>
          {/* <div className='form-control'>
            <input type='text' placeholder='Email *'/>
          </div> */}
          <div className='form-control'>
            <input type='password' name='password' placeholder='Mật khẩu *' required onChange={(e) => setForm({...form,password: e.target.value })}/>
          </div>
          <div className='form-control'>
            <input type='text' name='confirmPassword' placeholder='Nhập lại mật khẩu *' required onChange={(e) => setForm({...form,confirmPassword: e.target.value })}/>
          </div>
        </div>
      </div>


      <div className='register-info private'>
        <h2>Thông tin tài khoản</h2>
        <div className='register-row'>
          <div className='form-control'>
            <input type='text' name='fullName' placeholder='Họ và tên *' required onChange={(e) => setForm({...form,fullName: e.target.value })}/>
          </div>
          <div className='form-control'>
            <input type='text'name='phoneNumber' placeholder='Số điện thoại *' required onChange={(e) => setForm({...form,phoneNumber: e.target.value })}/>
          </div>
          <div className='form-control'>
            <input type='text' name='address' placeholder='Địa chỉ *' required onChange={(e) => setForm({...form,address: e.target.value })} />
          </div>
          <div className='form-control'>
            <input type='checkbox' required/>
            <label>Tôi đồng ý với <span>điều khoản sử dụng</span> và <span>chính sách bảo mật</span></label>
          </div>
          {
            (errors && 
            <div className='form-control'>
              <label style={{ color: 'red' }} >{errors[0].msg || errors}</label>
            </div>) ||
            (success && 
            <div className='form-control'>
              <label style={{ color: 'green' }} >{success}</label>
            </div>)
            } 
          
        </div>
          
      </div>

      <div className='register-button'>
      <button className='button_view'>Đăng ký</button>
      </div>
      </form>
    </section>
  )
}

export default Register