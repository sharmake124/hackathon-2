import React, { useState } from "react";
import "../signup.css";
import clip from "../assets/video/background.mp4";
import LoginForm from "../login";
import SignupForm from "../SingupPage";

function SignupPage() {
  const [isLogin, setLogin] = useState(false);
  return (
    <div className="main">
      <video autoPlay muted loop className="video-bg">
        <source src={clip} type="video/mp4" />
      </video>
      <div className="container">
        {isLogin ? (
          // Section de connexion
          <LoginForm setLogin={setLogin} />
        ) : (
          // Section de Signup
          <SignupForm setLogin={setLogin} />
        )}
      </div>
    </div>
  );
}
export default SignupPage;
