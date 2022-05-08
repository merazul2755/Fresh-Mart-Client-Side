import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useProducts from "../../hooks/useProducts";
import Loading from '../Loading/Loading'

const Manage = () => {
  const [product, setProduct] = useProducts();

  if (product.length === 0) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) =>{
      const procced = window.confirm('Are sure want to delete?')

      if(procced){
        const url = `https://hidden-sierra-80840.herokuapp.com/items/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
              toast('Item Successfully Deleted')
              const remainingItem = product.filter(product => product._id !== id);
              setProduct(remainingItem);

          });
      }
  }

  return (
    <div className="container">
        <h3 className="text-danger text-center mt-3 mb-4">Manage Inventory</h3>
        <div className="text-end mt-3">
            <Link to='/addItem' className="btn btn-warning text-dark fw-bold ps-5 pe-5">Add Item</Link>
        </div>
        <div>
        <div className="mt-3 bg-dark text-white shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center pt-2 pb-2">
            <Col><h6>Image</h6></Col>
            <Col><h6>Name</h6></Col>
            <Col><h6>Price</h6></Col>
            <Col><h6>Quantity</h6></Col>
            <Col><h6>Remark</h6></Col>
          </Row>
        </div>
        </div>
      {product.map((product) => (
        <div key={product._id} className="shadow mb-3 rounded-3 text-center">
          <Row className="align-items-center">
            <Col>
            <img width={'80px'} src={product.img} alt="" />
            </Col>
            <Col>{product.name}</Col>
            <Col>{product.price}</Col>
            <Col>{product.quantity}</Col>
            <Col><button onClick={()=> handleDelete(product._id)} className="btn btn-danger">Delete</button></Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Manage;
