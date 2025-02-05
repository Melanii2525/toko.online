// // import React from "react";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import HomePage from "./HomePage";
// // import ProductDetail from "./ProductDetail";

// // function App() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route exact path="/" component={HomePage} />
// //         <Route path="/product/:id" component={ProductDetail} />
// //       </Switch>
// //     </Router>
// //   );
// // }

// // export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './HomePage';
// import ProductDetail from './ProductDetail';

// const App = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <Router>
//       <Routes>
//         <Route 
//           path="/" 
//           element={<Home setSelectedProduct={setSelectedProduct} />} 
//         />
//         <Route 
//           path="/product-detail" 
//           element={<ProductDetail selectedProduct={selectedProduct} />} 
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import HomePage from "./HomePage";
import ProductDetail from "./ProductDetail"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
