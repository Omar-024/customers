
import { Toaster } from 'react-hot-toast'
import './App.css'
import Login from './components/login/Login'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import AuthContextProvider from './components/AuthContextProvider/authContextProvider'
import Customers from './components/Customers/Customers'
import CustomersEdit from './components/CustomersEdit/CustomersEdit'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

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
  <AuthContextProvider>

  <RouterProvider router={router}/>
   <Toaster />

  </AuthContextProvider>
  </main>

  
  </>
  
}

export default App
