import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import  { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
       <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)
