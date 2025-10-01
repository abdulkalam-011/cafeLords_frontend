import React from 'react'

const NotFound = () => {

  const handleBackClick = ()=>{
    history.back()
  }
  return (
    <div className='w-full h-[100vh] flex flex-col items-center justify-center'>

    <h1 className='text-[200px] font-bold'>4🌍4</h1>
    <p className='text-[100px]'>Not Found</p>
    <button className='px-5 py-3 border-2 rounded-4xl' onClick={handleBackClick}>Go Back 🔙</button>
    </div>
  )
}

export default NotFound