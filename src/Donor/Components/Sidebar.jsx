import React, { useState } from 'react'
import { BsBrowserChrome, BsChatRightDots } from 'react-icons/bs'
import { CiGift } from 'react-icons/ci'
import { FaRupeeSign } from 'react-icons/fa'
import { FaHouseChimney } from 'react-icons/fa6'
import { IoIosHeartEmpty, IoMdHeart, IoMdMenu, IoMdClose } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  const linkStyle = ({ isActive }) =>
    `py-2 rounded-lg flex items-center gap-2 ps-6 font-semibold transition-all duration-200 ${
      isActive ? 'bg-violet-700 text-white' : 'text-black hover:bg-violet-100'
    }`

  const logout = () => {
    sessionStorage.clear()
    navigate('/')
  }

  const links = [
    { to: '/dashboard', label: 'Dashboard', icon: FaHouseChimney },
    { to: '/browse', label: 'Browse Orphanage', icon: BsBrowserChrome },
    { to: '/mydonation', label: 'My Donations', icon: IoIosHeartEmpty },
    { to: '/money', label: 'Donate Money', icon: FaRupeeSign },
    { to: '/essential', label: 'Donate Essentials', icon: CiGift },
    { to: '/chat', label: 'Chat', icon: BsChatRightDots },
    { to: '/setting', label: 'Profile Settings', icon: IoSettingsOutline },
  ]

  return (
    <>
      {/* Mobile top bar */}
      <div className='md:hidden fixed top-0 inset-x-0 z-30 h-14 flex items-center gap-3 px-4 bg-violet-50 shadow'>
        <button onClick={() => setOpen(true)} aria-label='Open menu'>
          <IoMdMenu className='text-2xl text-violet-700' />
        </button>
        <h1 className='font-bold'>
          Nova<span className='text-violet-700'>Homes</span>
        </h1>
      </div>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className='fixed inset-0 bg-black/40 z-40 md:hidden'
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-dvh w-64 shrink-0 overflow-y-auto bg-violet-50
          transition-transform duration-300 md:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={closeMenu}
          aria-label='Close menu'
          className='md:hidden absolute top-3 right-3'
        >
          <IoMdClose className='text-2xl text-violet-700' />
        </button>

        <div className='flex gap-2 pt-4 ps-3'>
          <IoMdHeart className='text-4xl text-violet-700' />
          <div>
            <h1 className='font-bold'>
              Nova<span className='text-violet-700'>Homes</span>
            </h1>
            <p className='text-gray-600 pb-2'>Together we build.</p>
          </div>
        </div>

        <ul className='px-3 pt-2 space-y-1'>
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink to={to} className={linkStyle} onClick={closeMenu}>
                <Icon className='text-lg' />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='px-3 mt-4 pt-8 pb-4'>
          <div className='bg-violet-200 rounded-lg px-2 py-2'>
            <img
              className='rounded-lg w-full'
              src='https://i.pinimg.com/originals/97/50/2e/97502e44f0a8d187c58cadd0d6ffe8cf.gif'
              alt=''
            />
            <p className='font-semibold pb-1 mt-2'>
              Your kindness creates a ripple of hope and changes little lives.
            </p>
            <button
              onClick={logout}
              className='bg-red-600 px-3 py-2 rounded-lg font-semibold text-white w-full hover:bg-red-700 transition'
            >
              LogOut
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar