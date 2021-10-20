import React from "react";
import "./homegrid.css";

function Homegrid() {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0107/9820/2938/products/gmmobile1_grande.png?v=1629754332",
      title: "shoes",
      price: "10$",
    },
    {
      id: 2,
      img: "https://img.joomcdn.net/a24f70d27ca2552e92aa45c9005827c82b915156_original.jpeg",
      title: "shirt",
      price: "200$",
    },
    {
      id: 3,
      img: "https://productimages.hepsiburada.net/l/32/600-800/10359186194482.jpg",
      title: "hoodie",
      price: "100$",
    },
  ];
  return (
    <>
      <div className="featured-items">
        <h1>Featured</h1>
      </div>
      <hr />
      <div className="item-grid">
        {data.map((d) => (
          <div className="item">
            <div className="card">
              <div className="img-container">
                <img src={d.img} alt="lol" className="item-img" />
              </div>
              <div className="card-footer">
                <p>{d.title}</p>
                <h3>{d.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homegrid;
