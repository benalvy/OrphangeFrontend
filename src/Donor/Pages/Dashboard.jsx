import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { LuAlignJustify } from 'react-icons/lu'
import { IoChatbubblesOutline, IoPeople } from 'react-icons/io5'
import { IoIosNotificationsOutline, IoMdHeartEmpty } from 'react-icons/io'
import { GiPeaceDove } from 'react-icons/gi'
import { TfiGift } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import { getApprovedOrphanagesAPI } from '../../Services/allAPI'
function Dashboard() {
    const [orphanages, setOrphanages] = useState([])

    const getApprovedOrphanages = async () => {

        try {
            const response = await getApprovedOrphanagesAPI()
            console.log("Approved orphanages:", response.data)
            setOrphanages(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const user = JSON.parse(sessionStorage.getItem("user"))
    const name=user.username
    const pic=user.profileImage

    useEffect(() => {
        getApprovedOrphanages() 
    }, [])

    return (
        <>
            <div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2'><Sidebar></Sidebar></div>
                    <div className='col-span-10 px-[10px] py-2'>
                        <div className='border p-3 rounded-2xl border-gray-300'>
                            <div className='flex justify-between items-center'>
                                <LuAlignJustify className='text-2xl' />
                                <input type="text" className='border px-2 py-1 rounded-lg border-gray-300' style={{ width: "400px" }} placeholder='Search' />
                                <div className='flex items-center gap-6'>
                                    <IoIosNotificationsOutline className='text-2xl font-bold' />
                                    <IoChatbubblesOutline className='text-2xl font-bold' />
                                    <div className='flex gap-2'>
                                        <img style={{ height: "50px", width: "50px" }} className='rounded-full' src={pic} alt="" />
                                        <div>
                                            <h1 className='font-bold'>{name}</h1>
                                            <h1>Donor</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-12 pt-4 gap-4'>
                            <div className='col-span-12 px-[40px] border border-gray-300 rounded-2xl py-4 flex justify-between bg-gradient-to-r from-violet-200 via-purple-100 to-pink-200'>
                                <div>
                                    <h1 className='text-4xl font-bold pt-6'>Welcome Back,<span className='text-violet-600'>{name}!</span></h1>
                                    <p className='text-gray-600'>Thank you being the reason many children <br />believe in a better tomorrow.</p>
                                </div>
                                <img style={{ height: "180px", width: "180px" }} src="https://png.pngtree.com/png-vector/20250911/ourmid/pngtree-two-best-friend-boys-enjoying-fun-and-laughter-png-image_17401827.webp" alt="" />
                            </div>
                        </div>
                        <div className='pt-4'>
                            <div className='grid grid-cols-12 gap-3'>
                                <div className='col-span-8 border border-gray-300 rounded-2xl px-4 pb-6 pt-2'>
                                    <h1 className='pb-2 font-bold text-lg'>Continue Your Journey</h1>
                                    <div className='max-h-85 overflow-y-auto pr-1 pb-3'>

                                        {orphanages.length === 0 ? (

                                            <div className='flex flex-col items-center justify-center py-10 text-center'>

                                                <div className='text-5xl mb-3'>
                                                    🏠
                                                </div>

                                                <h2 className='text-lg font-semibold text-gray-700'>
                                                    No Orphanages Registered
                                                </h2>

                                                <p className='text-gray-500 text-sm mt-1'>
                                                    There are currently no verified orphanages available.
                                                </p>

                                            </div>

                                        ) : (

                                            <div className='grid grid-cols-12 gap-4'>

                                                {orphanages.map((item) => (

                                                    <div
                                                        key={item._id}
                                                        className='col-span-4 border border-gray-300 rounded-2xl overflow-hidden'
                                                    >

                                                        <img
                                                            className='rounded-t-2xl w-full h-32 object-cover'
                                                            src={
                                                                item.Image ||
                                                                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKj0j6twQq87fWU01FWkVoogfPR26StmPfUAFIoZCTRng18JfLuac8eMZ9I&s=10"
                                                            }
                                                            alt={item.Orphanagename}
                                                        />

                                                        <div className='px-3'>

                                                            <h1 className='text-lg font-medium mt-2'>
                                                                {item.Orphanagename}
                                                            </h1>

                                                            <p className='text-sm text-gray-500'>
                                                                {item.Address}
                                                            </p>

                                                            <div className='flex justify-center pt-3 pb-3'>

                                                                <Link
                                                                    to={'/mydonation'}
                                                                    className='border border-violet-600 px-4 py-1 font-semibold text-violet-600 rounded'
                                                                >
                                                                    Donate
                                                                </Link>

                                                            </div>

                                                        </div>

                                                    </div>

                                                ))}

                                            </div>

                                        )}

                                    </div>
                                </div>
                                <div className='col-span-4 px-6 border border-gray-300 rounded-2xl'>
                                    <div className='flex justify-between pt-3'>
                                        <h1 className='font-semibold'>Recent Donations</h1>
                                        <button className='semibold border px-2 rounded border-violet-600 text-violet-600'>View All</button>
                                    </div>
                                    <div className='max-h-85 overflow-y-auto pr-1 pb-3' >
                                        <div className='flex justify-between pt-3 items-center'>
                                            <img className='rounded' style={{ height: "50px", width: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Uvi0fAKyYs9KsSjFqxyCYRbDo-cyUvSpcYnY8GH2AN_vyEmamUnLzo&s=10" alt="" />
                                            <div>
                                                <h1 className='font-semibold'>Sunshine</h1>
                                                <p>Pune,Maharashtra</p>
                                            </div>
                                            <div><h1 className='text-green-600 rounded-full border px-2 border-green-600'>Completed</h1></div>
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

export default Dashboard
