// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Login() {
//   const [userData, setUserData]=useState()
//   return (
//    <>

//    <section>
//     <div className="conatiner">
//       <h2>Sign Up</h2>
//       <form className='form login-form' action="">
//         <p className='form-error-message'>This is an error message</p>
//         <input type="text" placeholder='Email' name='email' value={userData.emial} onChange={changeInuphandle} autoFocus/>
//         <input type="text" placeholder='password' name='password' value={userData.password} onChange={chnageInuphandle}/>

//       </form>
//       <small>Don't have an account? <Link to='/register'>Signup</Link></small>
//     </div>
//    </section>
//    </>
//   )
// }

// export default Login




// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Login() {
//   const [userData, setUserData]=useState('http://127.0.0.1:8000/api/auth/login')
//   const changeinputhandle=(e)=>{
//     setUserData(prevState=>{
//       return {...prevState, [e.target.name]: e.target.value}
//     })
//     console.log(userData)
//   }
//   return (
//  <>
//  <section className='login'>
//   <div className="container">
//     <h2>Sign In</h2>
//     <form action="" className='form-login-form'><p className='form-error-message'>
//       This is an error message
//       </p>
     
//       <input className='input' type="text" name='email' placeholder='Email' value={userData.email} onChange={changeinputhandle}/>
//       <input className='input' type="text" name='password' placeholder='Password' value={userData.password} onChange={changeinputhandle}/>
      
//       <button className='btn-primary rounded-lg'>Login</button>
//       </form>
//       <small>Don't have an account? <Link to='/register'>Sign up</Link></small>
//   </div>
//  </section>
 
//  </>
//   )
// }

// export default Login











import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
console.log(formData)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      setSuccess("Registration successful!");
      console.log("Success:", data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;




