import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import { Link } from 'react-router-dom'

function DashBoard() {
  const [posts, setPosts]=useState( DUMMY_POSTS)
  return (
    <>
    <section className='dashboard '>
      {
posts.length ? <div className='dashboard-container'>
  {
posts.map(post=>{
  return(
    <article key={post.id} className='dashboard-post'>
      <div className="dashboard-post-info">
        <div className="dashboard-post-thumbnail">
          <img src={post.image} alt="" />
        </div>
        <h5>{post.title}</h5>
      </div>
<div className="dashboard-post-action">
  <Link to={`/posts/werwer${post.id}`} className='btn-sm'>View</Link>
  <Link to={`/posts/${post.id}edit`} className='btn-primary'>Edit</Link>
  <Link to={`/posts/${post.id}delete`} className='btn-danger'>Delete</Link>
</div>
    </article>
  )
})
  }
</div>: <h2 className='center'>You have no post yet.</h2>
      }
    </section>
    
    </>
  )
}

export default DashBoard
