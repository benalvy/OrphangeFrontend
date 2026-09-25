import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { FaRupeeSign } from 'react-icons/fa'
import { getMyMoneyDonationsAPI } from '../../Services/allAPI'

function MyDonation() {
    const [donations, setDonations] = useState([])

    const fetchMyDonations = async () => {
        try {
            const result = await getMyMoneyDonationsAPI()
            setDonations(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyDonations()
    }, [])

    return (
        <>
            <div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-2'><Sidebar></Sidebar></div>
                    <div className='col-span-10 px-[10px] py-2'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 px-6'>
                                <h1 className='text-2xl font-bold pt-2'>My Donations</h1>
                                <p className='pb-2 text-gray-700'>Track your donation and see the impact you're Creating</p>

                                {donations.map((donation, index) => (
                                    <div className='pb-2' key={index}>
                                        <div className='border border-gray-300 rounded-2xl flex justify-between items-center p-3'>
                                            <div className='flex gap-3 items-center'>
                                                <FaRupeeSign className='text-5xl text-green-600' />
                                                <div>
                                                    <h1 className='font-bold'>{donation.orphanageName}</h1>
                                                    <p className='text-gray-700'>{donation.address}</p>
                                                    <p className='text-gray-700'>{donation.type}</p>
                                                </div>
                                            </div>
                                            <div className='pe-4'>
                                                <h1 className='text-green-600 font-bold'> ₹{donation.amount}</h1>
                                                <h1 className='text-green-600'>{donation.status}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyDonation