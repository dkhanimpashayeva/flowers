import React, { useEffect, useState } from "react";
import "./Flowerspricing.scss";
// import axios from 'axios'
const Flowerspricing = () => {
  const [data, setData] = useState([]);
  // const getData=async()=>{
  //     const res=axios.get("http://localhost:8080/flowers")
  //     setData(res.data)
  // }

  const getData = () => {
    fetch("http://example.com/movies.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="flowerspricing">
      <div className="container">
        <div className="flowerspricing-title">
          '<span>Devoted to wonderful beauty</span>
          <h2>Our Portfolio</h2>
        </div>
        <div className="flowerspricing-wrapper">
          <div className="row">
            {data &&
              data.map((e) => (
                <div className="col-4" key={e._id}>
                  <div className="flower-card">
                    <img src={e.url} alt="flower" />
                    <h6>{e.name}</h6>
                    <span>{e.price}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowerspricing;
