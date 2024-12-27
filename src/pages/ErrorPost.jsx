import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPost() {
  return (
   <>
   
   <section className='error-page'>
    <div className="center">
      <Link to='/' className='btn-primary   '>Go Back Home</Link>
      <h2 className=''>Pages Not Found</h2>
    </div>
   </section>
   </>
  )
}

export default ErrorPost
