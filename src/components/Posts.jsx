import React, { useEffect, useState } from 'react'
import PostItem from './PostItem'



function Posts() {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
 fetch("http://127.0.0.1:8000/api/blog/")
 .then ((res)=>res.json())
 .then((data)=> setPosts(data))
 .catch((error)=>console.error( error))
 
    },[])
    
 
  return (

 <section className='posts'>
  {posts.length > 0 ? <div className=" container posts-container">



    
 {
  posts.map(({id, image, author, content, tags, title})=>
  <PostItem key={id} id={id} image={image} author={author} title={title} tag={tags} conten={content} />
  )
 }
 
 </div>: <h2 className='center'>No post found</h2>}
 </section>
 
  )
}

export default Posts
