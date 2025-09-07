import React from 'react'
import FormInputs from '../form inputs/FormInputs'

export default function Home() {
  return<>

 <main className='bg-[#EEEEEE] min-h-screen'>
     <div className="container">
   <div>
     <h2 className='text-[24px] font-[400] pb-0 mb-0' > إضافة مورد </h2>
     <p className='text-[#95AAC9] text-[20px]'> من هنا يمكنك إنشاء مورد جديد </p>
   </div>
   <div className='pt-3'>
     <h2 className='text-[24px] font-[400] pb-0 mb-0' > معلومات أساسيه  </h2>
     <p className='text-[#95AAC9] text-[20px]'>  المعلومات الاساسيه للموردين </p>
   </div>
  </div>
  <FormInputs/>
 </main>
  </>
}
