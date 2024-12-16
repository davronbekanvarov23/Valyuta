import React, { useState } from "react";
import { useDataContext } from "../../context";

const ModalExample = () => {
  const { addData } = useDataContext();
  const [formData, setFormData] = useState({
    action: "kirim",
    amount: 0,
    title: "",
    type: "health",
    description: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().slice(0, 10);

    addData({
      ...formData,
      date: currentDate,
    });

    setFormData({
      action: "kirim",
      amount: 0,
      title: "",
      type: "health",
      description: "",
    });

    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary">
        ADD
      </button>

      {isModalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
            color: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              width: "300px",
            }}
          >
            <h3>Modal</h3>
            <form onSubmit={handleSubmit}>
              <select name="action" id="action" onChange={handleChange}>
                <option value="kirim">kirim</option>
                <option value="chiqim">chiqim</option>
              </select>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                style={{ width: "100%", marginBottom: "10px" }}
              >
                <option value="health">Health</option>
                <option value="product">Product</option>
                <option value="kommunal">Kommunal</option>
                <option value="game">Game</option>
              </select>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                style={{ width: "100%", marginBottom: "10px" }}
              ></textarea>

              <button
                type="submit"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add Data
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalExample;
