import React, { useState } from "react";
import axios from "axios";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8080/api/username/${username}`);

      if (response.data) {
        if (response.data.password === password) {
          setShowAlert(true); // Login berhasil
          setErrorMessage("");
          window.location.href = "/admin";
        } else {
          setShowAlert(false); // Password salah
          setErrorMessage("Username atau password salah");
        }
      } else {
        setShowAlert(false); // Username tidak ditemukan
        setErrorMessage("Username atau password salah");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat memvalidasi data");
      setShowAlert(false);
    }

    

  };

  return (
    <div className="container"  style={{ marginTop: "5rem" }}>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Login berhasil!
        </div>
      )}
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
    </div>
  );
}



// import axios from "axios";
// import React, { useEffect, useState } from "react";

// export default function Login() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [usernameValid, setusernameValid] = useState(true);
//   const [passwordValid, setpasswordValid] = useState(true);
//   const [setUser, setisLog] = useState(false);
//   const [fLog, setfLog] = useState({
//     username : "",
//     password : ""
//   });

//   const [log, setLog] = useState([]);

//   const handleChange = (isi) => {
//     const {username, value } = isi.target;
//     setfLog((Plog) => ({
//       ...Plog,
//       [username] : value,
//     }))   
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//   const VaUser = log.some((nama) => nama.username === fLog.username);
  
//   if (!VaUser) {
//       setusernameValid(false);
//       return;
//   };
  
//   const VaPassword = log.find((sandi) => sandi.username === fLog.username); 
//   if (!VaPassword) { 
//       setpasswordValid(false);
//       return;
//   };

//   if (VaUser && VaPassword) {
//     setisLog(true);
//     setTimeout(()=>{
//       window.location.href = "/admin"
//     },1500);

//   };

//     setShowAlert(true);


//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/signup");
//       const jsonData = await response.json();
//       setLog(response);

//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   useEffect(()=>{
//     fetchData() 
//   })

//   return (
//     <div className="container">
//       {showAlert && (
//         <div className="alert alert-success" role="alert">
//           Login berhasil!
//         </div>
//       )}
//       <form onSubmit={handleSubmit} style={{width: "50%", marginLeft: "15rem", marginTop: "50px", border:"solid 2px", padding : "15px"}}>
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             className="form-control"
//             value={fLog.username}
//             onChange={handleChange}
//             name="username"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
        
//             className="form-control"
//             value={fLog.password}
//             onChange={handleChange}
//             name="password"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }
