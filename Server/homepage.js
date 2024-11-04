import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FindId from './components/FindID/findbyid';
import App from './App';
import ViewCart from './components/view-Cart/viewCart';


function Homepage() {
  return (

    <div>
     
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products/:id" element={<FindId />} />
        <Route path="/view-cart" element={<ViewCart />} />
      </Routes>
    
    </div>
  );
}

export default Homepage;
