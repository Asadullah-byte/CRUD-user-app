
import React, { useState } from "react";
import Axios from "axios";


function AddUser({ onUserAdded }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const addUser = async () => {
      try {
        await Axios.post("http://localhost:5000/users/add-users", { 
          name,
          email,
          phone,
          designation,
        });
        onUserAdded();
        
      }catch (error) {
        console.error("Error adding user:", error);
      }
    };
    return (
      <section>
        <h1>Add User</h1>
  
        <h4 className="title">Name</h4>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
          className="text-field"
          type="text"
          placeholder="John Doe"
        />
        <h4 className="title">Email</h4>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          className="text-field"
          type="text"
          placeholder="abc@xyz.com"
        />
        <h4 className="title">Phone No</h4>
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
          className="text-field"
          type="text"
          placeholder="+92302578797"
        />
        <h4 className="title">Designation</h4>
        <input
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          required
          className="text-field"
          type="text"
          placeholder="SWE"
        />
        <button onClick={addUser} className="sub-btn" type="submit">
          Add
        </button>
      </section>
    );
  }

  export default AddUser