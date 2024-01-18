import React, { useState } from "react";

function LoginForm({ setLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="firstName"
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="lastName"
          />
        </div>
        <div className="inputbox">
          <input
            type="text"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
            placeholder="birthDate"
          />
        </div>
        <div className="buttons">
          <input type="submit" value="Submit" />
          <button type="button" onClick={() => setLogin(false)}>
            Switch to Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
