import axios from "axios"


const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: 'order_pending'
    })
    const {token} = getState().LoginReducer.userInfo
    console.log(token)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    }

    const { data } = await axios.post(process.env.REACT_APP_API_URL + '/orders', order ,config)
    // console.log(data)
    dispatch({
      type: 'order_success',
      payload: data.message
    })

    dispatch({
      type: 'clear_cart'
    })
  }catch (e) {
    dispatch({
      type: 'order_error',
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}
export default createOrder