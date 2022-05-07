import { Button } from "bootstrap";
import React from "react";
import { Form } from "react-bootstrap";

const AddItem = () => {

    const handleAddItem = (event) =>{
        event.preventDefault();
    }
  return (
    <div>
      <Form onSubmit={handleAddItem} className=" container-lg w-75 shadow mt-4 rounded-3">
        <h3 className="text-center pt-3">Add Item</h3>
        <Form.Group
          className="mb-3 pt-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="product name" />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="description" rows={2} />
          </Form.Group>
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="price" />
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" placeholder="quantity" />
        </Form.Group>
        <Form.Group
          className="mb-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Seller</Form.Label>
          <Form.Control type="text" placeholder="seller" />
        </Form.Group>
         
         <div className="text-center">
         <button className="btn btn-primary mb-4 ps-5 pe-5" type="submit">
          Submit
        </button>
         </div>
      </Form>
    </div>
  );
};

export default AddItem;
