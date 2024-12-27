import React from 'react'
import { Link } from 'react-router-dom'
import PostAuhtor from './PostAuhtor'

function PostItem({title, content, author, id, image  }) {
    // const description=desc.Length>145 ? desc.subdtr(0, 145)+'...':desc;
    // const posttitle=title.Length>30? title.substr(0,30)+'...':title;
  return (
   <>
   
   
   <section className='post'>
    <div className="post-thumbnail">
        <img src={image} alt={title} />
    </div>
    <div className="post-content">
        <Link to={`/posts/${id}`}>
        <h3>{title}</h3></Link>
        <p>{content}</p>
        <div className="post-footer">
            <PostAuhtor/>
            <Link to={`/posts/category/${author}`} className='btn-category'>{author}</Link>
        </div>
    </div>
    </section></>
  )
}

export default PostItem
