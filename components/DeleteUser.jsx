
import React, { useState } from "react";
import Axios from "axios";

function DeleteUser({onUserDeleted}) {
const [id, setId] = useState("");

    const deleteUser = async (id) => {
        await Axios.delete(`http://localhost:5000/users/${id}`)
        onUserDeleted();
    }
    return(
        <>
     <h1>Delete User</h1>

<h4 className="title">Enter User Id</h4>
<input
  onChange={(e) => {
    setId(e.target.value);
  }}

  className="text-field"
  type="text"
  placeholder="Enter User Id"
/>
 <button onClick={() => {deleteUser(id)}} className="sub-btn" type="submit">
  Delete
</button>
        </>
    );
}

export default DeleteUser