import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Routes'
import WatchProvider from './context/WatchProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <WatchProvider>

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </WatchProvider>
  </StrictMode>,
)
