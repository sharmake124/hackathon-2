import React, { useState } from "react";
import "./signupV2.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
function SignupForm({ setLogin }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, birthday, email, password } = formData;
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          birthday,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setLogin(true);
      } else {
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }; */

  const handleClick = () => {
    navigate("/choiceform");
  };

  return (
    <div className="box">
      <h2>SignUp</h2>
      <form>
        <div className="inputbox">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
            placeholder="First Name"
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            required
            placeholder="Birthday"
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleClick}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignupForm;
