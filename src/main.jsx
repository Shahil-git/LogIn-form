
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Roots/Roots'
import FirebaseAuth from './Components/FirebaseAuth/FirebaseAuth'

createRoot(document.getElementById('root')).render(

    <FirebaseAuth><RouterProvider router={router}></RouterProvider></FirebaseAuth>
  
)
