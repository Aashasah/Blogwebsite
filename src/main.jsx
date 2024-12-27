import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import ErrorPost from './pages/ErrorPost'
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Register from './pages/Register'

import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import CategoryPost from './pages/CategoryPost'
import AuthorPost from './pages/AuthorPost'
import DashBoard from './pages/DashBoard'
import EditPost from './pages/EditPost'

import DeletePost from './pages/DeletePost'

import Logout from './pages/Logout'
import Login from './pages/Login'




const router=createBrowserRouter([

  { path:"/",
    element: <Layout/>,
    errorElement: <ErrorPost/>,
    children: [
      {index: true, element: <Home/>},    
      {path: 'posts/:id', element: <PostDetail/> },
      {path: 'register', element: <Register/> },
      {path: 'login', element: <Login/> },
      {path: 'profile/:id', element: <UserProfile/> },
      {path: 'authors', element: <Authors/> },
      {path: 'createpost', element: <CreatePost/> },
      {path: 'posts/categories/:category', element: <CategoryPost/> },
      {path: 'posts/users/:id', element: <AuthorPost/> },
      {path: 'myposts/sdfsdf:id', element: <DashBoard/> },
      {path: 'posts/:id/edit', element: <EditPost/> },
      {path: 'posts/:id/delete', element: <DeletePost/> },
      {path: 'logout', element: <Logout/> },
     
  ],
}

])
    

    

createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider  router={router}/>

  
</StrictMode>
)





