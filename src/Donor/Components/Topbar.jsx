import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { LuAlignJustify } from 'react-icons/lu'
import { Link } from 'react-router-dom'
function Topbar() {
    return (
        <>
            <div className='border p-3 bg-white rounded-2xl border-gray-300 relative sticky top-2 z-10'>
                <div className='flex justify-between items-center'>
                    <LuAlignJustify className='text-2xl' />
                    <input type="text" className='border px-2 py-1 rounded-lg border-gray-300' style={{ width: "400px" }} placeholder='Search' />
                    <div className='flex items-center gap-6'>
                        <IoIosNotificationsOutline className='text-2xl font-bold' />
                        <Link to={'/chat'}>
                            <IoChatbubblesOutline className='text-2xl font-bold' />
                        </Link>
                        <div className='flex gap-2'>
                            <img style={{ height: "50px", width: "50px" }} className='rounded-full' src="https://media.easy-peasy.ai/4e600a82-8aac-4abb-95cd-f87cc9125a0f/18ea5802-d34e-4fbb-91e2-99baebb2eac9_medium.webp" alt="" />
                            <div>
                                <h1 className='font-bold'>Rahul Sharma</h1>
                                <h1>Donor</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
