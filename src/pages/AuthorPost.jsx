import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

function AuthorPost() {
  

  const [posts, setPosts]=useState([])
      useEffect(()=>{
   fetch("http://127.0.0.1:8000/api/blog/")
   .then ((res)=>res.json())
   .then((data)=> setPosts(data))
   .catch((error)=>console.error( error))
   
      },[])
  return (
  <>
   <section className='posts'>
   <div className=" container  posts-container">
    {
        posts.map(({id,content, image, author, title  })=> <PostItem key={id} image={image} content={content} title={title} author={author} />)
    }
    </div>
 
 </section>
  
  </>
  )
}

export default AuthorPost
