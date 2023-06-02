import "../css/SearchBar.css";
import React, { useState } from "react";
////////////////

export default function SearchBar() {
  ////////////////
  const [filteredResult, setFilteredResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  //
  let Product_API_data = [
    {
      id: 1,
      product_name: "product_name 1",
      product_description: "product_description 1",
    },
    {
      id: 2,
      product_name: "product_name 2",
      product_description: "product_description 2",
    },
    {
      id: 3,
      product_name: "product_name 3",
      product_description: "product_description 3",
    },
  ];
  //
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = Product_API_data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResult(filteredData);
    } else {
      setFilteredResult(Product_API_data);
    }
  };
  ////////////////

  return (
    <div className="App">
      <form>
        <input
          type="search"
          placeholder="Search here"
          onChange={(element) => searchItems(element.target.value)}
        />
        <ul>
          {searchInput.length > 1
            ? filteredResult.map((item) => {
                return (
                  <div key={item.id}>
                    <h2>{item.product_name}</h2>
                    <p>{item.product_description}</p>
                  </div>
                );
              })
            : Product_API_data.map((item) => {
                return (
                  <div key={item.id}>
                    <h2>{item.product_name}</h2>
                    <p>{item.product_description}</p>
                  </div>
                );
              })}
        </ul>
      </form>
    </div>
  );
}
