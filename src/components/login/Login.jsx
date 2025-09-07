import React, { useContext, useState } from 'react'
import img1 from '../../assets/imgi_3_login.jpg'
import img2 from '../../assets/imgi_1_blue logo.png'
import { TextField } from '@mui/material'
import { useFormik } from 'formik'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { myauthcontext } from '../AuthContext/AuthContext'
export default function Login() {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
         let { settoken} =useContext(myauthcontext)
     const [isLoading, setIsLoading] = useState(false)
      let navigate = useNavigate()
    const handleLogin=(values)=>{
              
        console.log(values)
        setIsLoading(true)
        axios.post('https://dev.thetechtitans.net/api/login' , values)
        .then(({data})=>{
            console.log(data)
            localStorage.setItem("token" , data.data.token)
            settoken(data.data.token)
            setSuccess(data.message)
            if(data.message)
            {
                toast.success('تم تسجيل الدخول بنجاح !' );
            }
        setIsLoading(false)
               
            navigate("/")


        }).catch((error)=>{
            console.log(error)
            setError(error.message)
             toast.error('فشل تسجيل الدخول !');
             setIsLoading(false)
        })
    }
  
    let formik =useFormik({
        initialValues:{
             email: "",
             password: ""
        } ,
        onSubmit:handleLogin
    })

  return <>
    
   <section >
  
     <div dir='rtl' className='flex md:flex-row flex-col  '>
        <div className={`md:w-[60%] w-full   relative`}>
        <img src={img1} alt="" className='w-full h-screen object-cover' />
          <div className="layer absolute inset-0 bg-blue-500/20">
            
          </div>
          
        </div>
        <div className='md:w-[40%] w-full bg-[#EEEEEE] pt-12 '>
           
              <div className='flex flex-col *:text-center'>
                
                 <img src={img2} alt="logo" className='w-32 pb-3 mx-auto' />
                 <h1 className='text-[40px] font-[400] pb-0 mb-0' >تسجيل الدخول</h1>
                 <p className='text-[#95AAC9] text-[20px]'>تسجيل الدخول لنظام الحسابات</p>
              </div>

                 <form onSubmit={formik.handleSubmit} className=" mx-auto w-[60%] mt-7">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">اسم المستخدم</label>
                        <input 
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        
                        id="email" className="bg-gray-50 border placeholder-gray-400 placeholder:text-[19px] w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black block outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ادخل اسم المستخدم "  />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">كلمة المرور</label>
                        <input type="password"
                            name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        
                        id="password" className="bg-gray-50 border placeholder-gray-400 placeholder:text-[19px] w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-black outline-none block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='ادخل كلمة المرور' />
                    </div>
                      <button type="submit" className="focus:outline-none w-full text-white bg-[#393E46] cursor-pointer hover:bg-[#393E46]/90 duration-200 transition-all  focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> {isLoading?"....":"تسجيل الدخول"}  </button>
                   
                </form>

            
        </div>
    </div>
 
   </section>
  
  </>
}
