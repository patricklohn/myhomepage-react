import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element: <App/>,
      errorElement: <Error/>,
      children: [
        {path: "/", element: <Home/>}
      ],
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
