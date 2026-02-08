
const ShimmerCard = () => {
  return (
    <>
      <div className="w-80 h-96  display-inline-block rounded-1 overflow-hidden relative shadow-lg  transition-shadow duration-300 ease-in-out rounded-lg bg-gray-600 ">
     
      <div className="w-full h-[65%] overflow-hidden bg-gray-200">
         <span className="w-full h-full  object-cover hover:scale-106 duration-200 ease bg-black"></span></div>
     
      <h2 className="text-2xl m-4 my-3 w-[50%] bg-gray-200 rounded-xl h-5 "></h2>
      <p className="m-4 text-xl  font-semibold  duration-200 ease price w-[50%] h-5  flex gap-2"><span className='w-16 h-5 bg-gray-200 rounded-xl'></span> <span className='w-12 h-5 bg-gray-200 rounded-xl'></span></p>
      <p className="px-4 text-xl  font-semibold text-green-500 mt-2 w-[35%] bg-gray-200 h-5 rounded-xl  m-4"></p>
       <div  className="w-16 h-16 flex justify-center items-center absolute bottom-3 right-3 bg-gray-200 rounded-full text-3xl">
       
      </div>
    </div>
    </>
  )
}

export default ShimmerCard