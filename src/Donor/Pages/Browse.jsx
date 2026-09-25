import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { LuAlignJustify } from 'react-icons/lu'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoChatbubblesOutline, IoFilterOutline, IoShirtOutline } from 'react-icons/io5'
import { GoVerified } from 'react-icons/go'
import { FaHandshake } from 'react-icons/fa'
import { HiGift } from 'react-icons/hi2'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { GiWhiteBook } from 'react-icons/gi'
import { BsCupHotFill, BsHeartPulse } from 'react-icons/bs'
import { getApprovedOrphanagesAPI } from '../../Services/allAPI'
function Browse() {
    const [orphanages, setOrphanages] = useState([])
    const [search, setSearch] = useState("")

    const getApprovedOrphanages = async () => {
        try {
            const response = await getApprovedOrphanagesAPI()
            setOrphanages(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getApprovedOrphanages()
    }, [])

    const filteredOrphanages = orphanages.filter(item =>
        item.Orphanagename.toLowerCase().includes(search.toLowerCase()) ||
        item.Address.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2'><Sidebar></Sidebar></div>
                    <div className='col-span-10 px-[10px] py-2'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-9'>
                                <h1 className='ps-4 pt-2 text-2xl font-bold'>Browse Orphanage</h1>
                                <p className='ps-4 text-gray-600 pb-3'>Explore verified orphanages and support their mission to create a better tomorrow</p>
                                <div className='grid grid-cols-12 px-[40px] pt-4 pb-4 border rounded-2xl border-gray-300'>
                                    <div className='flex gap-2'>
                                        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className="border px-3 py-2 rounded border-gray-400 bg-violet-50 w-80" placeholder='Search' />
                                        <button className='border px-2 py-1 rounded border-violet-600 flex items-center gap-1 font-semibold text-violet-700'>Search</button>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <div className='grid grid-cols-12 gap-3 p-4 border-gray-300 rounded-2xl'>
                                        {
                                            filteredOrphanages.length === 0 ? (
                                                <div className='flex flex-col items-center justify-center py-10 text-center'>
                                                    <div className='text-5xl mb-3'>
                                                        🏠
                                                    </div>
                                                    <h2 className='text-lg font-semibold text-gray-700'>
                                                        No Orphanages Found
                                                    </h2>
                                                    <p className='text-gray-500 text-sm mt-1'>
                                                        Try a different search term.
                                                    </p>
                                                </div>
                                            ) :
                                                (filteredOrphanages.map(item => (
                                                    <div key={item._id} className='col-span-4 border border-gray-300 rounded-t-3xl rounded-3xl shadow-lg'>
                                                        <img className='w-full rounded-t-3xl' style={{ height: "200px" }} src={item.Image} alt="" />
                                                        <span className='flex gap-1 bg-white border border-green-700 text-green-700 items-center w-1/3 justify-center relative bottom-8 left-2 rounded-full font-semibold'><GoVerified />Verified</span>
                                                        <div className='px-4'>
                                                            <h1 className='font-bold'>{item.Orphanagename}</h1>
                                                            <h1 className='text-gray-700'>{item.Address}</h1>
                                                            <p className='text-gray-700'>Providing education,shelter,and care for underprivilaged children.</p>
                                                            <div className='flex justify-between pt-2 pb-2 gap-3'>
                                                                <h1 className='bg-violet-100 text-violet-700 px-3 py-1 rounded-lg '>Education</h1>
                                                                <h1 className='bg-violet-100 text-violet-700 px-3 py-1 rounded-lg '>Shelter</h1>
                                                            </div>
                                                            <div className='flex justify-between gap-4   pb-4'>
                                                                <h1>{item.ChildrenCount} Children</h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-3 p-2'>
                                <div className='border border-gray-300 rounded-2xl pt-2 p-2 relative sticky top-[30px]'>
                                    <h1 className='font-bold pb-1 ps-1'>Your impact</h1>
                                    <div className='flex items-center px-4 gap-3 pb-2'>
                                        <div className='bg-blue-100 rounded-full p-2'>
                                            <FaHandshake className='text-6xl text-blue-700' />
                                        </div>
                                        <div>
                                            <h1 className='text-2xl font-semibold'>0</h1>
                                            <p>Total donated</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center px-4 gap-3 pb-2'>
                                        <div className='bg-green-100 rounded-full p-2'>
                                            <HiGift className='text-6xl text-green-700' />
                                        </div>
                                        <div>
                                            <h1 className='text-2xl font-semibold'>0</h1>
                                            <p>Donation Made</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center px-4 gap-3 pb-3'>
                                        <div className='bg-red-100 rounded-full p-2'>
                                            <BiHappyHeartEyes className='text-6xl text-red-700' />
                                        </div>
                                        <div>
                                            <h1 className='text-2xl font-semibold'>0</h1>
                                            <p>Orphanages Supported</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-center pb-1'>
                                        <button className='bg-violet-700 text-white rounded px-3 py-1 font-bold'>Profile</button>
                                    </div>
                                </div>
                                <div className=' pt-10 relative sticky top-[450px]'>
                                    <div className='border rounded-2xl border-gray-300'>
                                        <h1 className='ps-2 font-bold pt-1'>Need categories</h1>
                                        <div className='flex items-center px-4 gap-3 pb-2'>
                                            <div className='bg-blue-100 rounded-full p-2'>
                                                <GiWhiteBook className='text-3xl text-blue-700' />
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Education</h1>
                                                <p>120+ orphanages</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center px-4 gap-3 pb-2'>
                                            <div className='bg-green-100 rounded-full p-2'>
                                                <BsCupHotFill className='text-3xl text-green-700' />
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Food</h1>
                                                <p>95+ orphanages</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center px-4 gap-3 pb-2'>
                                            <div className='bg-orange-100 rounded-full p-2'>
                                                <IoShirtOutline className='text-3xl text-orange-700' />
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Eseentials</h1>
                                                <p>95+ orphanages</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center px-4 gap-3 pb-3'>
                                            <div className='bg-red-100 rounded-full p-2'>
                                                <BsHeartPulse className='text-3xl text-red-700' />
                                            </div>
                                            <div>
                                                <h1 className='text-lg font-semibold'>Health Care</h1>
                                                <p>Total donated</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Browse