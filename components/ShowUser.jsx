
import React, { useState } from "react";
import Axios from "axios";


function ShowUsers() {
    const [users, setUsers] = useState([]);
    const [showTable, setShowTable] = useState(false);
  
    const showUsers = async () => {
      try {
        const res = await Axios.get("http://localhost:5000/users");
        setUsers(res.data);
        setShowTable(true);
      } catch (error) {
        console.error("Error Showing User:", error);
      }
    };
  
    return (
      <>
     
        <button className="show-btn" onClick={showUsers} type="button">
          Show
        </button>
        {showTable && users.length > 0 && (
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
export default ShowUsers  