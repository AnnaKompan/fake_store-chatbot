import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]); // store products
  const [loading, setloading] = useState(true); // loading state

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
  // render
  return (
    <>
      <div className="container">
        <ul className="header_list">
          <li className="header_list_item">FAKE LOGO</li>
          <li className="header_list_item">HOME</li>
          <li className="header_list_item">WOMEN</li>
          <li className="header_list_item">MEN</li>
          <li className="header_list_item">KIDS</li>
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
                  {product.price}
                </p>
              </div>
              <button type="button" className="items_btn">
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
