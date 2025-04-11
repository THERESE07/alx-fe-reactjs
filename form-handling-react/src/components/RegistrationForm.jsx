import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All fields are required.");
    } else {
      console.log("Form Submitted:", { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // Binding input value to state
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Binding input value to state
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Binding input value to state
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
