import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { SlideShow } from '../../component/index'
import './checkout.css'
import { useDispatch, useSelector } from 'react-redux'
import createOrder from '../../redux/action/Order'
import Spinner from '../../component/spinner/Spinner'
const Checkout = () => {
  const CartList = useSelector(state => state.AddCartReducers.cart)
  const navigate = useNavigate()
  
  // useEffect(() => {
  //   if(CartList.length === 0) {
  //     navigate(-1)
  //   }
  // }, [CartList.length])
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.LoginReducer.userInfo)
  const order = useSelector(state => state.OrderReducer)
  const {loading, error} = order
  // const loading = order?.loading ?? false
  console.log(loading);
  console.log(order);
  // console.log(user);
  const [info, setInfo] = useState(() => {
    return {
      fullName: user?.fullName ?? '',
      phoneNumber: user?.phoneNumber ?? '',
      address: user?.address ?? '',
      statusShip: 'giao hàng tận nơi',
      province: '',
      note: ''
    }
  })
  
  const totalPrice = CartList.reduce((totalPrice, item) => totalPrice + item.foodPrice * item.quantity, 0)
  const VAT = 0.1
  const ship = 20000

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user) {
      navigate('/login')
    }else {
      const newCart = CartList.map(item => {
        return {
          name: item.foodName,
          quantity: item.quantity,
          image: item.foodImage,
          price: item.foodPrice,
          product: item._id,
        }
      })
      const order = {
        orderItems: newCart,
        shippingInfo: {
          name: info.fullName,
          phoneNumber: info.phoneNumber,
          address: info.address,
          province: info.province,
          note: info.note,
        },
        shippingMethods: info.statusShip,
        shippingPrice: ship,
      }
      dispatch(createOrder(order))
    }
  }
  return (
    <section className='checkout margin'>
      <SlideShow />
      <form onSubmit= {handleSubmit}>
        <div className='container'>
          <div className='checkout_form'>
            <div className='checkout_info'>
              <i className="fa-solid fa-circle-info"></i>
              Lưu ý chỉ giao hàng tại Hà Nội
            </div>
            <div className='checkout_login'>
              <p>Bạn đã có tài khoản ?</p>
              <p><NavLink><span>Nhấn vào đây để đăng nhập</span></NavLink></p>
            </div>
            <div className='checkout_section_info'>
              <h2>Thông tin giao hàng</h2>
              <div className='box-input'>
                <div className='form-control'>
                  <input type='text' placeholder='Họ và tên *' value={info.fullName} name='fullName'  onChange={e => setInfo({...info, fullName: e.target.value})} />
                </div>
                <div className='form-control'>
                  <input type='text' placeholder='Số điện thoại *' value={info.phoneNumber} name='phoneNumber'  onChange={e => setInfo({...info, phoneNumber: e.target.value})} />
                </div>
                <div className='form-control'>
                  <label><span>Bạn muốn nhận hàng bằng hình thức nào *</span></label>
                  <div className=''>
                    <input type='radio' name='statusShip' value='giao hàng tận nơi' onChange={e => setInfo({...info, statusShip: e.target.value})} />
                    <label> Giao hàng tận nơi</label>
                  </div>
                  <div className=''>
                    <input type='radio' name='statusShip' value='lấy tại cửa hàng' onChange={e => setInfo({...info, statusShip: e.target.value})} />
                    <label> Lấy tại cửa hàng</label>
                  </div> 
                </div>
                <div className='form-control'>
                  <input type='text' placeholder='Địa chỉ *' value={info.address} onChange= {e => setInfo({...info, address: e.target.value})} />
                  <label><span>Nếu không tìm thấy địa chỉ chính xác, bạn hãy điền tên đường, phố và bổ sung chi tiết, chỉ dẫn vào phần 'Ghi chú' ngay phía dưới. Xin cảm ơn.</span></label>
                </div>
                <div className='form-control'>
                  <input type='text' disabled value='Hà Nội' />
                </div>
                <div className='form-control'>
                  <select className='' onChange={e => setInfo({...info, province: e.target.value})}>
                    <option value=''>Quận / Huyện *</option>
                    <option value='Ba Đình'>Ba Đình</option>
                    <option value='Ba Vì'>Ba Vì</option>
                    <option value='Bắc Từ Liêm'>Bắc Từ Liêm</option>
                    <option value='Cầu giấy'>Cầu giấy</option>
                    <option value='Chương Mỹ'>Chương Mỹ</option>
                    <option value='Đan Phượng'>Đan Phượng</option>
                    <option value='Đông Anh'>Đông Anh</option>
                    <option value='Đống Đa'>Đống Đa</option>
                    <option value='Gia Lâm'>Gia Lâm</option>
                    <option value='Hà Đông'>Hà Đông</option>
                    <option value='Hoài Đức'>Hoài Đức</option>
                    <option value='Hoàn Kiếm'>Hoàn Kiếm</option>
                    <option value='Hoàng Mai'>Hoàng Mai</option>
                    <option value='Long Biên'>Long Biên</option>
                  </select>
                </div>
                <div className='form-control'>
                  <textarea placeholder='Ghi chú' onChange={e => setInfo({...info, note: e.target.value})}></textarea>
                </div>
              </div>
            </div>
            {loading ? <Spinner /> : 
              <>
                <div className='checkout_section_info'>
              <h2>Đơn hàng của bạn</h2>
              <div className='order_summary'>
                <div className='scroll'>
                  {CartList.map((item, index) => {
                    return (
                      <div className='order_info' key={index}>
                        <div className='order_info-left'>
                          <div className='image'>
                            <img src={item.foodImage} alt={item.foodName} />
                          </div>
                          <div className='title'>
                            <div className='name'>{item.foodName}</div>
                            <div className='quantity'>x {item.quantity}</div>
                          </div>
                        </div>
                        <div className='order_info-right'>{item.quantity * item.foodPrice} đ</div>
                      </div>
                    )
                  })}
                </div>
                <div className='order_totals'>
                  <div className='total-row'>
                    <div className='line-name'>Tổng tiền</div>
                    <div className='line-price'>{totalPrice} đ</div>
                  </div>
                  <div className='total-row'>
                    <div className='line-name'>Giảm giá</div>
                    <div className='line-price'>0 đ</div>
                  </div>
                  <div className='total-row'>
                    <div className='line-name'>Tạm tính</div>
                    <div className='line-price'>{totalPrice} đ</div>
                  </div>
                  <div className='total-row'>
                    <div className='line-name'>VAT</div>
                    <div className='line-price'>{VAT * 100} %</div>
                  </div>
                  <div className='total-row'>
                    <div className='line-name'>Phí vận chuyển</div>
                    <div className='line-price'>{ship} đ</div>
                  </div>
                </div>
                <div className='payment-due'>
                  <div className='line-name'>Thanh toán</div>
                  <div className='line-price'>{totalPrice ? totalPrice * 1.1 + ship : ''} đ</div>
                </div>
                <div className='bottom'>
                  <NavLink to='/cart'><span><i className="fa-solid fa-chevron-left"></i> Quay lại giỏ hàng</span></NavLink>
                  <button className='button_view'><NavLink>Gửi Đặt Món</NavLink></button>
                </div>
              </div>
            </div>
              </>
            }
            
          </div>
        </div>
      </form>
    </section>
  )
}

export default Checkout