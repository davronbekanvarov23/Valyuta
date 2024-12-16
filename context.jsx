import React, { createContext, useState, useEffect, useContext } from "react";

// Initialize the context
const DataContext = createContext(undefined);

// Helper function to get data from localStorage
const getLocalStorageData = () => {
  const storedData = localStorage.getItem("data");
  return storedData ? JSON.parse(storedData) : [];
};

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(getLocalStorageData);
  const [filteredData, setFilteredData] = useState(data);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Function to add new data
  const addData = (item) => {
    setData((prevData) => [...prevData, item]);
    setFilteredData((prevData) => [...prevData, item]);
  };

  const filterData = (filter) => {
    const { fromDate, toDate, type, action } = filter;

    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      const from = fromDate ? new Date(fromDate) : null;
      const to = toDate ? new Date(toDate) : null;

      const isWithinDateRange =
        (!from || itemDate >= from) && (!to || itemDate <= to);

      if (action && item.action !== action) {
        return false;
      }

      if (type && item.type !== type) {
        return false;
      }

      return isWithinDateRange;
    });

    setFilteredData(filtered);
  };

  const resetFilter = () => {
    setFilteredData(data);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addData,
        filteredData,
        filterData,
        resetFilter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook for consuming the context
export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
