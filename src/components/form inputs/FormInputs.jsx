import { Button } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { myauthcontext } from '../AuthContext/AuthContext'

export default function FormInputs() {
     let {token}=useContext(myauthcontext)
      let navigate =useNavigate()
     
    const [showTable, setshowTable] = useState(false)
    const [selectElment, setselectElment] = useState("")
    const [selectElment2, setselectElment2] = useState("")
    const [selectElment3, setselectElment3] = useState("")
    
    const handleShowTable=()=>{
        setshowTable(!showTable)
       formik.handleChange
    }

    const handleCreation=(values)=>{
        console.log(values)
        axios.post('https://dev.thetechtitans.net/api/customers' , values   , {
            headers:{
                authorization:token ,
                company:1 ,
                Accept:"application/json"
            }
        })
        .then(({data})=>{
            console.log(data)
            console.log(data.status)
            if(data.status=="success"){
                 toast.success('تم الانشاء بنجاح !' );
                setTimeout(() => {
                navigate("/customers")
               }, 1000);
            }
          else if(data.status=="error"){
                toast.error('فشل الانشاء !' );
          }
            
             
         

        }).catch((error)=>{
            console.log(error)
            
              
        })
    }

    let formik =useFormik({
        initialValues:{
 name: "",
 tax_number: "",
 balance_type: 0,
 sections_account_id: 0,
 balance: 0,
 opening_debit: null,
 opening_credit: null,
 max_balance: null,
 address1: "",
 address2: "",
 city: "",
 zip_code: "",
 status: 1,
 state: "",
 price_list_id:"",
 phone1: "",
 phone2: "",
 email: "",
 opening_balance:0,
 ofline: true,
 upload_key: "1767566274259",
 code :"",
 balance_by_branch : 1,
    accountBranchBalances : [
        {
            branch_id :"17",
            opening_balance :0 ,
            opening_debit : 90,
            opening_credit: 80,
            balance_type :1
        }
    ]


        } ,
        onSubmit:handleCreation
    })



  return<>

  
   <form onSubmit={formik.handleSubmit} >
     <div className="container mt-3">
     <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-5 pb-5 border-b border-gray-300">
      <div > <p> اسم المورد </p> </div>
      <div> 
                    
                   <input
                   name='name'
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   type="text" id="first_name7" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        
      </div>
      <div className='text-center'> <p> كود </p> </div>
      <div> 
        
         <input
             name='code'
             value={formik.values.code}
            onChange={formik.handleChange}
          type="text" id="first_name8" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


      </div>
      {/*  */}
        <div > <p>  الرقم الضريبي </p> </div>
      <div> 
                    
                   <input
                    name='tax_number'
                   value={formik.values.tax_number}
                   onChange={formik.handleChange}
                   
                   type="text" id="first_name9" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        
      </div>
      <div className='text-center'> <p> تصنيف الحساب </p> </div>
      <div> 
        
         <input 
             name='balance_type'
             value={formik.values.balance_type}
            onChange={formik.handleChange}
         
         type="text" id="first_name10" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


      </div>

      {/*  */}
      <div > <p>  حالة المورد </p> </div>
      <div > 
                    
            <label className="inline-flex items-center cursor-pointer">
        <input 
            name='ofline'
             value={formik.values.ofline}
            onChange={formik.handleChange}
        
        type="checkbox" defaultValue className="sr-only peer outline-none" defaultChecked />
        <div className="relative w-11 focus:border-none focus:shadow-none! h-6 bg-gray-200 rounded-full peer   dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black dark:peer-checked:bg-blue-600" />
  
        </label>


        
      </div>
      {/*  */}

    

    </div>
    {/*  */}

    <div className='pt-3'>
     <h2 className='text-[24px]  pb-0 mb-0' > اعدادات الحساب  </h2>
     <p className='text-[#95AAC9] text-[20px]'>  من هنا يمكنك التحكم في اعدادات الحساب </p>
   </div>
   {/*  */}
    <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-5 pb-5  mt-4">
   
      <div > <p> توزيع الارصده على الفروع </p> </div>
      <div > 
                    
            <label className="inline-flex items-center cursor-pointer">
        <input
            name=' status'
             value={formik.values. status}
                  
        
        onChange={handleShowTable} type="checkbox" defaultValue className="sr-only peer outline-none" checked={showTable}   />
        <div className={`relative w-11 focus:border-none focus:shadow-none! h-6 bg-gray-200 rounded-full peer   dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black dark:peer-checked:bg-blue-600 ${showTable?"bg-black":"bg-gray-300"}`} />
  
        </label>


        
      </div>
      {/*  */}

    

    </div>
    {showTable?
        <div>
          

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#CBCBCB] dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
                <th scope="col" className="px-6 py-5 w-36">
                الفرع
                </th>
                <th scope="col" className="px-6 py-3 w-36 ">
                نوع الرصيد
                </th>
                <th scope="col" className="px-6 py-3 w-60">
                الرصيد الافتتاحي
                </th>
                <th scope="col" className="px-6 py-3 w-60">
                الرصيد المدين الافتتاحي
                </th>
                <th scope="col" className="px-6 py-3 w-60">
                الرصيد الدائن الأفتتاحي
                </th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white transition-all duration-100 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 *:text-center">
                <th scope="row" className="px-6 py-2 bg-[#D7D7D7] text-center font-medium text-gray-900 bg-[] whitespace-nowrap dark:text-white">
                               <input
                               name='accountBranchBalances[0].branch_id'
                               value={formik.values.accountBranchBalances[0].branch_id}
                               onChange={formik.handleChange}
                               
                               disabled type="text" id="first_name" className={` w-[100%] h-fit  placeholder:text-center! text-center  outline-none text-black text-sm focus:ring-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none placeholder:text-black `} placeholder="new branch2" />

                </th>
                <td className=" border  ">
                <select
                 value={selectElment}
                 onChange={(e)=> setselectElment(e.target.value)}
                id="countries" className=" text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  text-center mx-auto outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected >نوع الرصيد </option>
                    <option value="نراكمي">تراكمي</option>
                    <option value="دائن و مدين"> دائن ومدين </option>
                </select>
                </td>
                <td className="   border  ">
                <input disabled={selectElment=="دائن و مدين"} type="text" id="first_name" className={` w-[100%] h-fit  placeholder:text-center! text-center  ${selectElment=="نراكمي"?"bg-white":"bg-[#CBCBCB]"} outline-none text-gray-900 text-sm focus:ring-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none `} placeholder="الرصيد الافتتاحي" />
                </td>
                <td className=" border ">
                <input disabled={selectElment=="نراكمي"} type="text" id="second_name" className={`placeholder:text-center!  text-center  ${selectElment=="نراكمي"?"bg-[#CBCBCB]":"bg-white"}   outline-none text-gray-900 text-sm  focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none `} placeholder="الرصيد المدين الافتتاحي" />

                </td>
                <td className={`  border `}>
                    <input disabled={selectElment=="نراكمي"} type="text" id="third_name" className={`placeholder:text-center! w-full  ${selectElment=="نراكمي"?"bg-[#CBCBCB]":"bg-white"}  text-center  outline-none text-gray-900 text-sm  focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none` } placeholder="الرصيد المدين الافتتاحي" />

                </td>
            </tr>
            <tr className="bg-white transition-all duration-100 border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 *:text-center">
                <th scope="row" className="px-6 py-2 bg-[#D7D7D7] text-center font-medium text-gray-900 bg-[] whitespace-nowrap dark:text-white">
                new branch
                </th>
                <td className="  border  ">
                <select
                 value={selectElment2}
                 onChange={(e)=> setselectElment2(e.target.value)}
                id="countries" className=" text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  text-center mx-auto outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>نوع الرصيد </option>
                    <option value="نراكمي">تراكمي</option>
                    <option value="دائن و مدين"> دائن ومدين </option>
                </select>
                </td>
                <td className="  border ">
                <input disabled={selectElment2=="دائن و مدين"} type="text" id="first_name" className={`placeholder:text-center! text-center  ${selectElment2=="نراكمي"?"bg-white":"bg-[#CBCBCB]"} outline-none text-gray-900 text-sm focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none `} placeholder="الرصيد الافتتاحي" />
                </td>
                <td className="  ">
                <input disabled={selectElment2=="نراكمي"} type="text" id="second_name" className={`placeholder:text-center!  text-center  ${selectElment2=="نراكمي"?"bg-[#CBCBCB]":"bg-white"}   outline-none text-gray-900 text-sm  focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none `} placeholder="الرصيد المدين الافتتاحي" />

                </td>
                <td className={` border `}>
                    <input disabled={selectElment2=="نراكمي"} type="text" id="third_name" className={`placeholder:text-center! w-full  ${selectElment2=="نراكمي"?"bg-[#CBCBCB]":"bg-white"}  text-center  outline-none text-gray-900 text-sm  focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 focus:outline-none` } placeholder="الرصيد المدين الافتتاحي" />

                </td>
            </tr>
            
            </tbody>
        </table>
     </div>


       
        </div>:
         <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-5 pb-5 border-b border-gray-300">
            <div > <p> نوع الرصيد </p> </div>
            <div> 
               

                <select
                value={selectElment3}
                onChange={(e)=>{
                    setselectElment3(e.target.value)
                    formik.handleChange
                }}
                id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               
                <option value="تراكمي">  تراكمي </option>
                <option value="دائن و مدين"> دائن و مدين </option>
                
                </select>

    
            </div>
            <div className='text-center'> <p>  الرصيد الابتدائي </p> </div>
            <div> 
                
                <input
                    name='opening_balance'
                   value={formik.values.opening_balance}
                   onChange={formik.handleChange}
                type="text" id="first_name11" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            </div>
           {/*  */}
             <div > <p>  قائمة الأسعار  </p> </div>
            <div> 
                            
                        <input 
                            name='price_list_id'
                          value={formik.values.price_list_id}
                         onChange={formik.handleChange}
                        type="text" id="first_name12" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                
            </div>
            <div className='text-center'> <p> حد الدين </p> </div>
            <div> 
                
                <input
                name='max_balance'
                    
                   value={formik.values.max_balance}
                   onChange={formik.handleChange}
                
                type="text" id="first_name13" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            </div>

     
           {/*  */}

         </div>
         }


         {/*  */}
           <div className='pt-3'>
     <h2 className='text-[24px] font-[400] pb-0 mb-0' >  عنوان الفاتورة  </h2>
     <p className='text-[#95AAC9] text-[20px]'>  عنوان الفوترة والفاتورة المسجله </p>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-5 pb-5 border-b border-gray-300 mt-4 ">
            <div > <p> العنوان</p> </div>
            <div> 
                            
                        <input type="text" id="first_name14" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                
            </div>
            <div className='text-center'> <p> خط السير</p> </div>
            <div> 
                
                <input type="text" id="first_name15" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            </div>
      {/*  */}
            <div > <p> الدولة </p> </div>
            <div> 
                            
                        <input type="text" id="first_name16" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                
            </div>
            <div className='text-center'> <p> المدينة </p> </div>
            <div> 
                
                <input type="text" id="first_name17" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


            </div>

    
      {/*  */}

    

         </div>
         {/*  */}

            <div className='pt-3'>
     <h2 className='text-[24px] font-[400] pb-0 mb-0' > معلومات الاتصال  </h2>
     <p className='text-[#95AAC9] text-[20px]'>  مهلومات الاتصال بالمورد </p>
          </div>
          <div className="grid grid-cols-[1fr_2fr_1fr_2fr] gap-5 pb-5 border-b border-gray-300 mt-4 ">
      <div > <p> رقم الجوال</p> </div>
      <div> 
                    
                   <input 
                   name='phone1'
                   value={formik.values.phone1}
                   onChange={formik.handleChange}
                   type="tel" id="first_name18" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        
      </div>
      <div className='text-center'> <p> رقم أخر</p> </div>
      <div> 
        
         <input type="text" id="first_name19" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />


      </div>
      {/*  */}
        <div > <p>البريد الالكتروني </p> </div>
      <div> 
                    
                   <input type="text" id="first_name20" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-black block w-[80%] outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        
      </div>
 

    
      {/*  */}

    

         </div>
   <button type="submit" className=" cursor-pointer  mb-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> انشاء </button>
   
   </div>
   </form>
 
  
  </>
}
