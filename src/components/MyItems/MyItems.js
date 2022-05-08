import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyItems = () => {
  const [orders, setOrder] = useState();
  const [user] = useAuthState(auth);
  console.log(orders);

  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user]);

  const handleDeleteOrder = (id) => {
    const procced = window.confirm("Are sure want to delete?");

    if (procced) {
      const url = `http://localhost:5000/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Item Successfully Deleted");
          const remainingItem = orders.filter((order) => order._id !== id);
          setOrder(remainingItem);
        });
    }
  };

  return (
    <div className="container">
      <h3 className="text-danger text-center mt-3 mb-4">Manage Inventory</h3>
      <div>
        <div className="mt-3 bg-dark text-white shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center pt-2 pb-2">
            <Col>
              <h6>Image</h6>
            </Col>
            <Col>
              <h6>Name</h6>
            </Col>
            <Col>
              <h6>Price</h6>
            </Col>
            <Col>
              <h6>email</h6>
            </Col>
            <Col>
              <h6>Remark</h6>
            </Col>
          </Row>
        </div>
      </div>
      {orders?.map((order) => (
        <div key={order._id} className="shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center">
            <Col>
              <img width={"80px"} src={order?.img} alt="" />
            </Col>
            <Col>{order?.product}</Col>
            <Col>{order?.price}</Col>
            <Col>{order?.email}</Col>
            <Col>
              <button
                onClick={() => handleDeleteOrder(order._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
