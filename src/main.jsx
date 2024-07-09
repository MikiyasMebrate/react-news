import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//Component
import NavBar from './Pages/Common/Navbar.jsx'
import Home from './Pages/Index/Home.jsx'
import News from './Pages/News/News.jsx'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'

//Assets
import './assets/css/mite-assets.min.css'
import './assets/css/style.css'
import BlogDetail from './Pages/BlogDetail/BlogDetail.jsx'



let router = createBrowserRouter([
  {
    path : '/',
    element : <NavBar />,
    children : [
      {
        path : '/',
        element : <Home />,
      },
      {
        path : '/news',
        element : <News />,
      },
      {
        path : '/about',
        element : <About />,
      },
      {
        path : '/contact',
        element : <Contact />,
      },
      {
        path : '/blog/:blogId',
        element : <BlogDetail />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
