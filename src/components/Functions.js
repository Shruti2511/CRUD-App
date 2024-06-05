import React, { useState } from "react";
import "./Functions.css";
import axios from "axios";

const CRUDTable = () => {
  const [items, setItems] = useState([
    { id: 1, name: "", price: "" },
    { id: 2, name: "", price: "" },
    { id: 3, name: "", price: "" },
  ]);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e, id, field) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleDeleteRow = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleAddRow = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, name: "", price: "" }]);
  };

  const handleCalculateTotal = () => {
    const totalValue = items.reduce(
      (acc, curr) => acc + parseFloat(curr.price || 0),
      0
    );
    setTotal(totalValue.toFixed(2));

    sendDataToBackend({
      items,
      total: totalValue.toFixed(2),
    });
  };

  // Function to send data to backend
  const sendDataToBackend = async (data) => {
    try {
      await axios.post("http://localhost:5000/user", data); // Assuming backend API endpoint is /api/save-data
      console.log("Data sent to backend successfully!");
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="crud-container">
      <div className="column-labels">
        <span>Customer Segment</span>
        <span>Size</span>
      </div>
      <div className="crud-table">
        {items.map((item) => (
          <div key={item.id} className="crud-row">
            <button onClick={() => handleDeleteRow(item.id)}>-</button>
            <input
              type="text"
              value={item.name}
              placeholder="Enter Name"
              onChange={(e) => handleInputChange(e, item.id, "name")}
            />
            <input
              type="number"
              value={item.price}
              placeholder="Enter Price"
              onChange={(e) => handleInputChange(e, item.id, "price")}
            />
          </div>
        ))}
      </div>
      <div className="crud-buttons">
        <button onClick={handleAddRow}>Add Segment</button>
        <button onClick={handleCalculateTotal}>Add Details</button>
      </div>
      {total !== 0 && <div className="total-box">Total: {total}</div>}
    </div>
  );
};

export default CRUDTable;


