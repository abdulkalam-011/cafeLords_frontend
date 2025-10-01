import React from 'react'
import { Link } from 'react-router'


const LoginButton = () => {
  return (
     <Link to='/login' name='logout' >
        <button className='bg-white border-white text-black px-4 py-2 rounded hover:scale-103 transition-all rounded-3xl text-xl' name='Logout'>Login</button>
       </Link>
      )
}

export default LoginButton