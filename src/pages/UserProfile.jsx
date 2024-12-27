import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaEdit } from "react-icons/fa";

function UserProfile() {
  const [avater, setAvater]=useState('https://sunnyo.com.au/cdn/shop/files/7B4D7B19-5C3B-4502-BB29-031863EDDBC8_1445x.jpg?v=1702178012')

const [name, setName]=useState('')
const [email, setEmail]=useState('')
const [currentpassword, setCurrentpassword]=useState('')
const [newpassword, setNewpassword]=useState('')
const [confirmnew, setConfirmnew]=useState('')


  return (
 <>
 <section className='profile'>
<div className=" container profile-container">
  <Link to={`myposts/sdfsdf`} className='btn'>My posts</Link>
  <div className="profile-details">
    <div className="avater-wrapper">
      <div className="profile-avater">
        <img src={avater} alt="" />
      </div>
      <form action="" className='avater-form'>
        <input type="" name='avater' id='avater ' accept='png, jpg, jpeg' onChange={e=>setAvater(e.target.files[0])} />
        <label htmlFor="avater">
       

<FaEdit className='text-white' />
        </label>
      </form>
      <button className='profile-avater-btn'><FaCheck/></button>
    </div>
    <h1 className='text-center ml-10'>Create a blog post</h1>


    
    <form action="" className='form-profile-form'>
      <p className='form-error-message'>This is an error message</p>
      <input type="text" placeholder='Full Name' value={name} onChange={e=> setName(e.target.value)} />


      <input type="email" placeholder='Email' value={email} onChange={e=> setEmail(e.target.value)} />

      <input type="password" placeholder='current Password' value={currentpassword} onChange={e=> setCurrentpassword(e.target.value)} />

      <input type="password" placeholder='New password' value={newpassword} onChange={e=> setNewpassword(e.target.value)} />
      <input type="password" placeholder='Current new password' value={confirmnew} onChange={e=> setConfirmnew(e.target.value)} />
      <button type='submit' className='btn-primary'>Update details</button>
    </form>
  </div>
</div>
 </section>
 
 </>
  )
}

export default UserProfile
