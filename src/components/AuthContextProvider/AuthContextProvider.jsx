import React, { useState } from 'react'
import { createContext } from 'react'
   export let authContext =createContext()

export default function AuthContextProvider({children}) {

    const [token, setToken] = useState(localStorage.getItem("token"))
  return <authContext.Provider value={{token , setToken}}>
    {children}
  
  </authContext.Provider>
}
