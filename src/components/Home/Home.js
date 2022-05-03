import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import image from "../../image/Banner.jpg";
import Products from "../Product/Products";

const Home = () => {
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <div className="image">
        <img className="img-fluid w-100" src={image} alt="" />
      </div>

      <div>
        <Card style={{ width: "18rem" }}>
            {product.map(product => <Products key={product.id} product={product}></Products>)}
        </Card>
      </div>
    </div>
  );
};

export default Home;
