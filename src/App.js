import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return (items = JSON.parse(localStorage.getItem("items")));
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState("");
  const [alert, setAlert] = useState({ message: "", show: false, type: "" });
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item) {
      setItems([...items, { item: item, id: new Date().getTime().toString() }]);
      setItem("");
      setAlert({
        ...alert,
        message: "Item Added",
        show: true,
        type: "alert-success",
      });
    }

    if (item && isEditing) {
      setItems(
        items.map((task) => {
          if (task.id === editID) {
            return { ...task, item: item };
          }
          return task;
        })
      );
      setIsEditing(false);
      setEditID(null);
      setItem("");
      setAlert({ message: "Value Changed", show: true, type: "alert-success" });
    }

    if (!item) {
      setAlert({
        ...alert,
        message: "Please Enter Value",
        show: true,
        type: "alert-danger",
      });
    }
  };

  const deleteItem = (id) => {
    const filterItems = items.filter((item) => item.id !== id);
    setItems(filterItems);
    setAlert({ message: "Item Removed", show: true, type: "alert-danger" });
  };

  const editItem = (id) => {
    const specificItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(specificItem.item);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} setAlert={setAlert} />}
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Add Grocery Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {items.length > 0 && (
          <div className="grocery-container">
            <List
              list={items}
              setItems={setItems}
              setAlert={setAlert}
              deleteItem={deleteItem}
              editItem={editItem}
            />
            <button
              className="clear-btn"
              onClick={() => {
                setItems([]);
                setAlert({
                  ...alert,
                  message: "List Cleared",
                  show: true,
                  type: "alert-danger",
                });
              }}
            >
              Clear Items
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
