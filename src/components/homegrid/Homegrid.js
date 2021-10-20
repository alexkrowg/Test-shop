import React from "react";
import "./homegrid.css";
import { data } from "../../data";

function Homegrid() {
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
