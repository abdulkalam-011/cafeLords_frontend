import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
  return (
    <div className='p-5'>
        <h1 className='text-2xl font-semibold'>Reviews (1)</h1>
       <ReviewCard/>
       <ReviewCard/>
       <ReviewCard/>
       <ReviewCard/>
    </div>
  )
}

export default Reviews