import React, { useState } from 'react'
import ReactQuill from 'react-quill'
 import 'react-quill/dist/quill.snow.css'
function EditPost() {

  const [title, setTitle]=useState('')
  const [category, setcategory]=useState('Uncategorized')
  const [description, setDescription]=useState('')
  const [thumbnail, setThumbnail]=useState('')


  const modules={
    toolbar:[
      [{'header' : [1, 2, 3, 4, 5, 6, false]}],
      [ 'bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }
const formats=[
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent', 'link', 'image'
]
const POST_CATEGORY=[
'Agriculture', 'Business', 'Education'
, 'Entertainment', 'Art', 'Investement', 'Uncategorized', 'Weather']

 

const [formdata, setFormdata]=useState({
  title:'',
  author:'',
  content:'',
  image:'null',
})
const handlesubmit=async(e)=>{
  e.preventDefault();
  console.log(formdata)
  const data=new formdata()
  for (const [key, value] of Object.entries(formdata)){
    if(key==='image'){
      data.append(key, value)
    }else{
      data.append(key, value)
    }
  }
  try{
    const  Response=await fetch('http://127.0.0.1:8000/api/blog/',{
      method: 'POST',
      body:data,
    })
    if(Response.ok){
      console.log('post created successfully');
    }
    
    else{
      console.error('error creating post.')
    }
    }catch(error){
      console.log('Error', error)
    }
  
 
}
  return (
  <>
  <section className="create-post">
    <div className="container">
      <h2>Edit Post</h2>
      <p className="form-error-message">
        This is an error message
      </p>
      <form action=""className='form create-post-form'>
        <input type="text" placeholder='Title' value={title} onChange={e=> setTitle(e.target.value)} autoFocus />
        <select name="category" value={category} onChange={e=> setcategory(e.target.value)} id="">
          {
         POST_CATEGORY.map(cat=> 
       <option key={cat}>{cat}</option>)
          } 
           </select>

<ReactQuill modules={modules} formats={formats} value={description}  className=''
 onChange={setDescription}/>
          <input className=' ' type="file" onChange={e=> setThumbnail(e.target.files[0])} accept='png, jpg, jpeg' /> 
        <button type='submit' className='btn-primary'>Create</button>
      
      </form>
    </div>
  </section>
  
  </>
  )
}

export default EditPost
