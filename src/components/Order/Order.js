import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useProducts from "../../hooks/useProducts";

const Order = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [myItem, setMyItem] = useState();

  useEffect(() => {
    const url = `https://hidden-sierra-80840.herokuapp.com/items/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyItem(data));
  }, [id]);

  console.log(myItem);

  const handleOrder = (e) => {
    e.preventDefault();

    const order = {
      email: user.email,
      product: myItem.name,
      productId: myItem._id,
      price: myItem.price,
      img: myItem.img,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    const url = `https://hidden-sierra-80840.herokuapp.com/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Order Placed Successfully");
        e.target.reset();
      });
  };

  return (
    <div>
      <Form
        onSubmit={handleOrder}
        className=" container-lg w-75 shadow mt-4 rounded-3"
      >
        <h3 className="text-center pt-3 text-success">Place Your Order</h3>
        <Form.Group
          className="mb-3 pt-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            value={user?.displayName}
            readOnly
            required
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={user?.email}
            readOnly
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="address"
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            placeholder="phone number"
            required
          />
        </Form.Group>
        <div className="text-center">
          <button
            className="btn btn-primary mb-4 ps-5 pe-5 fw-bold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Order;
