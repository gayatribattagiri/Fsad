import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../customer/pages/HomePage';
import Cart from '../customer/components/Cart/Cart';
import Navigation from '../customer/components/Navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetails from '../customer/components/Order/OrderDetails';
import Signup from '../customer/components/Signup';
import Login from '../customer/components/Login';

const CustomerRoutes = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:category/:productId" element={<ProductDetails />} />

        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/account/order" element={<Order/>}/>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}/>
        <Route path="/products/:categoryId" element={<Product />} />

       <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </>
  );
};

export default CustomerRoutes;
