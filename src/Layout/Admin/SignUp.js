import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Signup.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cek jika ada kolom yang kosong
    if (!username || !password) {
      setErrorMessage("Harap isi semua kolom");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/signup", {
        username,
        password
      });

      console.log(response.data);

 
      setShowAlert(true);
      setErrorMessage("");

   
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengirim data ke database");
    }
  };

  return (
    <div className="signup-container" style={{ marginTop: "5rem" }}>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Data berhasil terkirim!
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="login-description">
        <span>Sudah punya akun? </span>
        <NavLink to="/login" className="login-link">
          Silakan login.
        </NavLink>
      </div>
    </div>
  );
}
