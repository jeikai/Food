
const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'login_pending':
      return {loading: true}
    case 'login_success':
      return {loading: false, userInfo: action.payload}
    case 'login_error':
      return {loading: false, error: action.payload}
    case 'log_out':
      return {}
    default:
      return state
  }
}

export default LoginReducer