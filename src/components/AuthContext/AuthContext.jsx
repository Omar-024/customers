import React, { createContext } from 'react'

 export let myauthcontext =createContext()

export default function AuthContext({children}) {
    const [token, settoken] = useState(localStorage.getItem("token"))
  return <myauthcontext.Provider  value={{token , settoken}}>
  {children}
  
  </myauthcontext.Provider>
}
