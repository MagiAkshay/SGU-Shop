import React from 'react';
import './App.css';
import Header from './components/first-header/header';
import SecondHeader from './components/second-header/secondHead';
import ThirdHeader from './components/Third-Header/thirdHeader';
import BodyPosterOne from './components/body-poster/body-poster';
import MiddlePoster from './components/middle-poster/middleposter';
import MiddlePoster2 from './components/middle-poster2/middleposter2';
import MiddlePoster3 from './components/middle-poster3/middleposter3'; // Ensure this is the correct path
import Mobile from './components/mobiles/mobile';
import Footer from './components/footer/footer';
import ProductSlider from './components/ProductSlider/ProductSlider'; // Correct path
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartContexts/CartContext'; // Correct path
import CartPage from './components/CartPage/CartPage'; // Corrected path
import ProductPage from './components/ProductPage/ProductPage'; // Corrected path

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="header-div">
          <Header />
          <SecondHeader />
          <ThirdHeader />
        </div>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <BodyPosterOne />
                  <Mobile />
                  <ProductSlider />
                  <MiddlePoster />
                  <ProductSlider />
                  <MiddlePoster2 />
                  <ProductSlider />
                  <MiddlePoster3 />
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
