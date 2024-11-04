import logo from './logo.svg';

import './App.css';
import Header from './components/first-header/header';
import SecondHeader from './components/second-header/secondHead';
import ThirdHeader from './components/Third-Header/thirdHeader';
import BodyPosterOne from './components/body-poster/body-poster';
import MiddlePoster from './components/middle-poster/middleposter';
import Footer from './components/footer/footer';
import AddCart from './components/Add-Cart/addCart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import ViewCart from './components/view-Cart/viewCart';
import Mobile from './components/mobiles/mobile';
import SixMoblie from './components/six-moblie/sixmoblie';
import FindId from './components/FindID/findbyid';
import SixOther from './components/six-moblie/sixanother';


function App() {
 
  return (
    
  
    <div>
    <div className='header-div'>
    
      <Header/>
      <SecondHeader />
      <ThirdHeader />
      {/* <button onclick="loadContent('page1.html')">Load Page 1</button> */}
      </div>
      <div>
      <BodyPosterOne />
      <Mobile />
      <MiddlePoster />
      <SixMoblie />
      <MiddlePoster />
      <SixOther />
      </div>
      
      <Footer />
     {/* <FindId /> */}
     
     


      </div>
      
      
      
      
  );
}

export default App;
