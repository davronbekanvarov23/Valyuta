import { useState } from "react";
import { useDataContext } from "../../context";

const Filter = () => {
  const [filter, setFilter] = useState({ fromDate: "", toDate: "", type: "" });
  const { resetFilter, filterData } = useDataContext();
  return (
    <div>
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h5>Filter Options</h5>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="d-flex gap-1 mb-4">
              {" "}
              <div>
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  onChange={(e) => {
                    setFilter({ ...filter, fromDate: e.target.value });
                  }}
                  name="startDate"
                  className="form-control"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={(e) =>
                    setFilter({ ...filter, toDate: e.target.value })
                  }
                  className="form-control"
                />
              </div>
            </div>

            <div className="d-flex justify-content-between mb-4">
              <div className="w-50">
                <label htmlFor="type" className="form-label">
                  Action
                </label>
                <select
                  onChange={(e) =>
                    setFilter({ ...filter, action: e.target.value })
                  }
                  id="type"
                  name="type"
                  className="form-select"
                >
                  <option value="">All</option>
                  <option value="kirim">Kirim</option>
                  <option value="chiqim">Chiqim</option>
                </select>
              </div>

              <div className="w-50">
                <label htmlFor="category" className="form-label">
                  Type
                </label>
                <select
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFilter({ ...filter, type: e.target.value });
                  }}
                  id="category"
                  name="category"
                  className="form-select"
                >
                  <option value="">All</option>
                  <option value="health">Health</option>
                  <option value="product">Product</option>
                  <option value="kommunal">Kommunal</option>
                  <option value="game">Game</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button
                onClick={resetFilter}
                type="button"
                className="btn btn-secondary"
              >
                Clear
              </button>
              <button
                onClick={() => filterData(filter)}
                type="submit"
                className="btn btn-primary"
              >
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
