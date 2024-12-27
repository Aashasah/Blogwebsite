import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  // const [userData, setUserData]=useState('http://127.0.0.1:8000/signup/')
  // const changeinputhandle=(e)=>{
  //   setUserData(prevState=>{
  //     return {...prevState, [e.target.name]: e.target.value}
  //   })
  //   console.log(userData)
  // }
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
});

const [error, setError] = useState('');

const handleChange = (e) => {
    setUserData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Signup failed');
        }

        const data = await response.json();
        console.log('Success:', data);
        alert('Signup successful!');
    } catch (err) {
        console.error('Error:', err);
        setError(err.message);
    }
};

  return (
 <>
 <section className='register'>
  <div className="container">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit} action="" className='form-register-form'><p className='form-error-message'>
      This is an error message
      </p>
      <input className='input ' type="text" placeholder='full Name' name='name' value={userData.username} onChange={handleChange}/>
      <input className='input' type="text" name='email' placeholder='Email' value={userData.email} onChange={handleChange}/>
      <input className='input' type="text" name='password' placeholder='Password' value={userData.password} onChange={handleChange}/>
      
      <button className='btn-primary rounded-lg'>Register</button>
      </form>
      <small>Already have an account? <Link to='/login'>Sign in</Link></small>
  </div>
 </section>
 
 </>
  )
}

export default Register


// import React, { useState } from 'react';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await fetch('https://your-backend.com/api/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         alert('Registration successful! Please log in.');
//       } else {
//         setError(data.message || 'Registration failed');
//       }
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;

