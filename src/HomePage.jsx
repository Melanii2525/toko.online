// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom"; 
// // import "./Homepage.css";

// // const HomePage = () => {
// //   const [products] = useState([
// //     {
// //       id: 1,
// //       name: "Leather Bracelets",
// //       price: "Rp 35.000",
// //       image: "https://i.pinimg.com/736x/df/ae/4d/dfae4d16cece8d19ba7cf35c41f23619.jpg"
// //     },
// //     {
// //       id: 2,
// //       name: "Bangle Bracelets",
// //       price: "Rp 30.000",
// //       image: "https://i.pinimg.com/736x/f6/b2/b4/f6b2b4022083d1d06f1576c026eb031e.jpg"
// //     },
// //     {
// //       id: 3,
// //       name: "Beaded Bracelets",
// //       price: "Rp 32.000",
// //       image: "https://i.pinimg.com/736x/1b/8c/47/1b8c4782fbc25770ba343b13cf9e0bae.jpg"
// //     },
// //     {
// //       id: 4,
// //       name: "Cuff Bracelets",
// //       price: "Rp 35.000",
// //       image: "https://i.pinimg.com/736x/9a/6b/b4/9a6bb4080889e815394592747e598b01.jpg"
// //     },
// //     {
// //       id: 5,
// //       name: "Serene Wave Earrings",
// //       price: "Rp 25.000",
// //       image: "https://i.pinimg.com/736x/25/8d/e8/258de895dcddf6cddede3821f438bb65.jpg"
// //     },
// //     {
// //       id: 6,
// //       name: "Starlight Cluster Earrings",
// //       price: "Rp 30.000",
// //       image: "https://i.pinimg.com/736x/a7/fc/b8/a7fcb8a5ad1cb4a3a51ccd045779dde3.jpg"
// //     },
// //     {
// //       id: 7,
// //       name: "Celestial Hoop Drops",
// //       price: "Rp 30.000",
// //       image: "https://i.pinimg.com/736x/73/5f/82/735f8246ef8018b19552ac6f9637e030.jpg"
// //     },
// //     {
// //       id: 8,
// //       name: "Aurora Earrings",
// //       price: "Rp 30.000",
// //       image: "https://i.pinimg.com/736x/7f/09/25/7f0925655a4d3648f4cb5200d856fbef.jpg"
// //     },
// //     {
// //       id: 9,
// //       name: "Ethereal Dream Pendant",
// //       price: "Rp 30.000",
// //       image: "https://i.pinimg.com/736x/bc/ce/9d/bcce9d83821ec376a5650c55fd4e51eb.jpg",
// //       description: "The Ethereal Dream Pendant is a delicate and enchanting piece of jewelry, designed to evoke a sense of elegance and mystery. Crafted with intricate details, it features a mesmerizing design that captures the light beautifully. This pendant often incorporates gemstones or subtle elements that create a dreamy, almost otherworldly aura. Ideal for both casual and formal occasions, the Ethereal Dream Pendant adds a touch of sophistication and timeless beauty to any outfit, making it a perfect accessory for those who appreciate refined, yet captivating, jewelry."
// //     },
// //     {
// //       id: 10,
// //       name: "Butterfly Necklaces",
// //       price: "Rp 35.000",
// //       image: "https://i.pinimg.com/736x/9d/89/2c/9d892cfeb91eda34527edc180c853ce4.jpg"
// //     },
// //     {
// //       id: 11,
// //       name: "Summit & Sea Necklace",
// //       price: "Rp 35.000",
// //       image: "https://purplesecret.in/cdn/shop/files/NECKLACE00017_1.jpg?v=1711018865&width=823"
// //     },
// //     {
// //       id: 12,
// //       name: "Moonlight Necklace",
// //       price: "Rp 35.000",
// //       image: "https://graceliajewelry.com/cdn/shop/files/Frame7_05d01a71-4f4a-4905-8f67-ef84b2e8db58.webp?v=1716829384&width=800"
// //     },
    
// //   ]);

// //   const navigate = useNavigate(); 

// //   return (
// //     <div className="homepage">
// //       <header className="header">
// //         <div className="logo">Dozu Wristwear</div>
// //         <nav className="nav">
// //           <a href="/">Home</a>
// //           <a href="/products">Products</a>
// //           <a href="/cart">Cart</a>
// //           <a href="/login">Login</a>
// //         </nav>
// //       </header>

// //       <div className="banner">
// //         <h1>Welcome to Our DozuWristwear Store</h1>
// //         <p>Find the best products at the best prices!!!</p>
// //       </div>

