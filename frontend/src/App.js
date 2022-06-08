// libs
import { memo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// custom hooks
import useProductsHook from './Hooks/useProductsHook';
// pages
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductList from "./Pages/ProductList/ProductList";
import Signup from "./Pages/Signup/Signup";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Payment from './Pages/Payment/Payment';
import SuccessPayment from './Pages/SuccessPayment/SuccessPayment';
 
const App = () => {
  console.log('i am app');
  const user = false;
  const productsState = useProductsHook()
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Home products={productsState} />
          }/>
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/pay' element={<Payment />} />
          <Route path='/success' element={<SuccessPayment />} />
          <Route path='/login' element={
            user ? <Navigate to='/' /> : <Login />
          } />
          <Route path='/register' element={
            user ? <Navigate to='/' /> : <Signup />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default memo(App);
