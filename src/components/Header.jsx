import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { GiHamburger } from "react-icons/gi";
import { FaBars } from 'react-icons/fa';
function Header() {

   const [isNavShowing, setIsNavShowing]=useState(window.innerWidth > 800 ? true : false)
   const closenavhandle=()=>{
    if (window.innerWidth<800){
      setIsNavShowing(false)
    }else{
      setIsNavShowing(true)
    }
   }
  return (
   <nav>
    <div className="nav_container container mx-auto ">
     <Link to="/" className="nav_logo ">
     <img className=''  onClick={closenavhandle} src="https://img.freepik.com/premium-vector/vlog-line-logo-white_116137-5265.jpg" alt="Nvabarlogo" />
     </Link>

     {isNavShowing &&
     <ul className='nav_menu '>
     
      <li className=''><Link to='/profile/sdfsdf' onClick={closenavhandle}>posts</Link></li>
      <li className=''><Link to='/createpost'  onClick={closenavhandle}>create post</Link></li>
      <li><Link to='/authors'  onClick={closenavhandle}>Authors</Link></li>
      
      <li><Link to='/register'  onClick={closenavhandle}>Register</Link></li>
    
     </ul>}

     <button className='nav_toggle_btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
     

{isNavShowing ? <GiHamburger/>: <FaBars/>}
     </button>
   </div>
   </nav>
  )
}

export default Header
