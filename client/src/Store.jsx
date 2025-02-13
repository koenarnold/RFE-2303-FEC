import React, {useState, useEffect} from "react";
import Product from './Product.jsx';
import axios from 'axios';
import Logo from './Logo.png';

function Store () {

  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [background, setBackground] = useState("#DEE4E7");
  const [color, setColor] = useState('black');
  const [modeName, setModeName] = useState("Dark Mode")

  useEffect(() => {axios.get('/listProducts')
  .then((res) => {
    setProducts(res.data);
    setCurrentProduct(res.data[7]);
  })
}, []);

  const changeMode = (e) => {
    e.preventDefault();
    setColor((color) => (
      color === 'black' ? "white" : "black"
    ))
    setBackground((color) => (
      color === "#DEE4E7" ? "#173057" : "#DEE4E7"
    ))
    setModeName((name) => (
      name === 'Dark Mode' ? "Light Mode" : "Dark Mode"
    ))
  }

  return(
    <div style={{background: background, color: color, border: "1px solid black"}}>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div style={{display: "flex"}}>
          <img style={{width: '25wh', height: '25vh', marginLeft: '8%'}} src={Logo} />
          <div style={{
            fontSize: '5vh',
            fontFamily: 'Orbitron, sans-serif',
            display: "flex",
            alignItems: "center",
            color: "white",
            marginTop: "10px",
            textShadow: "3px 2px 2px #808080"
          }}>MART
        </div>
        <div>"W"! "W" is for WALL-E, your very best friend."</div>
      </div>
      <button style={{height: "20px"}} onClick={changeMode}>{modeName}</button>
      </div>

      <Product products={products} currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}/>
    </div>
  );
}

export default Store;