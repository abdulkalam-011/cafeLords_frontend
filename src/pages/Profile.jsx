import SideBar from '../components/ProfileDrawer/SideBar'
import { Route, Routes } from 'react-router'

const Profile = () => {
  return (
    <>
    <section className='w-full h-[100vh] bg-red-500 flex gap-5 px-10 py-5'>
    <SideBar />
    <div className='right w-full min-w-[600px] h-fit-content bg-green-400'>
        <Route path='/profile/' element={<h1>Profile Home</h1>} />
        <Route path='/profile/order' element={<h1>Orders</h1>} />
        <Route path='/profile/settings' element={<h1>Settings</h1>} />
    </div>
    </section>
    </>
  )
}

export default Profile