// //       <h1 className="m1">Our Products</h1>
// //       <div className="product-list">
// //         {products.map((product) => (
// //           <div className="product-card" key={product.id}>
// //             <img src={product.image} alt={`Product ${product.id}`} />
// //             <div className="product-info">
// //               <h3>{product.name}</h3>
// //               <p>{product.price}</p>
// //               <button onClick={() => navigate(`/products/${product.id}`)}>
// //                 View Product
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <footer className="footer">
// //         <p>&copy; 2024 Accessories trade. All rights reserved.</p>
// //         <div className="social-media">
// //           <a href="#">Facebook</a>
// //           <a href="#">Twitter</a>
// //           <a href="#">Instagram</a>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default HomePage;

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Homepage.css";

const HomePage = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Leather Bracelets",
      price: "Rp 35.000",
      image: "https://i.pinimg.com/736x/df/ae/4d/dfae4d16cece8d19ba7cf35c41f23619.jpg"
    },
    {
      id: 2,
      name: "Bangle Bracelets",
      price: "Rp 30.000",
      image: "https://i.pinimg.com/736x/f6/b2/b4/f6b2b4022083d1d06f1576c026eb031e.jpg"
    },
    {
      id: 3,
      name: "Beaded Bracelets",
      price: "Rp 32.000",
      image: "https://i.pinimg.com/736x/1b/8c/47/1b8c4782fbc25770ba343b13cf9e0bae.jpg"
    },
    {
      id: 4,
      name: "Cuff Bracelets",
      price: "Rp 35.000",
      image: "https://i.pinimg.com/736x/9a/6b/b4/9a6bb4080889e815394592747e598b01.jpg"
    },
    {
      id: 5,
      name: "Serene Wave Earrings",
      price: "Rp 25.000",
      image: "https://i.pinimg.com/736x/25/8d/e8/258de895dcddf6cddede3821f438bb65.jpg"
    },
    {
      id: 6,
      name: "Starlight Cluster Earrings",
      price: "Rp 30.000",
      image: "https://i.pinimg.com/736x/a7/fc/b8/a7fcb8a5ad1cb4a3a51ccd045779dde3.jpg"
    },
    {
      id: 7,
      name: "Celestial Hoop Drops",
      price: "Rp 30.000",
      image: "https://i.pinimg.com/736x/73/5f/82/735f8246ef8018b19552ac6f9637e030.jpg"
    },
    {
      id: 8,
      name: "Aurora Earrings",
      price: "Rp 30.000",
      image: "https://i.pinimg.com/736x/7f/09/25/7f0925655a4d3648f4cb5200d856fbef.jpg"
    },
    {
      id: 9,
      name: "Ethereal Dream Pendant",
      price: "Rp 30.000",
      image: "https://i.pinimg.com/736x/bc/ce/9d/bcce9d83821ec376a5650c55fd4e51eb.jpg",
      description: "The Ethereal Dream Pendant is a delicate and enchanting piece of jewelry, designed to evoke a sense of elegance and mystery. Crafted with intricate details, it features a mesmerizing design that captures the light beautifully. This pendant often incorporates gemstones or subtle elements that create a dreamy, almost otherworldly aura. Ideal for both casual and formal occasions, the Ethereal Dream Pendant adds a touch of sophistication and timeless beauty to any outfit, making it a perfect accessory for those who appreciate refined, yet captivating, jewelry."
    },
    {
      id: 10,
      name: "Butterfly Necklaces",
      price: "Rp 35.000",
      image: "https://i.pinimg.com/736x/9d/89/2c/9d892cfeb91eda34527edc180c853ce4.jpg"
    },
    {
      id: 11,
      name: "Summit & Sea Necklace",
      price: "Rp 35.000",
      image: "https://purplesecret.in/cdn/shop/files/NECKLACE00017_1.jpg?v=1711018865&width=823"
    },
    {
      id: 12,
      name: "Moonlight Necklace",
      price: "Rp 35.000",
      image: "https://graceliajewelry.com/cdn/shop/files/Frame7_05d01a71-4f4a-4905-8f67-ef84b2e8db58.webp?v=1716829384&width=800"
    },
  ]);

  const productsRef = useRef(null); 
  const loginRef = useRef(null); 
  const navigate = useNavigate();

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToCart = () => {
    window.scrollTo({behavior: "smooth" });
  };

  const scrollToLogin = () => {
    loginRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Dozu Wristwear</div>
        <nav className="nav">
          <button onClick={scrollToTop} className="nav-link">Home</button>
          <button onClick={scrollToProducts} className="nav-link">Products</button>
          <button onClick={scrollToCart} className="nav-link">Cart</button>
          <button onClick={scrollToLogin} className="nav-link">Login</button>
        </nav>
      </header>

      <div className="banner">
        <h1>Welcome to Our DozuWristwear Store</h1>
        <p>Find the best products at the best prices!!!</p>
      </div>

      <h1 className="m1">Our Products</h1>
      <div ref={productsRef} className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={`Product ${product.id}`} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => navigate(`/products/${product.id}`)}>
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2024 Accessories trade. All rights reserved.</p>
        <div className="social-media">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
