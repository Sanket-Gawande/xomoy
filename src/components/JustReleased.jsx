import React from 'react'

const JustReleased = ({ ITEM }) => {
  return (
    <div className=' mx-4 shrink-0 bg-slate-700  my-8 shadow-lg rounded-md mx-auto p-2'>
      <div className='w-[100%] overflow-hidden'>

        <img src={ITEM?.imageLarge} alt={ITEM?.mp3_title} className="w-[250px] h-[250px]   rounded-md hover:scale-105 duration-500 transition-all 
        object-cover
        " />
      </div>
      <h4 className='text-center text-white  text-xs md:text-md mx-0 pt-2 font-bold'>{ITEM.mp3_title}</h4>
    </div>
  )
}

export default JustReleased