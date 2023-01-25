import React, { useEffect, useState } from "react";
import "./Flowerspricing.scss";
import axios from "axios";
const Flowerspricing = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/flowers");
    setData(res.data);
  };

  //sort data
  const [sorted, setSorted] = useState({ sorted: "price", reversed: false });
  const sortByPrice = () => {
    setSorted({ sorted: "price", reversed: !sorted.reversed });
    const datacopy = [...data];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
    setData(datacopy);
  };
  //search data
  const [search, setSearch] = useState("");

  // const getData = () => {
  //   fetch("http://example.com/movies.json")
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // };

  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/flowers/${id}`);
    getData();
  };

  return (
    <section className="flowerspricing">
      <div className="container">
        <div className="flowerspricing-title">
          '<span>Devoted to wonderful beauty</span>
          <h2>Our Portfolio</h2>
        </div>
        <div className="flowerspricing-wrapper">
          <button onClick={sortByPrice}>Sort data</button>
          <input type="search"  onChange={(e)=>setSearch(e.target.value)}/>
          <div className="row">
            {data &&
              data
                .filter((product) => {
                  return search.trim().toLowerCase() === ""
                    ? product
                    : product.name.toLowerCase().includes(search);
                })

                .map((product) => (
                  <div className="col-4" key={product._id}>
                    <div className="flower-card">
                      <img src={product.url} alt="flower" />
                      <h6>{product.name}</h6>
                      <span>{product.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => deleteData(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flowerspricing;
