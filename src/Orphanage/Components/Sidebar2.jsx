import React from 'react'
import { BsChatRightDots } from 'react-icons/bs'
import { CiGift } from 'react-icons/ci'
import { FaRupeeSign } from 'react-icons/fa'
import { FaHouseChimney } from 'react-icons/fa6'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar2() {

  const navigate=useNavigate()
  const linkStyle = ({ isActive }) =>
    `py-2 rounded-lg flex items-center gap-2 ps-6 font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-violet-700 text-white'
        : 'text-black hover:bg-violet-100'
    }`

    const logout = () => {
    sessionStorage.clear()
    navigate('/')
}

  return (
    <>
      <div
        className='bg-violet-50 sticky top-0'
        style={{ height: '100vh' }}
      >

        <div className='flex gap-2 pt-4 ps-3'>

          <IoMdHeart className='text-4xl text-violet-700' />

          <div>

            <h1 className='font-bold'>
              Nova<span className='text-violet-700'>Homes</span>
            </h1>

            <p className='text-gray-600 pb-2'>
              Together we build.
            </p>

          </div>

        </div>
        <ul className='px-3 pt-2 space-y-1'>

          <li>
            <NavLink to='/dashboard2' className={linkStyle}>
              <FaHouseChimney className='text-lg' />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to='/manage' className={linkStyle}>
              <MdOutlineManageAccounts className='text-lg' />
              Manage Needs
            </NavLink>
          </li>

          <li>
            <NavLink to='/request' className={linkStyle}>
              <IoIosHeartEmpty className='text-lg' />
              Donation Requests
            </NavLink>
          </li>

          <li>
            <NavLink to='/money2' className={linkStyle}>
              <FaRupeeSign className='text-lg' />
              Money Donations
            </NavLink>
          </li>

          {/* <li>
            <NavLink to='/received' className={linkStyle}>
              <CiGift className='text-lg' />
              Received Donations
            </NavLink>
          </li> */}

          <li>
            <NavLink to='/chat2' className={linkStyle}>
              <BsChatRightDots className='text-lg' />
              Chat
            </NavLink>
          </li>

          <li>
            <NavLink to='/settings2' className={linkStyle}>
              <IoSettingsOutline className='text-lg' />
              Profile Settings
            </NavLink>
          </li>

        </ul>
        <div className='px-3 mt-4 py-8'>

          <div className='bg-violet-200 rounded-lg px-2 py-2'>

            <img
              className='rounded-lg'
              src='https://i.pinimg.com/originals/45/81/ec/4581ec273098b4d3497d4dc8c1fc948c.gif'
              alt=''
            />

            <p className='font-semibold pb-1 mt-2'>
              Your kindness creates a ripple of hope and changes little lives.
            </p>

            <button onClick={logout} className='bg-red-600 px-3 py-2 rounded-lg font-semibold text-white w-full hover:bg-red-700 transition'>
              LogOut
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar2