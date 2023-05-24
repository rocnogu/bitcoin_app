import { React, useState, useEffect } from "react";
import "./Bitcoin.css";
////////////////
export default function Test() {
  ////////////////
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const responseData = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        ).then((response) => response.json());

        setProducts(responseData);
      } catch {
        setError("Could not load info at the moment");
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  console.log(products.bpi.EUR.rate);

  return (
    <div>
      <h1>Our Products</h1>
      {isLoading ? <h1>isLoading</h1> : null}
      {error && <h1>{error}</h1>}
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        {/* <p>{products.bpi.GBP.rate}</p> */}
      </div>
    </div>
  );
}
