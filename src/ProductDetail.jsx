// // // // import React, { useState } from "react";
// // // // import { useParams } from "react-router-dom"; 
// // // // import "./ProductDetail.module.css";
// // // // import "./ProductDetail.css";
// // // // import Footer from "./Footer";

// // // // const ProductDetail = () => {
// // // //   const { id } = useParams();
// // // //   const [quantity, setQuantity] = useState(1); 

// // // //   const products = [
// // // //     {
// // // //       id: "1", 
// // // //       name: "Leather Bracelet",
// // // //       price: "Rp. 35.000",
// // // //       mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcBPR9pp7bAaVwZXJ6Zy47euHTVtGgsLFDQ&s",
// // // //       description: "Discover the timeless elegance of our Leather Bracelets, crafted from premium genuine leather for durability and style. These bracelets feature a sleek design with adjustable straps, ensuring a comfortable fit for any wrist size. Perfect for casual wear or adding a touch of sophistication to formal outfits, they are available in various colors and patterns to suit your personality. Whether as a thoughtful gift or a personal accessory, our leather bracelets blend fashion and functionality effortlessly.",
// // // //     },
// // // //     {
// // // //       id: "2",
// // // //       name: "Bangle Bracelets",
// // // //       price: "Rp. 30.000",
// // // //       mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVBdi6qYK1YkUQiL9Nu6MsOLFrDenMII8jA&s",
// // // //       description: "Bangle bracelets are circular, rigid jewelry pieces worn around the wrist, typically made of metal, wood, or plastic. They are sleek and stylish, often worn in stacks or individually, adding a touch of elegance and sophistication to any outfit. Perfect for both casual and formal occasions, bangle bracelets come in various designs, from simple and minimalist to ornate and embellished, allowing wearers to express their personal style.",
// // // //     }
// // // //   ];

// // // //   const product = products.find(item => item.id === id);

// // // //   if (!product) {
// // // //     return <div>Product not found.</div>;
// // // //   }

// // // //   const handleIncrement = () => setQuantity(quantity + 1);
// // // //   const handleDecrement = () => {
// // // //     if (quantity > 1) setQuantity(quantity - 1);
// // // //   };

// // // //   const inlineStyles = {
// // // //     productInfo: {
// // // //       display: "flex",
// // // //       flexDirection: "column",
// // // //       justifyContent: "center",
// // // //       padding: "20px",
// // // //     },
// // // //     productPrice: {
// // // //       fontSize: "1.5rem",
// // // //       color: "#FF5722",
// // // //       margin: "10px 0",
// // // //     },
// // // //     addToCartButton: {
// // // //       backgroundColor: "#4CAF50",
// // // //       color: "#fff",
// // // //       padding: "10px 20px",
// // // //       border: "none",
// // // //       borderRadius: "5px",
// // // //       cursor: "pointer",
// // // //     },
// // // //     orderNowButton: {
// // // //       backgroundColor: "#FF5722",
// // // //       color: "#fff",
// // // //       padding: "10px 20px",
// // // //       border: "none",
// // // //       borderRadius: "5px",
// // // //       cursor: "pointer",
// // // //     },
// // // //     quantityContainer: {
// // // //       display: "flex",
// // // //       alignItems: "center",
// // // //       gap: "10px",
// // // //     },
// // // //     quantityButton: {
// // // //       backgroundColor: "#f4b2c4",
// // // //       color: "#fff",
// // // //       width: "35px",
// // // //       height: "35px",
// // // //       border: "none",
// // // //       borderRadius: "50%",
// // // //       cursor: "pointer",
// // // //       fontSize: "1.5rem",
// // // //       display: "flex",
// // // //       justifyContent: "center",
// // // //       alignItems: "center",
// // // //     },
// // // //     quantityDisplay: {
// // // //       fontSize: "1.2rem",
// // // //       width: "50px",
// // // //       textAlign: "center",
// // // //       padding: "5px 10px",
// // // //       border: "1px solid #ccc",
// // // //       borderRadius: "5px",
// // // //     },
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <header className="header">
// // // //         <h1 className="a2">Product Detail</h1>
// // // //         <h1 className="a1">{product.name}</h1>
// // // //         <nav className="navbar">
// // // //           <a href="#home">Home</a>
// // // //           <a href="#products">Products</a>
// // // //           <a href="#about">About</a>
// // // //           <a href="#contact">Contact</a>
// // // //         </nav>
// // // //       </header>

