import { useEffect, useState } from "react";

const useProducts = () => {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://hidden-sierra-80840.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return [product, setProduct];

}

export default useProducts;