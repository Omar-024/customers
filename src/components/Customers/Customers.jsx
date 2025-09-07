import React, { useContext, useEffect, useState } from 'react'
import InputSearch from '../Inputsearch/InputSearch'
import axios from 'axios'
import Proceduers from '../Proceduers/Proceduers'
import { BeatLoader } from "react-spinners";
import toast from 'react-hot-toast'
import { myauthcontext } from '../AuthContext/AuthContext';

export default function Customers() {
    const [customers, setcustomers] = useState(null)
    const [isLoading, setisLoading] = useState(false)
   let{token} =useContext(myauthcontext)
      const getCustomers=()=>{
        setisLoading(true)
        axios.get('https://dev.thetechtitans.net/api/allData?&requiredData[]=customers&' , {
            headers:{
                 authorization:token ,
                company:1 ,
                Accept:"application/json"
            }
        }).then(({data})=>{
            console.log(data.customers)
            setcustomers(data.customers)
        }).catch((error)=>{
            console.log(error)
        }).finally(()=>{
            setisLoading(false)
        })
      }

      useEffect(()=>{
        getCustomers()
      } ,[])

      const deleteCustomer=(id)=>{
        axios.delete(`https://dev.thetechtitans.net/api/customers/${id}` , {
            headers:{
                  authorization:token ,
                company:1 ,
                Accept:"application/json"
            }
        }).then(({data})=>{
            console.log({data})
           let newcustomers= customers.filter((customer)=>customer.id!==id)
             setcustomers(newcustomers)
             console.log(newcustomers)
             toast.success('تم حذف العميل بنجاح !' );

        }).catch((error)=>{
            console.log(error)
        })

      }
       

 


  return <>
  
     {isLoading?<div className='h-screen flex justify-center items-center'><BeatLoader color='blue' /></div>:<main className='bg-[#EEEEEE] min-h-screen'>
         <div className="container">
            <div>
                <h2 className='text-[24px] font-[400] pb-0 mb-0' >العملاء </h2>
                <p className='text-[#95AAC9] text-[20px]'> من هنا يمكنك تعديل تفاصيل العملاء </p>
            </div>
            <div dir='rtl' className='w-full mb-5'>
                <InputSearch/>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs *:text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        كود
                        </th>
                        <th scope="col" className="px-6 py-3">
                         اسم العميل  
                        </th>
                        <th scope="col" className="px-6 py-3">
                        الرقم الضريبي
                        </th>
                        <th scope="col" className="px-6 py-3">
                        رقم الهاتف
                        </th>
                        <th scope="col" className="px-6 py-3">
                        الرصيد
                        </th>
                        <th scope="col" className="px-6 py-3">
                        نشط
                        </th>
                        <th scope="col" className="px-6 py-3">
                        الاجرائات
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        
                            {customers?.map((customer , index)=><tr key={index} className="odd:bg-white *:text-center odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {customer?.code}
                        </th>
                        <td className="px-6 py-4">
                        {customer?.name}
                        </td>
                        <td className="px-6 py-4">
                         {customer?.tax_number}
                        </td>
                        <td className="px-6 py-4">
                         {customer?.phone1}
                        </td>
                        <td className="px-6 py-4">
                            {customer?.balance}
                         </td>
                        <td className="px-6 py-4">
                        {customer?.status==1?<span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300"> نشط </span>:<span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300"> غير نشط </span>}
                        </td>
                        <td className="px-6 py-4">
                            <Proceduers deleteCustomer={deleteCustomer} customer={customer} />
                        </td>
                    </tr>)}
                    
                  
                    </tbody>
                </table>
            </div>
           
       





   
      </div>
      
     </main>}
  
  </>
}







