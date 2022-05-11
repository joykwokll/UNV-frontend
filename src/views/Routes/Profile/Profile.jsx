import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  let navigate = useNavigate();

  const handleRegister = () => {
    navigate("/RegisterForm");
  };

  const handleLogin = () => {
    navigate("/LoginForm");
  };

  return (
    <div>
      <p>Profile</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Profile;
