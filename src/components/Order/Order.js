import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const {id} = useParams();
    console.log(id)
    const [user] = useAuthState(auth);
    const [product] = useProducts();

    const handleOrder= (e) =>{
        e.preventDefault();

        const order = {
            email: user.email,
            product: product.name,
            productId: product._id,
            address: e.target.address.value,
            phone: e.target.phone.value,

        }
        console.log({order});
    }

    
    return (
        <div>
            <Form onSubmit={handleOrder}
        
        className=" container-lg w-75 shadow mt-4 rounded-3"
      >
        <h3 className="text-center pt-3 text-success">Place Your Order</h3>
        <Form.Group
          className="mb-3 pt-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="name" name="name" value={user?.displayName} readOnly required/>

          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" name="email"  value={user?.email} readOnly required/>
         
        </Form.Group>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" placeholder="address" required/>
        </Form.Group>
        
        <Form.Group
          className="mb-4 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" name="phone" placeholder="phone number" required/>
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

export default Order;