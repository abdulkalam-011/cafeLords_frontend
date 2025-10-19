import { useEffect } from 'react'
import PersonalInfo from '../components/ProfileDrawer/PersonalInfo'
import SideBar from '../components/ProfileDrawer/SideBar'
import { Outlet, Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector(state => state.auth)
  useEffect(()=>{
    window.scrollTo({top:0,behavior:'smooth'})
    document.title =  `Cafelords-${currentUser?.name}`
  },[])
  return (
    <>
    <section className='w-full h-[100vh] bg-gray-200 flex gap-5 px-20 py-15 overflow-hidden'>
    <SideBar />
    <div className='w-full h-full bg-white overflow-auto rounded'>
     <Outlet/>
    </div>
    </section>
    </>
  )
}

export default Profile