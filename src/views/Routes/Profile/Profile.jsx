import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import {useNavigate} from 'react-router-dom'

function Profile(props) {

  let navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate("/RegisterForm");
  };
    return (
      <div>

          
      <p>Profile</p>
      <button><LoginForm/></button>
      <button onClick={handleSubmit}>Register</button>
     
      </div>
    );
  }
  
  export default Profile;
  