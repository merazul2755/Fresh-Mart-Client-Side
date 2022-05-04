import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Products = ({product}) => {
  const {_id, name, img, des,price,quantity,suplier } = product;
  const navigate = useNavigate();

  const handleNavigateToItems = (id) =>{
    navigate(`/items/${id}`);
  }
  return (
    <div>
      <Card className=" shadow" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{des.slice(0, 40)+ "...."}</Card.Text>
          <Card.Text><strong>Price: ৳{price}</strong></Card.Text>
          <Card.Text><strong>Quantity:</strong> {quantity}</Card.Text>
          <Card.Text> <small>Suplier: {suplier}</small></Card.Text>
          <button onClick={()=>handleNavigateToItems(_id)} className="btn btn-success w-100">Update</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
