import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
   <footer>
    <ul className='footer-category'>
      <li><Link to='/posts/categories/Agriculture'>Agriculture</Link></li>
      <li><Link to='/posts/categories/Business'>Business</Link></li>
      <li><Link to='/posts/categories/Education'>Education</Link></li>
      <li><Link to='/posts/categories/Entertainment'>Entertainment</Link></li>
      <li><Link to='/posts/categories/Art'>Art</Link></li>
      <li><Link to='/posts/categories/Investment'>Uncategorixed</Link></li>
      <li><Link to='/posts/categories/Uncategorized'>Investment</Link></li>
      <li><Link to='/posts/categories/Weather'>Weather</Link></li>
    </ul>
    <div className="footer-copyright">
      <small>All right Reserved &copy; Copyright, EGATOR Tutorials </small>
    </div>
   </footer>
   
  )
}

export default Footer
