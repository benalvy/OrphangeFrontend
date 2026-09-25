import React from 'react'
import Header from '../Components/Header'
import child from '../../assets/child.png'
import corn from '../../assets/corn.png'
import { BsBalloonHeartFill, BsHeartPulse, BsPeopleFill, BsPersonCircle } from 'react-icons/bs'
import run from '../../assets/run.png'
import { FaHandHoldingHeart, FaPeopleCarry, FaRegEye, FaRegStar } from 'react-icons/fa'
import { TbTargetArrow } from 'react-icons/tb'
import { IoIosGift, IoIosHeartEmpty } from 'react-icons/io'
import { GiBookmarklet, GiCoffeeCup } from 'react-icons/gi'
import { IoShirtOutline } from 'react-icons/io5'
import { FaHouseChimney } from 'react-icons/fa6'
import { SiIlovepdf } from 'react-icons/si'
import { MdCurrencyRupee, MdSecurity } from 'react-icons/md'
import { PiHandHeartBold } from 'react-icons/pi'
import { GrDocumentUpdate, GrSecure } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import Footer from '../Components/Footer'
function About() {
    return (
        <>
            <Header></Header>
            <div>
                <div className='grid grid-cols-12 px-[70px]'>
                    <div className='col-span-6'>
                        <h1 className='pt-[50px] text-violet-600 font-semibold'>ABOUT US</h1>
                        <h1 className='text-5xl font-bold flex gap-10'>We Exist To Create <BsBalloonHeartFill className='text-violet-600' /></h1>
                        <h1 className='text-5xl font-bold text-violet-600'>better Tomorrows</h1>
                        <h1 className='text-5xl font-bold'>for every child.</h1>
                        <p className='pt-8 text-gray-700'>Novahomes is more than a platform its a movement of <br />compassion,trust,and hope.We connect kind hearted <br />people with orphanages in need  and empower them to <br />create a nurturing environment for children to grow,<br />learn,and dream.</p>
                    </div>
                    <div className='col-span-6'>
                        <img src={child} alt="" />
                    </div>
                </div>
                <div className='pt-[70px] pb-10'>
                    <div className='grid grid-cols-12 gap-10 px-[70px]'>
                        <div className='col-span-4 '>
                            <img className='rounded-2xl' style={{ height: "280px" }} src={run} alt="" />
                        </div>
                        <div className='col-span-4'>
                            <h1 className='pb-[15px] text-violet-600 font-bold text-2xl'>Our Story</h1>
                            <p className='text-justify text-gray-600'>"Novahomes was born out of a simple belief every child deserves love, care, and the opportunity to build a better tomorrow.
                                We saw orphanages struggling with resources, limited visibility, and inconsistent support. At the same time, we saw countless kind hearts willing to help but unsure where or how.
                                So, we built HopeNest  a trusted bridge between those who want to give and those who need it the most." <br /><br />
                                <span className='font-bold'>Together, we can build a world where no child feels alone.</span></p>
                        </div>
                        <div className='col-span-4'>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-12 flex gap-3 bg-violet-100 p-1 rounded-2xl border-3 border-white'>
                                    <div className=''>
                                        <FaRegEye className='text-6xl text-violet-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-lg'>Our Vision</h1>
                                        <p className=''>To be the most trusted global platform that ensures every orphaned child recieves love,support,and equal opportunities to succeed in life.</p>
                                    </div>
                                </div>
                                <div className='col-span-12 flex gap-3 bg-red-100 p-1 rounded-2xl border-3 border-white'>
                                    <div className=''>
                                        <TbTargetArrow className='text-6xl text-red-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold text-lg'>Our Mission</h1>
                                        <p>To connect donors with verified orphanages and empower them with the resources they need to provide a safe ,nurturing,and dignified life for every child.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-[70px] pt-6 pb-10'>
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
                <div className='px-[100px]'>
                    <h1 className='font-semibold text-3xl text-center pb-8'>Our Core <span className='text-violet-600'>Values</span></h1>
                    <div className='flex justify-between pb-[40px]'>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-blue-100 rounded-full p-9'>
                                <SiIlovepdf className='text-6xl text-blue-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Compassion</h1>
                            <h1 className='text-center text-gray-700'>we lead with kindness <br /> and empathy in everything <br />  we do.</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-green-100 rounded-full p-9'>
                                <MdSecurity className='text-6xl text-green-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Integrity</h1>
                            <h1 className='text-center text-gray-700'>we are transparent, <br />honest, and accountable <br />to our community.</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-orange-100 rounded-full p-9'>
                                <BsPeopleFill className='text-6xl text-orange-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Empowerment</h1>
                            <h1 className='text-center text-gray-700'>we believe in creating <br />opprotunities and enabling <br /> lasting change.</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-red-100 rounded-full p-9'>
                                <FaPeopleCarry className='text-6xl text-red-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Collaboration</h1>
                            <h1 className='text-center text-gray-700'>We achieve more when we  <br />work togrther for a common <br />purpose.</h1>
                        </div>
                        <div className='border p-8 rounded-2xl border-gray-300 shadow-lg'>
                            <div className='flex justify-center bg-green-100 rounded-full p-9'>
                                <FaRegStar className='text-6xl text-green-600' />
                            </div>
                            <h1 className='text-center font-bold pt-3'>Impact</h1>
                            <h1 className='text-center text-gray-700'>We are driven by results <br />that create real,measurable <br />change in childrens lives.</h1>
                        </div>
                    </div>
                </div>
                <div className='px-[70px] pb-8 pt-8'>
                    <div className='grid grid-cols-12 gap-8'>
                        <div className='col-span-6 px-[60px] flex gap-5 bg-violet-50 py-9 rounded-2xl shadow-lg border-1 border-violet-200'>
                            <PiHandHeartBold className='text-9xl text-violet-700' />
                            <div className='text-lg text-gray-800'>
                                <h1 className='text-2xl font-bold text-violet-700'>For Donors</h1>
                                <p className='pb-3'>Your generosity can change a child's life.Every donation,no matter the size,brings hope,happiness, and a brighter future.</p>
                                <button className='bg-violet-600 p-2 rounded text-white font-semibold'>Strat Donating</button>
                            </div>
                            <img src={corn} style={{height:"200px",width:"250px"}} alt="" />
                        </div>
                        <div className='col-span-6 px-[60px] flex gap-5 bg-violet-50 py-9 rounded-2xl shadow-lg border-1 border-violet-200'>
                            <FaHouseChimney className='text-9xl text-violet-700' />
                            <div className='text-lg text-gray-800'>
                                <h1 className='text-2xl font-bold text-violet-700'>For Orphanages</h1>
                                <p className='pb-8'>Join our platform to get verified,share your needs,and connect with donors who truly care.</p>
                                <button className='bg-white rounded text-violet-600 border-1 px-3 py-2 font-semibold'>Register Your Orphanage</button>
                            </div>
                            <img className='rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeuuGKqd-TSDoTN9RrkQgQHc3XN3oBftUZX14VOdCDEs4JrGtC4K923M&s=10" style={{height:"200px",width:"250px"}} alt="" />
                        </div>
                    </div>
                </div>
                <div className='pb-10'>
                    <h1 className='font-semibold text-center text-4xl'>Why Choose <span className='font-semibold text-violet-600'>Novahomes</span>?</h1>
                </div>
                <div className='px-[70px] pb-8'>
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

export default About
