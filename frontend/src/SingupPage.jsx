import React, { useState } from "react";

function SignupForm({ setLogin }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
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
        console.log("Signup successful:", data);

        setLogin(true);
      } else {
        console.error("Signup failed:", data.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="box">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="inputbox">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </div>
        <div className="buttons">
          <input type="submit" value="Submit" />
          <button type="button" onClick={() => setLogin(true)}>
            Switch to Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
