import React from "react";
import Chart from "../components/Chart";
import Table from "../components/Table";
import ModalExample from "../components/Modal";
import Filter from "../components/Filter";

function Monitoring() {
  return (
    <div className="container d-flex gap-5  ">
      <div
        className="t-haight "
        style={{ height: "500px", overflowY: "auto", flex: "1" }}
      >
        <Table />
      </div>
      <div className=" d-flex flex-column gap-1">
        <Filter />
        <Chart />
      </div>
    </div>
  );
}

export default Monitoring;
