import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  //state values setup
  //for form input
  const [name, setName] = useState("");

  //for list items
  const [list, setList] = useState([]);

  //for list editing
  const [isEditing, setIsEditing] = useState(false);

  //to choose wich item should be edited
  const [editID, setEditID] = useState(null);

  //for alert to be displayed
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("You pressed submit button, it works!");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Grocery Helper</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.e. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}

export default App;
