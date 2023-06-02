import { React, useState, useEffect } from "react";
import "../css/Bitcoin.css";
//
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
////////////////
export default function Bitcoin() {
  {
    /* <!-- fetch Data STARTS HERE --> */
  }
  const [bitcoin_data, setBitcoin_data] = useState([]);

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
  {
    /* <!-- CHARTS STARTS HERE --> */
  }

  if (bitcoin_data.bpi) {
    let priceEU = bitcoin_data.bpi.EUR.rate.replace(/\D/g, "").slice(0, 5);
    let priceUSD = bitcoin_data.bpi.USD.rate.replace(/\D/g, "").slice(0, 5);
    let priceGBP = bitcoin_data.bpi.GBP.rate.replace(/\D/g, "").slice(0, 5);
    //
    var barGraphData = {
      labels: ["Bitcoin"],
      datasets: [
        {
          label: "Bitcoin to EUR",
          data: [priceEU, 66666],
          borderColor: "black",
          backgroundColor: "blue",
        },
        {
          label: "Bitcoin to USD",
          data: [priceUSD, 66666],
          borderColor: "black",
          backgroundColor: "red",
        },
        {
          label: "Bitcoin to GBP",
          data: [priceGBP, 66666],
          borderColor: "black",
          backgroundColor: "green",
        },
      ],
    };
  }

  {
    /* <!-- CHARTS ENDS HERE --> */
  }
  // return return return return return return return return
  return (
    <div>
      <div>
        <h2>Bitcoin Price informaiton</h2>
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
            {bitcoin_data.bpi ? (
              <tr colSpan="12">
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
              <tr colSpan="12">
                <td>
                  <h2>Data failed to load</h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <!-- CHARTS STARTS HERE --> */}
        {bitcoin_data.bpi ? (
          <Bar
            data={barGraphData}
            options={{
              responsive: true,
            }}
          />
        ) : (
          <div colSpan="12">
            <h2>Data failed to load</h2>
          </div>
        )}

        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </div>
  );
}
