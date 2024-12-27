import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Authors() {
  const [author, setAuthor]=useState([])
   
      useEffect(()=>{
   fetch('http://127.0.0.1:8000/api/blog/')
   .then ((res)=>res.json())
   .then((data)=> setAuthor(data))
   .catch((error)=>console.error( error))
   
      },[])
    
  return (
  <>
  
 <section className='authors'>
  {author.length > 0 ? <div className=" container author-container">
    {
      author.map(({id, image, title, content})=>{
        return(
        <Link key={id} to={`/posts/users/${id}`} className='author'>
        <div className="author-avater">
          <img src={image} alt={`Image of ${title}`} />

        </div>

        <div className="auhtor-info">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        </Link>)
      })
    }
  </div> : <h2 className='center'>No users/authors founds.</h2>}
 </section>
  </>
  )
}

export default Authors
