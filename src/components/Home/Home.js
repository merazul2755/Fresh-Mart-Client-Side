import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import image from "../../image/Banner.jpg";
import Products from "../Products/Products";
import Loading from "../Loading/Loading";

const Home = () => {
  const [product] = useProducts();
  if (product.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="image">
        <img className="img-fluid w-100" src={image} alt="" />
      </div>

      <div>
        <h1 className="text-center mt-5">Inventory Items</h1>
        <Row xs={1} md={2} lg={3} className="g-4 container m-auto">
          {product.slice(0, 6).map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </Row>

        <div className=" container text-center">
          <Link to="/manage" className="btn btn-secondary mt-5 ps-5 pe-5">
            Manage Inventories
          </Link>
        </div>
      </div>

      <div className="container p-5 border shadow mt-5 border-3">
        <h1>SHOP Min 400Tk Get 4% Discount</h1>
        <h5>Conditions:</h5>
        <ul><li>Maximum 200Tk Discount/Order</li>
        <li>Voucher discount will be applied on Non-Offer Items only</li>
        <li>This voucher is not applicable on any Soyabean Oil/Selected Rice Items/HappyHour Items</li>
        <li>Cart Total needs to be Tk400+ without any offer Item/s</li>
        <li>Customers are allowed to use only 1 voucher for each order.</li>
        <li className="text-danger fw-bold">This voucher is not applicable on any Soyabean Oil/Selected Rice Items/Beef, L.Sugar, Baby Foods</li></ul>
      </div>
    </div>
  );
};

export default Home;
