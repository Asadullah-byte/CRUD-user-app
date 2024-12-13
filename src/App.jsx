import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import AddUser from "../components/AddUser";
import ShowUsers from "../components/ShowUser";
import UpdateUser from "../components/UpdateUser";
import DeleteUser from "../components/DeleteUser";


function App() {
  const [activeComponent, setActiveComponent] = useState("Add");


  const handleUserAdded = () => {
    setActiveComponent("show");
  };
  const handleUpdateUser  = () => {
    setActiveComponent("show");
  } 
  const handleDeleteUser  = () => {
    setActiveComponent("show");
  } 

return (
  <>
    <nav>
      <ul className="nav-bar">
        <li>
          <button
            className="show-btn"
            onClick={() => setActiveComponent("add")}
            type="button"
          >
            Add User
          </button>
        </li>
        <li>
          <button
            className="show-btn"
            onClick={() => setActiveComponent("show")}
            type="button"
          >
            Show Users
          </button>
        </li>
        <li>
          <button
            className="show-btn"
            onClick={() => setActiveComponent("update")}
            type="button"
          >
            Update Users
          </button>
        </li>
        <li>
          <button
            className="show-btn"
            onClick={() => setActiveComponent("delete")}
            type="button"
          >
            Delete Users
          </button>
        </li>
      </ul>
    </nav>
    {activeComponent === "add" && <AddUser onUserAdded={handleUserAdded} />}
    {activeComponent === "show" && <ShowUsers />}
    {activeComponent === "update" && <UpdateUser onUserUpdated={handleUpdateUser}/>}
    {activeComponent === "delete" && <DeleteUser onUserDeleted={handleDeleteUser}/>}
  </>
);
}

export default App;
