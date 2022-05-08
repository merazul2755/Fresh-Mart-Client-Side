import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from '../Loading/Loading'


const Items = () => {
  const { id } = useParams();
  
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://hidden-sierra-80840.herokuapp.com/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  if(item ===0){
    return <Loading></Loading>
  }

  const handleRestockQuantity = (event) => {
    const quantity =
      parseInt(event.target.restock.value) + parseInt(item.quantity);
    const restock = { quantity };

    const url = `https://hidden-sierra-80840.herokuapp.com/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(restock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        event.target.reset();
      });
  };

  const handleDelivered = () => {
    const quantity = parseInt(item.quantity) - 1;
    const url = `https://hidden-sierra-80840.herokuapp.com/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
      });
      window.location.reload();
  };

  const hadleToOrder =(id)=>{
    navigate(`/checkout/${id}`)
  }



  


  return (
    <>
      <div>
        <h2 className="text-center mt-2">Product Details</h2>
        <div className="container text-center mt-4">
          <h4 className="mb-3 text-secondary">Restock Quantity</h4>
          <form
            onSubmit={handleRestockQuantity}
            className="d-flex justify-content-center"
          >
            <input
              type="number"
              name="restock"
              className="form-control w-25 me-3"
              placeholder="Restock your quantity here"
              required
            />

            <input
              type="submit"
              className="btn btn-outline-primary"
              value="Restock"
            />
          </form>
        </div>
      </div>
      <Card className=" card shadow m-auto mt-5" style={{ width: "20rem" }}>
        <Card.Img className="w-75 m-auto" variant="top" src={item?.img} />
        <Card.Body>
          <Card.Title>{item?.name}</Card.Title>
          <Card.Text>{item?.des}</Card.Text>
          <Card.Text>
            <strong>Price: ৳{item?.price}</strong>
          </Card.Text>
          <Card.Text>
            <strong>Quantity:</strong> {item?.quantity}
          </Card.Text>
          <Card.Text>
            <small>Suplier: {item?.suplier}</small>
          </Card.Text>
          {
            item.quantity === 0 ? <button className="btn btn-danger w-100">
            Sold Out
          </button>: 
          <div className="d-flex justify-content-between"><button onClick={handleDelivered} className="btn btn-success ps-4 pe-4">
          Delivered
        </button>
        <button onClick={()=>hadleToOrder(id)} className="btn btn-outline-danger ps-4 pe-4 ">
            Check Out
          </button>
          </div>
          }
          
        </Card.Body>
      </Card>
      <div className=" container text-center">
        <Link  to='/manage' className="btn btn-secondary mt-5 ps-5 pe-5">Manage Inventories</Link>
      </div>
    </>
  );
};

export default Items;
