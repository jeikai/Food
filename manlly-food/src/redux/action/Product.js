import axios from "axios"

const listProduct =  (filter) => async (dispatch) => {
  try {
    dispatch({
      type: 'product_pending'
    })

    const stringUrl = filter === '' || filter === 'Đặc trưng' 
                      ? '/foods' 
                      : '/foods?searchString=' + filter

      const { data } = await axios.get(process.env.REACT_APP_API_URL + stringUrl)
      // const { data } = await axios.get(process.env.REACT_APP_API_URL + '/foods')
      dispatch ({
        type: 'product_success',
        payload : data.data,
      })

  }catch (e) {
    dispatch({
      type: 'product_error',
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export {listProduct }