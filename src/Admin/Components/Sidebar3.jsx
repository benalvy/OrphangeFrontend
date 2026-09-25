import React from 'react'
import { BsBrowserChrome, BsChatRightDots } from 'react-icons/bs'
import { FaHouseChimney } from 'react-icons/fa6'
import {IoIosHeartEmpty,IoMdHeart} from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate=useNavigate()
  const linkStyle = ({ isActive }) =>
    `py-2 rounded-lg flex items-center gap-2 ps-6 font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-violet-700 text-white'
        : 'text-black hover:bg-violet-100'
    }`

    const logout=()=>{
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


          <div className='flex justify-center'>
            <img className='rounded rounded-full w-[150px] h-[150px]' src="https://thumbs.dreamstime.com/b/admin-icon-vector-male-person-profile-avatar-gear-cogwheel-settings-configuration-flat-color-glyph-pictogram-150124023.jpg" alt="" />
          </div>

          <li className='pt-3'>
            <NavLink to='/admindash' className={linkStyle}>
              <FaHouseChimney className='text-lg' />
              Admin Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to='/browseAdmin' className={linkStyle}>
              <BsBrowserChrome className='text-lg' />
              Browse Orphanage
            </NavLink>
          </li>

          <li>
            <NavLink to='/userAdmin' className={linkStyle}>
              <IoIosHeartEmpty className='text-lg' />
              Browse Users
            </NavLink>
          </li>

        </ul>
        <div className='px-3 mt-4 pt-8'>

          <div className='bg-violet-200 rounded-lg px-2 py-2'>

            <img
              className='rounded-lg'
              src='https://img.magnific.com/free-vector/business-user-cog_78370-7040.jpg?semt=ais_hybrid&w=740&q=80'
              alt=''
            />

            <div className='pt-3'>
              <button onClick={logout} className='bg-red-600 px-3 py-2 rounded-lg font-semibold text-white w-full'>
              LogOut
            </button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Sidebar