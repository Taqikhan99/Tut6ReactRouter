import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GithubPage from './components/GithubPage/GithubPage.jsx'

//creating router , this is new way of using react-router-dom since v6
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/user/:userid',
        element: <User/>
      },
      {
        path:'/github',
        element: <GithubPage/>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>

      <RouterProvider router={router} />
  </StrictMode>,
)
