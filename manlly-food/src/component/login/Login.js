import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlideShow from './../slideShow/SlideShow';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';
import { login } from '../../redux/action/User';
import Spinner from '../spinner/Spinner';

function Login() {
  const [input, setInput] = useState({
    userName: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.LoginReducer);
  const { loading, error, userInfo } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(input));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <section className='login margin'>
      <SlideShow />
      {loading ? <Spinner /> :
        <>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <h2>Thông tin đăng nhập</h2>
              <div className='form'>
                <div className='form-control'>
                  <input type='text' name='userName' placeholder='Tên tài khoản *' required onChange={(e) => setInput({ ...input, userName: e.target.value })} />
                </div>
                <div className='form-control'>
                  <input type='password' placeholder='Mật khẩu * ' required onChange={(e) => setInput({ ...input, password: e.target.value })} />
                </div>
                <div className='form-control'>
                  <input type='checkbox' />
                  <label>Lưu thông tin đăng nhập</label>
                </div>
                {error && <div className='form-control'>
                  <label style={{ color: 'red' }} >{error}</label>
                </div>}
                <div className='form-control'>
                  <button type='submit' className='button_view'>Đăng nhập</button>
                  <div>
                    <NavLink to='/register'>Bạn đã có tài khoản chưa ?</NavLink>
                    <NavLink to='/reset'>Quên mật khẩu ?</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      }
    </section>
  );
}

export default Login;
