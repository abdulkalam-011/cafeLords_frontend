import PersonalInfo from '../components/ProfileDrawer/PersonalInfo'
import SideBar from '../components/ProfileDrawer/SideBar'
import { Outlet, Route, Routes } from 'react-router'

const Profile = () => {
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