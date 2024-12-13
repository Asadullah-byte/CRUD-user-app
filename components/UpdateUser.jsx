import React, {useState} from "react";
import Axios  from "axios";

function UpdateUser({onUserUpdated}) {

    const [showOptions, setShowOptions] = useState(false)   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [designation, setDesignation] = useState("");
    const [id, setId] = useState("");

    const searchUser = async (id) => {
        try {
          const response = await Axios.get(`http://localhost:5000/users/${id}`);
          const user = response.data;
          setName(user.name);
          setEmail(user.email);
          setPhone(user.phone);
          setDesignation(user.designation);
          setShowOptions(true); 
        } catch (error) {
          console.error("Error finding user:", error);
          
        }
      };

const updateUser = async (id) => {
    try {
      await Axios.patch(`http://localhost:5000/users/${id}`,{
        name,
        email,
        phone,
        designation
      });
      onUserUpdated();
      }catch (error) {
      console.error("Error Updating user:", error);
    }
  };
    return(


        <section>
        <h1>Update User</h1>

        <h4 className="title">Enter User Id</h4>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
        
          className="text-field"
          type="text"
          placeholder="Enter User Id"
        />
         <button onClick={() => {searchUser(id)}} className="sub-btn" type="submit">
          Search
        </button>
      
        {showOptions && (
        <>
          <h4 className="title">Name</h4>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="text-field"
            type="text"
            placeholder="John Doe"
          />
          <h4 className="title">Email</h4>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="text-field"
            type="text"
            placeholder="abc@xyz.com"
          />
          <h4 className="title">Phone No</h4>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="text-field"
            type="text"
            placeholder="+92302578797"
          />
          <h4 className="title">Designation</h4>
          <input
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            className="text-field"
            type="text"
            placeholder="SWE"
          />
          <button onClick={() => {updateUser(id)}} className="sub-btn" type="button">
            Update
          </button>
        </>
      )}
    </section>
  );
}

export default UpdateUser;