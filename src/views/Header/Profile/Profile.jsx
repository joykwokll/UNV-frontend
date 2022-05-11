import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

function Profile(props) {
    
    return (
      <div>

          
      <p>Profile</p>
      <button><LoginForm/></button>
      <button><RegisterForm/></button>
     
      </div>
    );
  }
  
  export default Profile;
  