// // // //       <div className="product-detail">
// // // //         <div className="product-image">
// // // //           <img src={product.mainImage} alt={product.name} />
// // // //           <div className="product-variation">
// // // //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQvHZi-rx08NbklOaw4YFYAHcfy1kBpivpA&s" alt="Variation 1" />
// // // //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLppI2pDUTnFkJzSiGrDXGZYPYDsip0Jvlvg&s" alt="Variation 2" />
// // // //             <img src="https://www.sophiajewellery.co.uk/wp-content/uploads/2017/01/products-769747.jpg" alt="Variation 3" />
// // // //             <img src="https://theleathermob.com/wp-content/uploads/2024/10/b361pe.jpg" alt="Variation 4" />
// // // //           </div>
// // // //         </div>

// // // //         <div style={inlineStyles.productInfo}>
// // // //           <h1 className="product-title">{product.name}</h1>
// // // //           <p style={inlineStyles.productPrice}>{product.price}</p>
// // // //           <div className="product-rating">
// // // //             <span>Rating: ★★★★☆</span>
// // // //           </div>

// // // //           <div className='product-size'>
// // // //             <label>Color: </label>
// // // //             <select>
// // // //               <option value='41'>Silver</option>
// // // //               <option value='42'>Gold</option>
// // // //             </select>
// // // //           </div>
          
// // // //           <div className="product-quantity" style={inlineStyles.quantityContainer}>
// // // //             <button onClick={handleDecrement} style={inlineStyles.quantityButton}>-</button>
// // // //             <input type="number" value={quantity} readOnly style={inlineStyles.quantityDisplay} />
// // // //             <button onClick={handleIncrement} style={inlineStyles.quantityButton}>+</button>
// // // //           </div>

// // // //           <div className="product-buttons">
// // // //             <button style={inlineStyles.addToCartButton}>Add to Cart</button>
// // // //             <button style={inlineStyles.orderNowButton}>Message</button>
// // // //           </div>

// // // //           <div className="product-description">
// // // //             <h2>Product Description</h2>
// // // //             <p>{product.description}</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div>
// // // //       <header className="header">
// // // //         <h1 className="a2">Product Detail</h1>
// // // //         <h1 className="a1">{product.name}</h1>
// // // //         <nav className="navbar">
// // // //           <a href="#home">Home</a>
// // // //           <a href="#products">Products</a>
// // // //           <a href="#about">About</a>
// // // //           <a href="#contact">Contact</a>
// // // //         </nav>
// // // //       </header>

// // // //       <div className="product-detail">
// // // //         <div className="product-image">
// // // //           <img src={product.mainImage} alt={product.name} />
// // // //           <div className="product-variation">
// // // //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdF5CFzgY4Kh2_RtoKgUHye7X6V6Ldaq56gw&s" alt="Variation 1" />
// // // //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAG-dozMxQr5n2VXctD6CLBvO7ljZ75KBFQg&s" alt="Variation 2" />
// // // //             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8qBDUlc4ZRj1XjELWAN7jmreT3SIiF4H-Q&s" alt="Variation 3" />
// // // //             <img src="https://outerbloom.com/cdn/shop/files/THFGIF2725_Custom-Bangle-Bracelet.jpg" alt="Variation 4" />
// // // //           </div>
// // // //         </div>

// // // //         <div style={inlineStyles.productInfo}>
// // // //           <h1 className="product-title">{product.name}</h1>
// // // //           <p style={inlineStyles.productPrice}>{product.price}</p>
// // // //           <div className="product-rating">
// // // //             <span>Rating: ★★★★☆</span>
// // // //           </div>
          
