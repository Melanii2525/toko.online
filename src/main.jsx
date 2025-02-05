// import React from 'react';  
// import ReactDOM from 'react-dom/client';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './HomePage';  
// import './index.css';
// import ProductDetail from './ProductDetail';
// import './ProductDetail.css';
// import './ProductDetail.module.css';
// // import ProductDetail2 from './ProductDetail2';
// // import ProductDetail3 from './ProductDetail3';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App/> */}
//     <HomePage /> 
//     <ProductDetail/> 
//     {/* <ProductDetail2/>
//     <ProductDetail3/> */}
//   </React.StrictMode>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage'; 
import ProductDetail from './ProductDetail'; 
import './HomePage.css'; 
import './ProductDetail.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
