import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import boats from '../../assets/boats.png'
import { BsPersonCircle } from 'react-icons/bs'
import { IoIosGift, IoIosHeartEmpty } from 'react-icons/io'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { GrDocumentUpdate, GrSecure } from 'react-icons/gr'
import { MdCurrencyRupee } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import Footer from '../Components/Footer'
import { getApprovedOrphanagesAPI } from '../../Services/allAPI'
function Orphanages() {

    const [data, setdata] = useState([])
    const getorphanage = async () => {
        try {
            const result = await getApprovedOrphanagesAPI()
            setdata(result.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getorphanage()
    }, [])
    return (
        <>
            <Header></Header>
            <div>
                <div className='px-[70px]'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-6 px-[70px] pt-[80px]'>
                            <h1 className='text-violet-600 font-semibold'>Orphanages</h1>
                            <h1 className='text-5xl font-bold'>Discover Orphanages.</h1>
                            <h1 className='text-5xl text-violet-600 font-bold'>Change Lives.</h1>
                            <p className='pt-4 text-gray-700'>Explore verified orphanages working every day to provide love,care, <br />education,and hope to children in need.Your support can help them build a brighter tomorrow.</p>
                        </div>
                        <div className='col-span-6'>
                            <img src={boats} alt="" />
                        </div>
                    </div>
                </div>
                <div className='px-[70px] pt-8 pb-10'>
                    <div className='grid grid-cols-12 border rounded-3xl border-gray-200 shadow-lg'>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-violet-100 rounded-full p-3'>
                                    <BsPersonCircle className='text-6xl text-violet-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-violet-600'>250+</h1>
                                    <h1 className='text-gray-600'>Orphanages <br /> Registered</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-red-100 rounded-full p-3'>
                                    <IoIosHeartEmpty className='text-6xl text-red-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-red-600'>1500+</h1>
                                    <h1 className='text-gray-600'>Children's Lives <br /> Impacted</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-green-100 rounded-full p-3'>
                                    <FaHandHoldingHeart className='text-6xl text-green-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-green-600'>5000+</h1>
                                    <h1 className='text-gray-600'>Generous <br />Donor</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-orange-100 rounded-full p-3'>
                                    <IoIosGift className='text-6xl text-orange-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-orange-600'>2Cr+</h1>
                                    <h1 className='text-gray-600'>Donations<br /> Facilitated</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[70px]'>
                    <h1 className='text-3xl font-bold ps-9 pb-3'>Explore Orphanages</h1>
                    <div className='grid grid-cols-12 px-[50px] pb-8 pt-4 gap-5'>
                        {
                            data.map((item, key) => (
                                <div className='col-span-3 border border-gray-300 rounded-t-3xl rounded-3xl shadow-lg'>
                                    <img className='w-full rounded-t-3xl' style={{ height: "200px" }} src={item.Image} alt="" />
                                    <span className='flex gap-1 bg-white border border-green-700 text-green-700 items-center w-1/3 justify-center relative bottom-8 left-2 rounded-full font-semibold'><GoVerified />Verified</span>
                                    <div className='px-4'>
                                        <h1 className='font-bold'>{item.Orphanagename}</h1>
                                        <h1 className='text-gray-700'>{item.Address}</h1>
                                        <p className='text-gray-700'>Providing education,shelter,and care <br />for underprivilaged children.</p>
                                        <div className='flex justify-between pt-2 pb-2 gap-3'>
                                            <h1 className='bg-violet-100 text-violet-700 px-3 py-1 rounded-lg '>Education</h1>
                                            <h1 className='bg-violet-100 text-violet-700 px-3 py-1 rounded-lg '>Shelter</h1>
                                            <h1 className='bg-violet-100 text-violet-700 px-3 py-1 rounded-lg '>Health</h1>
                                        </div>
                                        <div className='flex justify-between gap-4   pb-4'>
                                            <h1>{item.ChildrenCount} Children</h1>
                                            <h1>⭐4.8(128)</h1>
                                            <button className='bg-white border border-violet-700 text-violet-700 font-semibold px-2 rounded-lg'> Profile</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='pt-8 pb-8'>
                    <h1 className='text-center text-3xl font-bold pb-10'>How We Ensure Trust?</h1>
                    <div className='grid grid-cols-12 px-[80px]'>
                        <div className='col-span-3'>
                            <div className='flex justify-center'>
                                <GrSecure className="text-7xl text-violet-600 bg-violet-100 rounded-full p-3" />
                            </div>
                            <h1 className='font-bold text-center'>100% Verified</h1>
                            <p className='text-gray-600 text-center'>All orphanages are verified for <br /> authenticity and trust.</p>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex justify-center'>
                                <MdCurrencyRupee className="text-7xl text-green-600 bg-green-100 rounded-full p-3" />
                            </div>
                            <h1 className='font-bold text-center'>100% Transparent</h1>
                            <p className='text-gray-600 text-center'>Every donation is tracked <br /> and you see the impact.</p>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex justify-center'>
                                <GrDocumentUpdate className="text-7xl text-red-600 bg-red-100 rounded-full p-3" />
                            </div>
                            <h1 className='font-bold text-center'>Regular Updates</h1>
                            <p className='text-gray-600 text-center'>Orphanages share regular  <br />updates and reports on <br /> how funds are used.</p>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex justify-center'>
                                <BiSupport className="text-7xl text-blue-600 bg-blue-100 rounded-full p-3" />
                            </div>
                            <h1 className='font-bold text-center'>Dedicated Support</h1>
                            <p className='text-gray-600 text-center'>Our team is always here <br /> to help you and answer <br /> your queries</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Orphanages
