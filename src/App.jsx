import { useEffect, useState } from "react";
import "./App.css";
import CartIcon from "./assets/shopping-cart-outline-svgrepo-com (1).svg";

function App() {
  const [products, setProducts] = useState([]); // store products
  const [loading, setloading] = useState(true); // loading state
  const [cart, setCart] = useState([]); // store added products

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // add new product
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setloading(false);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
        setloading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
        <ul className="header_list">
          <li className="header_list_item">
            <a href="../index.html">
              FAKE <b>LOGO</b>
            </a>
          </li>
          <li className="header_list_item">
            <a href="../index.html">HOME</a>
          </li>
          <li className="header_list_item">
            <a href="../index.html">WOMEN</a>
          </li>
          <li className="header_list_item">
            <a href="../index.html">MEN</a>
          </li>
          <li className="header_list_item">
            <a href="../index.html">KIDS</a>
          </li>
          <li className="header_list_item">
            Cart: {cart.length} items
            <img
              src={CartIcon}
              alt="cart"
              width="25"
              style={{ marginLeft: "5px" }}
            />
          </li>
        </ul>
        <ul className="items_list">
          {products.map((product) => (
            <li key={product.id} className="items">
              <a href="">
                <img
                  src={product.image}
                  alt={product.title}
                  className="items_img"
                />
              </a>
              <div className="items_info">
                <p className="items_info_text">
                  <b>{product.title}</b>
                  <br />
                  <b>{product.price}</b>
                </p>
              </div>
              <button
                type="button"
                className="items_btn"
                onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
