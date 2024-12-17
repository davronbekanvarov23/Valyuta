import React, { useState, useEffect } from "react";

const Home = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [rates, setRates] = useState({});

  const currencies = ["USD", "EUR", "GBP", "JPY", "UZS"];

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      setExchangeRate(data.rates[toCurrency]);
      setRates(data.rates);
    };

    if (fromCurrency && toCurrency) {
      fetchExchangeRate();
    }
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (amount && exchangeRate) {
      setConvertedAmount(amount * exchangeRate);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* First Card */}
        <div className="col-12 col-md-6 ">
          <div
            className="card p-4 shadow-lg "
            style={{
              borderRadius: "15px",
              background: "linear-gradient(145deg, #6e7dff, #5560ea)",
              height: "400px",
            }}
          >
            <h2 className="text-center text-white mb-4">Currency Converter</h2>

            <div className="mb-3">
              <label className="form-label text-white">Amount:</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                style={{ borderRadius: "10px" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-white">From Currency:</label>
              <select
                className="form-select"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                style={{ borderRadius: "10px" }}
              >
                <option value="UZS">UZS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label text-white">To Currency:</label>
              <select
                className="form-select"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                style={{ borderRadius: "10px" }}
              >
                <option value="UZS">UZS</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
              </select>
            </div>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary btn-lg"
                onClick={handleConvert}
                style={{
                  borderRadius: "10px",
                  background: "#4e73df",
                  border: "none",
                }}
              >
                Convert
              </button>
            </div>

            {convertedAmount !== null && (
              <div className="mt-4">
                <h3 className="text-center text-white">
                  Converted Amount: {convertedAmount.toFixed(2)} {toCurrency}
                </h3>
              </div>
            )}
          </div>
        </div>

        {/* Second Card */}
        <div className="col-12 col-md-6">
          <div
            className="card shadow-lg p-4 h-100"
            style={{
              borderRadius: "15px",
              background: "linear-gradient(145deg, #6e7dff, #5560ea)",
            }}
          >
            <h3 className="text-center text-white mb-4">Rates to UZS</h3>
            <ul className="list-group">
              {currencies.map((currency) => (
                <li key={currency} className="list-group-item">
                  1 {currency} ={" "}
                  {rates[currency]
                    ? (rates[currency] * rates["UZS"]).toFixed(2)
                    : "Loading..."}{" "}
                  UZS
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
