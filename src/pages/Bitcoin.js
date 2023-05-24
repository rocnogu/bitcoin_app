import { React, useState, useEffect } from "react";
import "./Bitcoin.css";
////////////////
export default function Bitcoin() {
  ////////////////
  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
  const [bitcoin_data, setBitcoin_data] = useState([]);

  ////////////////

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      if (!response.ok) {
        throw new Error("Data coud not be fetched!");
      } else {
        return response.json();
      }
    };

    fetchData()
      .then((data) => {
        setBitcoin_data(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  ////////////////
  ////////////////
  ////////////////
  //console.log(bitcoin_data);

  // return return return return return return return return
  return (
    <div className="main_Bitcoin_div">
      <div>
        <h1>Bitcoin Price informaiton</h1>
      </div>
      <div className="main_bar_Bitcoin">
        <table>
          <thead id="Bitcoin_table_head">
            <tr colSpan="12">
              <th>Updated</th>
              <th>Bitcoin to EUR</th>
              <th>Bitcoin to USD</th>
              <th>Bitcoin to GBP</th>
            </tr>
          </thead>
          <tbody>
            {/* 
            {bitcoin_data && (
              <tr>
                <td>
                  <p>{bitcoin_data.time.updated}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.EUR.rate}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.USD.rate}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.GBP.rate}</p>
                </td>
              </tr>
            )} */}

            {/*   {bitcoin_data ? (
              <tr>
                <td>
                  <p>{bitcoin_data.time.updated}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.EUR.rate}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.USD.rate}</p>
                </td>
                <td>
                  <p>{bitcoin_data.bpi.GBP.rate}</p>
                </td>
              </tr>
            ) : (
              <p>second option</p>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
