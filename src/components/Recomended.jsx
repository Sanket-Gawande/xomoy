import React from 'react'

const Recomended = ({ ITEM }) => {
  
  return (
    <div className=' mx-4 shrink-0 bg-slate-700  my-8 shadow-lg rounded-md mx-auto p-2'>
      <div className='w-[100%] overflow-hidden'>

        <img src={ITEM?.artist_image} alt={ITEM?.artist_name} className="w-[250px] h-[250px]   rounded-md hover:scale-105 duration-500 transition-all 
        object-cover
        " />
      </div>
      <h4 className='text-center text-white  pt-2 font-bold'>{ITEM.artist_name}</h4>
    </div>
  )
}

export default Recomended