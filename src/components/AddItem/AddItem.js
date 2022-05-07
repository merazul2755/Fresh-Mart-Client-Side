import React, { Children } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";

const AddItem = () => {
  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const des = event.target.des.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const seller = event.target.seller.value;
    const img = event.target.img.value;

    const addProduct = {name,des,price,quantity,seller,img};

    const url = `http://localhost:5000/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Product Add Successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <Form
        onSubmit={handleAddItem}
        className=" container-lg w-75 shadow mt-4 rounded-3"
      >
        <h3 className="text-center pt-3 text-success">Add Item</h3>
        <Form.Group
          className="mb-3 pt-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="product name" name="name" required/>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="des" placeholder="description" rows={2} required/>
          </Form.Group>
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" placeholder="price" required/>
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" placeholder="quantity" required/>
        </Form.Group>
        <Form.Group
          className="mb-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Seller</Form.Label>
          <Form.Control type="text" name="seller" placeholder="seller" required/>
        </Form.Group>
        <Form.Group
          className="mb-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" name="img" placeholder="img url" required/>
        </Form.Group>

        <div className="text-center">
          <button className="btn btn-primary mb-4 ps-5 pe-5 fw-bold" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddItem;