// // // //           <div className="product-quantity" style={inlineStyles.quantityContainer}>
// // // //             <button onClick={handleDecrement} style={inlineStyles.quantityButton}>-</button>
// // // //             <input type="number" value={quantity} readOnly style={inlineStyles.quantityDisplay} />
// // // //             <button onClick={handleIncrement} style={inlineStyles.quantityButton}>+</button>
// // // //           </div>

// // // //           <div className="product-buttons">
// // // //             <button style={inlineStyles.addToCartButton}>Add to Cart</button>
// // // //             <button style={inlineStyles.orderNowButton}>Message</button>
// // // //           </div>

// // // //           <div className="product-description">
// // // //             <h2>Product Description</h2>
// // // //             <p>{product.description}</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProductDetail;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; 
import "./ProductDetail.css";
import Footer from "./Footer";

const ProductDetail = () => {
  const { id } = useParams();  
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(1);  

  const products = [
    {
      id: "1", 
      name: "Leather Bracelet",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/86/08/fd/8608fd078bbe6becd5d02cd3d9325fe0.jpg",
      description: "Discover the timeless elegance of our Leather Bracelets, crafted from premium genuine leather for durability and style. These bracelets feature a sleek design with adjustable straps, ensuring a comfortable fit for any wrist size. Perfect for casual wear or adding a touch of sophistication to formal outfits, they are available in various colors and patterns to suit your personality. Whether as a thoughtful gift or a personal accessory, our leather bracelets blend fashion and functionality effortlessly.",
      variations: [
        "https://i.pinimg.com/736x/86/08/fd/8608fd078bbe6becd5d02cd3d9325fe0.jpg",
        "https://i.pinimg.com/736x/4a/1c/d2/4a1cd2e98aae4beee7f56a0c60d60c2b.jpg",
        "https://i.pinimg.com/736x/0e/53/8f/0e538f6f5a27d8d49c5f12a62ff388c8.jpg",
        "https://i.pinimg.com/736x/c8/6d/23/c86d2320eb5e9162b3d23dea1cb1ab7a.jpg",
      ],
    },
    {
      id: "2", 
      name: "Bangle Bracelets",
      price: "Rp. 30.000",
      mainImage: "https://i.pinimg.com/736x/9d/d8/a4/9dd8a4bbf04d9d8b5ed90b2ff39b8ce0.jpg",
      description: "Bangle bracelets are circular, rigid jewelry pieces worn around the wrist, typically made of metal, wood, or plastic. They are sleek and stylish, often worn in stacks or individually, adding a touch of elegance and sophistication to any outfit. Perfect for both casual and formal occasions, bangle bracelets come in various designs, from simple and minimalist to ornate and embellished, allowing wearers to express their personal style.",
      variations: [
        "https://i.pinimg.com/736x/9d/d8/a4/9dd8a4bbf04d9d8b5ed90b2ff39b8ce0.jpg",
        "https://i.pinimg.com/736x/39/3f/04/393f04b3e347b5d6b43960bac8477e08.jpg",
        "https://i.pinimg.com/736x/87/cd/93/87cd9380432fe63b784559b92b10f800.jpg",
        "https://i.pinimg.com/736x/b8/ca/9b/b8ca9b76f82543ae93ae18e25990de9f.jpg",
      ],
    },
    {
      id: "3", 
      name: "Beaded Bracelets",
      price: "Rp. 32.000",
      mainImage: "https://i.pinimg.com/736x/ab/29/9f/ab299fef6d9e78d70b27aebbe71fe376.jpg",
      description: "Beaded bracelets are stylish and versatile accessories that feature colorful beads strung together to create unique, eye-catching designs. Often made from a variety of materials such as glass, wood, or stone, these bracelets are perfect for adding a personal touch to any outfit. Whether worn alone or stacked, beaded bracelets are a popular choice for both casual and formal wear, offering a fun and creative way to express individuality and complement various styles.",
      variations: [
        "https://i.pinimg.com/736x/ab/29/9f/ab299fef6d9e78d70b27aebbe71fe376.jpg",
        "https://i.pinimg.com/736x/06/4f/73/064f73fb4d6c9da02d99544ea294eb4a.jpg",
        "https://i.pinimg.com/736x/29/36/43/293643a6007c5c8fb92b82378c82699f.jpg",
        "https://i.pinimg.com/736x/1b/59/f9/1b59f9a9eb736273160fd05bd0ba70a6.jpg",
      ],
    },
    {
      id: "4", 
      name: "Cuff Bracelets",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/40/58/6a/40586a95e67e7446862e1dfe95593343.jpg",
      description: "Cuff bracelets are bold, wide bracelets that typically wrap around the wrist, creating a statement piece of jewelry. They are often made from metal, leather, or other durable materials, and can be designed with smooth, textured, or engraved surfaces. Cuff bracelets have a minimalist yet striking appearance and are versatile, making them suitable for both casual and formal occasions. They can be worn alone for a sleek look or stacked with other bracelets for added flair.",
      variations: [
        "https://i.pinimg.com/736x/40/58/6a/40586a95e67e7446862e1dfe95593343.jpg",
        "https://i.pinimg.com/736x/39/7c/af/397caf252d1fe11189772afb97836c3a.jpg",
        "https://i.pinimg.com/736x/a2/16/9a/a2169a34bf4e2345c8d10789fcedabd0.jpg",
        "https://i.pinimg.com/736x/fa/59/58/fa595845ed16ccc884fa2eb09160340d.jpg",
      ],
    },
    {
      id: "5", 
      name: "Serene Wave Earrings",
      price: "Rp. 25.000",
      mainImage: "https://elfy.co.in/cdn/shop/collections/Group_6.jpg?v=1727954653&width=1500",
      description: "The Serene Wave Earrings are elegant, flowing earrings inspired by the gentle curves of ocean waves. Crafted from high-quality materials like sterling silver or gold, they offer a sleek and modern look. The smooth, fluid design creates a sense of movement and tranquility, making them the perfect accessory for both everyday wear and special occasions. Their understated beauty adds a touch of sophistication, ideal for those who appreciate timeless, minimalist jewelry.",
      variations: [
        "https://elfy.co.in/cdn/shop/collections/Group_6.jpg?v=1727954653&width=1500",
        "https://i.pinimg.com/736x/ac/dc/58/acdc58e4f50e9f353d8af0173e41531f.jpg",
        "https://i.pinimg.com/736x/24/b1/89/24b1890801e6a7317e31e8b5e1981718.jpg",
        "https://i.pinimg.com/736x/07/8e/e4/078ee4e89a15eb3ddc8b5c98f0e620a2.jpg",
      ],
    },
    {
      id: "6", 
      name: "Starlight Cluster Earrings",
      price: "Rp. 30.000",
      mainImage: "https://static.wixstatic.com/media/201157_d0b3d895ba974c9596cd86d5296557bf~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/201157_d0b3d895ba974c9596cd86d5296557bf~mv2.jpg",
      description: "The Starlight Cluster Earrings feature a dazzling arrangement of sparkling gemstones or crystals that resemble a cluster of stars. Designed to catch the light with every movement, these earrings offer a celestial and glamorous look. Perfect for adding a touch of elegance to any outfit, they are ideal for both formal events and evening wear, making a bold yet refined statement with their shimmering beauty.",
      variations: [
        "https://static.wixstatic.com/media/201157_d0b3d895ba974c9596cd86d5296557bf~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/201157_d0b3d895ba974c9596cd86d5296557bf~mv2.jpg",
        "https://i.pinimg.com/736x/66/52/54/665254a0eba3c78d89a28f8360497d4b.jpg",
        "https://i.pinimg.com/736x/07/30/d9/0730d9ee63ab3f155a064e84e4117394.jpg",
        "https://i.pinimg.com/736x/94/2b/80/942b8048d05856d536d8de11c7a8c931.jpg",
      ],
    },
    {
      id: "7", 
      name: "Celestial Hoop Drops",
      price: "Rp. 30.000",
      mainImage: "https://i.pinimg.com/736x/35/5e/ae/355eae2ab0fe66fc3eae4c61f4a0c268.jpg",
      description: "The Celestial Hoop Drops are elegant and striking earrings that feature a perfect blend of modern style and celestial inspiration. Designed with delicate hoops and shimmering details, these earrings capture the beauty of the night sky, often incorporating sparkling stones or a subtle crescent moon shape. Their graceful drop design adds movement and sophistication, making them a versatile accessory for both day and evening wear. Ideal for those who love celestial themes and wish to add a touch of magic to their jewelry collection, the Celestial Hoop Drops are the perfect balance of elegance and charm.",
      variations: [
        "https://i.pinimg.com/736x/35/5e/ae/355eae2ab0fe66fc3eae4c61f4a0c268.jpg",
        "https://i.pinimg.com/736x/13/0f/8b/130f8bc5bd4a144b4539c75d223b7df5.jpg",
        "https://i.pinimg.com/736x/01/34/77/013477d793283888879e57dbdce8fe9f.jpg",
        "https://i.pinimg.com/736x/b0/79/4c/b0794c205cea3cfa30d6b5e6ba7a911f.jpg",
      ],
    },
    {
      id: "8", 
      name: "Aurora Earrings",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/ae/3f/78/ae3f785c00ceb473894972254279ad0c.jpg",
      description: "Discover the timeless elegance of our Leather Bracelets, crafted from premium genuine leather for durability and style. These bracelets feature a sleek design with adjustable straps, ensuring a comfortable fit for any wrist size.",
      variations: [
        "https://i.pinimg.com/736x/ae/3f/78/ae3f785c00ceb473894972254279ad0c.jpg",
        "https://i.pinimg.com/736x/33/8b/6e/338b6e589b4c3ac9ca0c199c71db0910.jpg",
        "https://i.pinimg.com/736x/db/b2/1f/dbb21fab96cdac8d47f86c3a4d6bc9bb.jpg",
        "https://i.pinimg.com/736x/14/92/6c/14926c414aec19cce80f8a919a16629d.jpg",
      ],
    },
    {
      id: "9", 
      name: "Ethereal Dream Pendant",
      price: "Rp. 30.000",
      mainImage: "https://i.pinimg.com/736x/b6/22/e0/b622e01aa8b4f48087a999e20990787b.jpg",
      description: "The Ethereal Dream Pendant is a delicate and enchanting piece of jewelry, designed to evoke a sense of elegance and mystery. Crafted with intricate details, it features a mesmerizing design that captures the light beautifully. This pendant often incorporates gemstones or subtle elements that create a dreamy, almost otherworldly aura. Ideal for both casual and formal occasions, the Ethereal Dream Pendant adds a touch of sophistication and timeless beauty to any outfit, making it a perfect accessory for those who appreciate refined, yet captivating, jewelry.",
      variations: [
        "https://i.pinimg.com/736x/b6/22/e0/b622e01aa8b4f48087a999e20990787b.jpg",
        "https://i.pinimg.com/736x/c0/2e/88/c02e88aad82a313d6b14979301cec6ff.jpg",
        "https://i.pinimg.com/736x/90/e2/c6/90e2c6e20703c87942a479cb40a64167.jpg",
        "https://estheradorned.com/cdn/shop/products/5-1_c48a68e0-dc41-417a-af4b-deb09a1e2a3a.jpg?v=1681201216&width=2048",
      ],
    },
    {
      id: "10", 
      name: "Butterfly Necklaces",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/96/d9/0b/96d90bfbd182cfc3de67eb4201197f98.jpg",
      description: "Discover the timeless elegance of our Leather Bracelets, crafted from premium genuine leather for durability and style. These bracelets feature a sleek design with adjustable straps, ensuring a comfortable fit for any wrist size.",
      variations: [
        "https://i.pinimg.com/736x/96/d9/0b/96d90bfbd182cfc3de67eb4201197f98.jpg",
        "https://i.pinimg.com/736x/34/24/96/342496e5958d08343f1a26713798910d.jpg",
        "https://i.pinimg.com/736x/25/9f/20/259f2058250f697385005d9b67a3b779.jpg",
        "https://i.pinimg.com/736x/66/70/a7/6670a71fae70d2fc12a3b9870a9e4311.jpg",
      ],
    },
    {
      id: "11", 
      name: "Summit & Sea Necklace",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/09/5b/86/095b86968e232c91e79f56e289774556.jpg",
      description: "The Summit & Sea Necklace is a stunning fusion of natural elements, inspired by both the majesty of mountain peaks and the serenity of the ocean. Featuring a combination of smooth, polished stones and textured metalwork, this necklace captures the essence of adventure and tranquility. The design evokes a sense of harmony between land and sea, making it a perfect statement piece for those who appreciate the beauty of nature. Ideal for layering or as a standalone accessory, the Summit & Sea Necklace brings a touch of the great outdoors to any outfit.",
      variations: [
        "https://i.pinimg.com/736x/09/5b/86/095b86968e232c91e79f56e289774556.jpg",
        "https://i.pinimg.com/736x/12/a2/34/12a2341a12da864a5aea2b8ed73945ef.jpg",
        "https://i.pinimg.com/736x/cc/33/35/cc333541e852f0dc9dbd80eca170eff9.jpg",
        "https://i.pinimg.com/736x/24/16/ff/2416fff5a51e6115149207b0b1538cb9.jpg",
      ],
    },
    {
      id: "12", 
      name: "Moonlight Necklace",
      price: "Rp. 35.000",
      mainImage: "https://i.pinimg.com/736x/8d/ee/da/8deedabc3baf7127e1f76cd9c37be9b0.jpg",
      description: "The Moonlight Necklace is an elegant and captivating piece that captures the ethereal glow of the moon. Featuring a delicate chain adorned with a shimmering pendant, this necklace exudes a soft, luminous charm. Its design evokes a sense of mystery and grace, making it the perfect accessory for evening wear or special occasions. With its timeless beauty, the Moonlight Necklace is ideal for adding a touch of celestial elegance to any outfit.",
      variations: [
        "https://i.pinimg.com/736x/8d/ee/da/8deedabc3baf7127e1f76cd9c37be9b0.jpg",
        "https://i.pinimg.com/736x/48/7e/31/487e318b0b944c9d28a969407bd86c27.jpg",
        "https://i.pinimg.com/736x/df/23/9b/df239b939228cc29b517e9e768dd218c.jpg",
        "https://i.pinimg.com/736x/3b/46/ed/3b46ed64fe1853c22347203e635d10dc.jpg",
      ],
    },
  ];

  useEffect(() => {
    const selectedProduct = products.find((product) => product.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.mainImage);
    }
  }, [id]);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleVariationClick = (image) => {
    setMainImage(image);
  };

  const handleSizeChange = (event) => {
    const selectedSize = parseInt(event.target.value);
    setSelectedSize(selectedSize); 
    setMainImage(product.variations[selectedSize - 1]); 
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <header className="header">
        <h1 className="a2">
          Product Detail <span className="product-name">{product.name}</span>
        </h1>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link> 
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <div className="product-detail">
        <div className="product-image">
          <img src={mainImage} alt={product.name} />
          <div className="product-variation">
            {product.variations.map((variation, index) => (
              <img
                key={index}
                src={variation}
                alt={`Variation ${index + 1}`}
                onClick={() => handleVariationClick(variation)}
                className="variation-image"
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-price">{product.price}</p> 
          <div className="product-rating">
            <span>Rating: ★★★★☆</span>
          </div>

          <div className="product-size">
            <label>Option: </label>
            <select value={selectedSize} onChange={handleSizeChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="product-quantity">
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement}>+</button>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn">Add to Cart</button>
            <button className="order-now-btn">Message</button>
          </div>

          <div className="product-description">
            <h2>Product Description</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
