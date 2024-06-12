import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Blog, Header, Home, Menu, Restaurant, Footer, Introduction, Cart, Checkout } from './container'
import { Login, Register, ResetPassword } from './component';
import Spinner from './component/spinner/Spinner';
import MyOrder from './container/myorder/MyOrder';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element = {<Home />} />
        <Route path='/introduction' element = {<Introduction />} />
        <Route path='/restaurant' element = {<Restaurant />} />
        <Route path='/menu' element = {<Menu />} />
        <Route path='/blog' element = {<Blog />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/reset' element = {<ResetPassword />} />
        <Route path= '/cart' element = {<Cart />} />
        <Route path= '/checkout' element = {<Checkout />} />
        <Route path= '/myorder' element = {<MyOrder />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
