import React from 'react'
import { Link } from 'react-router-dom'

function PostAuhtor() {
  return (
   <>
   <Link to={`/posts/users/`}  className='post-author'>
   <div className="post-author-avatar">
    <img src="https://t3.ftcdn.net/jpg/00/28/78/32/360_F_28783272_McJzgAYLurO4wEnWAfwDDq9a9RpXRofe.jpg" alt="" />
   </div>
   <div className="post-auhtor-details">
    <h5>By: Ernest Achiever</h5>
    <small>Just Now</small>
   </div>
   </Link>
   </>
  )
}

export default PostAuhtor
