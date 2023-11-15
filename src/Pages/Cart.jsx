import React from 'react'

export default function Cart(props) {

     let totalprice = 0;
     for(let i =0; i<props.data.length; i++){
          const price = props.data[i];
          totalprice = totalprice + price.price;
     }

     let totalhour = 0;
     for(let i =0; i<props.data.length; i++){
          const hr = props.data[i];
          totalhour = totalhour + hr.hour;
     }


  return (
    <div className='w-1/4 ml-4 bg-white px-4 py-3 h-fit rounded-xl'>
     <p className=' text-[#2F80ED] font-bold text-lg my-2 border-b-2 py-2'>Credit Hour Remaining 7 hr</p>
     <p className='text-xl font-bold'>Course Name</p>
     <ol className=' py-3 list-decimal px-4'>
          {
               props.data.map((data, index) =>(

                    <li key={index} className='font-normal text-base my-1 text-gray-500'>{data.title}</li> 
               ))
          }
     </ol>
     <div className='flex text-base font-medium text-gray-500 border-y-2 py-2'>
          <p>Total Credit Hour :</p>
          <p className='ml-2'>{totalhour}</p>
     </div>
     <div className='flex font-semibold text-base text-gray-500 py-2'>
          <p>Total Price :</p>
          <p className=' mx-2'>{totalprice}</p>
          <p>USD</p>
     </div>
     
    </div>
  )
}
