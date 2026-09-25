import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import { FaHandshake, FaWallet, FaTimes } from 'react-icons/fa'
import { HiGift } from 'react-icons/hi2'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { GiWhiteBook } from 'react-icons/gi'
import { BsBalloonHeart, BsBank, BsCupHotFill, BsFillCreditCard2BackFill, BsHeartPulse } from 'react-icons/bs'
import { IoShirtOutline } from 'react-icons/io5'
import { MdOutlineSecurity } from 'react-icons/md'
import { GoVerified } from 'react-icons/go'
import { RiInformation2Fill } from 'react-icons/ri'
import { VscSymbolMethod } from 'react-icons/vsc'
import { IoIosLock } from 'react-icons/io'
import { toast } from 'react-toastify'
import { createCheckoutSessionAPI, getApprovedOrphanagesAPI } from '../../Services/allAPI'
import { loadStripe } from '@stripe/stripe-js';

function Money() {

    const [orphanage, setOrphanage] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedOrphanage, setSelectedOrphanage] = useState(null)
    const [amount, setAmount] = useState("")

    const getallorphanages = async () => {
        try {
            const result = await getApprovedOrphanagesAPI()
            setOrphanage(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getallorphanages()
    }, [])

    const openDonateModal = (item) => {
        setSelectedOrphanage(item)
        setAmount("")
        setShowModal(true)
    }

    const handlePay = async () => {
        if (!amount || Number(amount) <= 0) {
            toast.warning("Please enter a valid amount")
            return
        }

        try {
            const loggedInUser = JSON.parse(sessionStorage.getItem("user"))

            const donationData = {
                orphanageId: selectedOrphanage._id,
                Orphanagename: selectedOrphanage.Orphanagename,
                donorId: loggedInUser._id,
                donorName: loggedInUser.username,
                amount: Number(amount)
            }

            const result = await createCheckoutSessionAPI(donationData)

            if (result.status == 200 && result.data.url) {
                window.location.href = result.data.url // sends browser to Stripe's page
            } else {
                toast.error("Could not start payment")
            }

        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2 '><Sidebar></Sidebar></div>
                    <div className='col-span-10 px-[10px] py-2'>

                        <div>
                            <h1 className='text-2xl font-bold pt-3 ps-3'>Donate Money</h1>
                            <p className='ps-3 text-gray-600'>Your monetary support helps orphanages provide education,food,healthcare,<br />and a better life for children in need.</p>
                        </div>

                        <div className='p-3 space-y-4'>
                            {
                                orphanage.map(item => (
                                    <div className='pb-2'>
                                        <div key={item._id} className='flex gap-5 border border-gray-300 rounded-2xl p-3 items-center justify-between'>

                                            <div className='flex gap-5'>
                                                <img
                                                    className='rounded-2xl object-cover'
                                                    style={{ height: "150px", width: "150px" }}
                                                    src={item.Image}
                                                    alt=""
                                                />
                                                <div>
                                                    <h1 className='font-semibold'>{item.Orphanagename}</h1>
                                                    <h1>{item.Address}</h1>
                                                    <h1>{item.ChildrenCount} Children</h1>
                                                    <p className='text-gray-700'>{item.Care}</p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => openDonateModal(item)}
                                                className='bg-violet-700 hover:bg-violet-800 text-white px-5 py-3 rounded-xl font-medium transition'
                                            >
                                                Donate Money
                                            </button>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>

            {showModal && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>

                    <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-fadeIn'>

                        <button
                            onClick={() => setShowModal(false)}
                            className='absolute top-4 right-4 text-gray-500 hover:text-red-500'
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className='text-2xl font-bold text-violet-700 mb-1'>
                            Donate Money
                        </h2>

                        <p className='text-gray-500 text-sm mb-5'>
                            {selectedOrphanage?.Orphanagename} • {selectedOrphanage?.Address}
                        </p>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Enter Amount (Rs.)
                            </label>

                            <div className='pb-2'>
                                <input
                                    type='number'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder='e.g. 1000'
                                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500'
                                />
                            </div>
                        </div>

                        <div className='flex gap-3 mb-6 pb-2'>
                            {[500, 1000, 2000, 5000].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setAmount(val)}
                                    className='flex-1 border border-gray-300 rounded-xl py-2 text-sm font-medium hover:bg-violet-50 hover:border-violet-400 transition'
                                >
                                    Rs.{val}
                                </button>
                            ))}
                        </div>

                        <div className='flex items-center gap-2 bg-green-50 rounded-xl p-3 mb-6'>
                            <IoIosLock className='text-xl text-green-700' />
                            <p className='text-sm text-gray-700'>Your payment is 100% secure and encrypted</p>
                        </div>

                        <div className='flex justify-end gap-3 pt-3'>
                            <button
                                onClick={() => setShowModal(false)}
                                className='px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handlePay}
                                className='px-5 py-2 rounded-xl bg-violet-700 text-white hover:bg-violet-800 transition font-medium'
                            >
                                Pay Now
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default Money