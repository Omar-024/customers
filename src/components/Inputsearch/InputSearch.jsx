import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { FaPlus } from "react-icons/fa6";
export default function InputSearch() {
  return <>
 <div className="flex gap-4 items-center mt-4">
     <label htmlFor="search" className='rounded-lg flex items-center gap-2 w-[94%] bg-white shadow-lg  py-2 px-3  dark:bg-gray-800 dark:border-gray-800 dark:text-white'>
   
    <IoIosSearch className='cursor-pointer text-blue-500' />
    <input 
    //  onChange={(e)=>{
    //   onsearchchange(e.target.value)
    //   console.log(e.target.value)

    //  }}
    //  value={searchValue}
    type='text' id='search' placeholder='ابحث عن عميل' className='outline-none w-full placeholder:text-gray-300'/>
   
   </label>
   <div className='bg-white flex justify-center items-center cursor-pointer py-3 px-3 rounded-xl'>
     <FaPlus />
   </div>
 </div>
  
  </>
}
