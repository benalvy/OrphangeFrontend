import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className='px-[30px] flex justify-between shadow-md'>
        <div className='flex items-center'>
            <img style={{height:"100px",width:"120px"}} src="https://t4.ftcdn.net/jpg/02/80/61/55/360_F_280615596_6FwdicvJEsXQy6wpvJYMTzNZEl2cjJZf.jpg" alt="" />
            <div>
                <h1 className='text-2xl font-bold'>Nova<span className='text-violet-700'>Homes</span></h1>
                <p className='text-gray-600'>Every child deserves a home</p>
            </div>
        </div>
        <div className='flex items-center gap-10 font-medium cursor-pointer'>
            <h1 className='hover:text-violet-700'><Link to={'/'}>Home</Link></h1>
            <h1 className='hover:text-violet-700'><Link to={'/about'}>About Us</Link></h1>
            <h1 className='hover:text-violet-700'><Link to={'/orphanages'}>Orphanages</Link></h1>
            <h1 className='hover:text-violet-700'><Link to={'/contact'}>Contact Us</Link></h1>
        </div>
        <div className='flex items-center gap-5'>
            <Link to={'/login'} className='px-5 py-2 rounded rounded-2 bg-violet-700 text-white font-semibold flex items-center gap-1'><IoIosHeartEmpty className="text-white text-lg font-black" />Donate Now</Link>
            <Link to={'/login'} className='px-5 py-2 rounded rounded-2 border border-gray-300 font-semibold'>Login/Register</Link>
        </div>
      </div>
    </>
  )
}

export default Header
