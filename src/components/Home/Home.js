import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import image from "../../image/Banner.jpg";
import Products from "../Products/Products";

const Home = () => {
  const [product] = useProducts();

  return (
    <div>
      
      <div className="image">
        <img className="img-fluid w-100" src={image} alt="" />
      </div>


      <div>
        <h1 className="text-center mt-5">Inventory Items</h1>
      <Row xs={1} md={2} lg={3} className="g-4 container m-auto">
        {product.slice(0,6).map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </Row>

      <div className=" container text-center">
        <Link  to='/manage' className="btn btn-secondary mt-5 ps-5 pe-5">Manage Inventories</Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
