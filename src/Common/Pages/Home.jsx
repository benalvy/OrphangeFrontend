import React from 'react'
import Header from '../Components/Header'
import gemini from '../../assets/gemini.png'
import { IoIosGift, IoIosHeartEmpty } from 'react-icons/io'
import { BsHeartPulse, BsPersonCircle } from 'react-icons/bs'
import { FaHandHoldingHeart, FaNotesMedical } from 'react-icons/fa'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { PiHandHeartFill, PiMagnifyingGlassBold } from 'react-icons/pi'
import { GiBookmarklet, GiCoffeeCup, GiHotMeal } from 'react-icons/gi'
import { IoShirtOutline } from 'react-icons/io5'
import { FaHouseChimney } from 'react-icons/fa6'
import Footer from '../Components/Footer'
import { MdOutlineVerified } from 'react-icons/md'
import { GrGrow } from 'react-icons/gr'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
            <Header></Header>
            <div>
                <div className='relative bg-cover bg-left' style={{ backgroundImage: `url(${gemini})`, height: "500px" }}>
                    <div className='absolute inset-3 bg-gradient-to-r from-white via-white/20 to-transparent'></div>
                    <div className='relative z-10 px-[70px] pt-[40px]'>
                        <span className='text-violet-600 rounded rounded-lg py-1 font-semibold'>TOGETHER,WE CAN</span>
                        <h1 className='text-6xl font-bold text-black'>Build a better</h1>
                        <h1 className='text-6xl font-bold text-violet-600'>Tomorrow.</h1>
                        <p className='text-black text-lg font-semibold pt-6'>NovaHomes is a bridge between kind-hearted people and</p>
                        <p className='text-black text-lg font-semibold'>orphangages in need.Your support brings hope,smiles,</p>
                        <p className='text-black text-lg font-semibold'>and a brighter future to children who deserve it the most.</p>
                        <div className='flex items-center gap-5 pt-6'>
                            <Link to={'/login'} className='px-5 py-2 rounded rounded-2 bg-violet-700 text-white font-semibold flex items-center gap-1'><IoIosHeartEmpty className="text-white text-2xl font-black" />Donate Now</Link>
                            <Link to={'/login'} className='px-5 py-2 rounded rounded-2 border border-violet-600 font-bold bg-white text-violet-600'>Register an Orphanage</Link>
                        </div>
                    </div>
                </div>
                <div className='px-[70px] pt-8 pb-10'>
                    <div className='grid grid-cols-12 border rounded-3xl border-gray-200 shadow-lg'>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-violet-100 rounded-full p-3'>
                                    <BsPersonCircle className='text-6xl text-violet-600'/>
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
                                    <IoIosHeartEmpty className='text-6xl text-red-600'/>
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
                                    <FaHandHoldingHeart className='text-6xl text-green-600'/>
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
                                    <IoIosGift className='text-6xl text-orange-600'/>
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold text-orange-600'>2Cr+</h1>
                                    <h1 className='text-gray-600'>Donations<br /> Facilitated</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-10'>
                    <h1 className='text-3xl font-semibold text-center'>How It Works</h1>
                    <div className='px-[70px] pt-10'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-3 text-center'>
                                <span className='bg-violet-600 rounded-full px-3 py-2 text-white font-bold text-lg'>1</span>
                                <div className='flex justify-center '>
                                    <div className='bg-violet-100 rounded-full p-4'>
                                        <HiOutlineBuildingOffice2 className='text-6xl text-violet-600' />
                                    </div>
                                </div>
                                <h1 className='font-bold'>Orphanages Registered</h1>
                                <h1 className='text-gray-700'>Orphanages create a profile <br />verify their details,and list <br />their needs</h1>
                            </div>
                            <div className='col-span-3 text-center'>
                                <span className='bg-red-600 rounded-full px-3 py-2 text-white font-bold text-lg'>2</span>
                                <div className='flex justify-center '>
                                    <div className='bg-red-100 rounded-full p-4'>
                                        <PiMagnifyingGlassBold className='text-6xl text-red-600' />
                                    </div>
                                </div>
                                <h1 className='font-bold'>We Verify</h1>
                                <h1 className='text-gray-700'>Our team Verifies each<br />orphanage to ensure<br />transparency and trust.</h1>
                            </div>
                            <div className='col-span-3 text-center'>
                                <span className='bg-green-600 rounded-full px-3 py-2 text-white font-bold text-lg'>3</span>
                                <div className='flex justify-center '>
                                    <div className='bg-green-100 rounded-full p-4'>
                                        <PiHandHeartFill className='text-6xl text-green-600' />
                                    </div>
                                </div>
                                <h1 className='font-bold'>Donors Discover</h1>
                                <h1 className='text-gray-700'>Donors explore verified<br />orphanages and choose<br />causes to support</h1>
                            </div>
                            <div className='col-span-3 text-center'>
                                <span className='bg-orange-600 rounded-full px-3 py-2 text-white font-bold text-lg'>4</span>
                                <div className='flex justify-center '>
                                    <div className='bg-orange-100 rounded-full p-4'>
                                        <IoIosGift className='text-6xl text-orange-600' />
                                    </div>
                                </div>
                                <h1 className='font-bold'>Lives Changes</h1>
                                <h1 className='text-gray-700'>Your donations reach the<br />right place and create a<br />lasting impact.</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[100px]'>
                    <h1 className='font-semibold text-3xl text-center pb-8'>Explore Needs</h1>
                    <div className='flex justify-between pb-[40px]'>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-blue-100 rounded-full p-9'>
                                <GiBookmarklet className='text-6xl text-blue-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Education</h1>
                            <h1 className='text-center text-gray-700'>help children access<br />quality education</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-green-100 rounded-full p-9'>
                                <GiCoffeeCup className='text-6xl text-green-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Food</h1>
                            <h1 className='text-center text-gray-700'>help children access<br />quality food</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-orange-100 rounded-full p-9'>
                                <IoShirtOutline className='text-6xl text-orange-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Clothes</h1>
                            <h1 className='text-center text-gray-700'>help children access<br />quality Clothes</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-red-100 rounded-full p-9'>
                                <BsHeartPulse className='text-6xl text-red-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Health</h1>
                            <h1 className='text-center text-gray-700'>help children access<br />quality Health</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-green-100 rounded-full p-9'>
                                <FaHouseChimney className='text-6xl text-green-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Shelter</h1>
                            <h1 className='text-center text-gray-700'>help children access<br />quality Shelter</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pb-[40px]'>
                    <Link to={'/login'} className='px-5 py-2 rounded rounded-2 border border-violet-600 font-bold bg-white text-violet-600'>View All Needs</Link>
                </div>
                <div className='px-[70px] pb-8'>
                    <div className='grid grid-cols-12 gap-[40px] bg-gradient-to-r from-violet-100 to-white-100 rounded-2xl p-[60px]'>
                        <div className='col-span-4 pt-6 ps-6'>
                            <h1 className='text-4xl font-bold'>Your Support</h1>
                            <h1 className='text-4xl font-bold'>Creates <span className='text-violet-600'>Real Impact</span></h1>
                            <p className='pt-2 text-gray-600'>Every donation,no matter how small,create a ripple <br />of change in a childs life.</p>
                            <p className='flex items-center font-semibold gap-1 pt-4'><MdOutlineVerified className='text-green-600' />Transparent and secure donations.</p>
                            <p className='flex items-center font-semibold gap-1'><MdOutlineVerified className='text-green-600' />Direct impact on verified orphanages</p>
                            <p className='flex items-center font-semibold gap-1'><MdOutlineVerified className='text-green-600' />Regular updates and reports.</p>
                        </div>
                        <div className='col-span-4 border rounded-full border-5 border-violet-600 flex items-center'>
                            <img className='rounded-full' src="https://cimages.milaap.org/milaap/image/upload/c_fill,g_faces,h_315,w_420/v1557425159/production/images/campaign/32300/1.crackers_sweets_new_dresses_for_orphan_children_at_seruds_orphanage_in_kurnool_turdqr_1557425161.jpg" alt="" />
                        </div>
                        <div className='col-span-4 w-3/4'>
                            <div className=' rounded-lg '>
                                <div className='flex items-center gap-4 ps-2 py-5'>
                                    <div className='bg-green-100 rounded-full p-2'>
                                        <GrGrow className='text-5xl text-green-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-2xl text-violet-600'>2,500+</h1>
                                        <h1 className='text-gray-600'>Children Educated</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 ps-2 py-5'>
                                    <div className='bg-orange-100 rounded-full p-2'>
                                        <GiHotMeal className='text-5xl text-orange-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-2xl text-violet-600'>1.2M+</h1>
                                        <h1 className='text-gray-600'>Meals provided</h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 ps-2 py-5'>
                                    <div className='bg-blue-100 rounded-full p-2'>
                                        <FaNotesMedical className='text-5xl text-blue-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-2xl text-violet-600'>25+</h1>
                                        <h1 className='text-gray-600'>Medical Camp</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[70px] pt-10'>
                    <div className='bg-gradient-to-l from-violet-900 to-blue-100 flex justify-between items-center px-[60px] py-4 rounded-2xl'>
                        <div>
                            <h1 className='font-bold text-white text-2xl'>Stay Connected.Stay inspired.</h1>
                            <p className='text-black'>Subscribe to our newsletter and get the latest updates on stories <br />needs, and ways to make a difference.</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <input className='bg-white rounded p-2' placeholder='Email' type="email" name="" id="" />
                            <button className='bg-white p-2 rounded text-violet-800 font-semibold'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home
