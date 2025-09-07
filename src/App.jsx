
import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './components/login/Login'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Customers from './components/Customers/Customers'
import CustomersEdit from './components/CustomersEdit/CustomersEdit'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AuthContext from './components/AuthContext/AuthContext'



function App() {
  
  const router= createHashRouter([
    { path:"/" , element:<Layout/> , children:[
      {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> } ,
      {path:"login" , element:<Login/>} ,
      {path:"customers" , element:<ProtectedRoute><Customers/></ProtectedRoute>} ,
      {path:"customers/:id/edit" , element:<ProtectedRoute><CustomersEdit/></ProtectedRoute>}
    
    ] }

  ])

  return<>
  <main dir='rtl'>
   <AuthContext>

  <RouterProvider router={router}/>
   <Toaster />

   </AuthContext>
   

   


 


  
  </main>

  
  </>
  
}

export default App
