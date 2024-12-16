import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context";
import { calculateSum, formatCurrency } from "../utils";
function Table() {
  const { filteredData } = useDataContext();
  const [conversion_rate, setconversion_rate] = useState(12800);
  const [summary, setSummary] = useState({
    income: 0,
    outcome: 0,
  });
  useEffect(() => {
    (async () => {
      await fetch(
        "https://v6.exchangerate-api.com/v6/a776f082623053a209c69f10/latest/USD"
      ).then(async (res) => {
        const data = await res.json();
        setconversion_rate(data.conversion_rates.UZS);
      });
    })();

    setSummary({
      income: calculateSum(filteredData).income,
      outcome: calculateSum(filteredData).outcome,
    });
  }, [filteredData]);
  return (
    <>
      <table className="table">
        <thead className="bg-black text-white">
          <tr>
            <th scope="col">Price</th>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <th>
                <span>{parseInt(item.amount).toFixed(2)}UZS</span>
                <br />
                <span>
                  {parseInt(
                    item.amount / parseFloat(parseInt(conversion_rate))
                  ).toFixed(2)}
                  USD
                </span>
              </th>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.description.substring(0, 40)}</td>
              <td>{new Date(item.date).toDateString()}</td>
              <td>{item.action}</td>
            </tr>
          ))}
          {!filteredData.length==0 && (
            <tr>
              <th style={{ color: "green" }}>
                kirim:{formatCurrency(summary.income)}
              </th>
              <th>chiqim:{formatCurrency(summary.outcome)}</th>
              <th></th>
              <th></th>
              <th>
                Daromad: {formatCurrency(summary.income - summary.outcome)}
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
