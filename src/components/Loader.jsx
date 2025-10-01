import React from 'react'
import "../css/style.css"

const Loader = () => {
  return (
   <>
      <div className='w-[100vw] p-8 flex justify-center items-center h-[100vh]'>
        <div className='w-20'>
          <div className='loader border-2 '></div>
          <p>loading.....</p>
        </div>
      </div>
   </>
  )
}

export default Loader