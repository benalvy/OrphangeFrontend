import React, { useEffect, useState } from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FaRupeeSign, FaDownload, FaCheckCircle } from 'react-icons/fa'
import { getMoneyDonationsAPI } from '../../Services/allAPI'

function Money2() {
  const [donations, setDonations] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)

  const fetchDonations = async () => {
    try {
      const result = await getMoneyDonationsAPI()
      setDonations(result.data.donations)
      setTotalAmount(result.data.totalAmount)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDonations()
  }, [])

  return (
    <>
      <div className='min-h-screen bg-white'>

        <div className='grid grid-cols-12'>

         
          <div className='col-span-2'>
            <Sidebar2 />
          </div>

        
          <div className='col-span-10 p-5 space-y-5'>

            <div className='pb-3'>
                <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between'>

              <div>
                <h1 className='text-3xl font-bold text-gray-900'>
                  Money Donations
                </h1>

                <p className='text-gray-500 mt-1'>
                  View all monetary donations received by your orphanage.
                </p>
              </div>

              <div className='bg-green-100 text-green-700 px-4 py-2 rounded-xl font-medium text-sm'>
                Total: ₹{totalAmount}
              </div>

            </div>
            </div>

            <div className='pb-3'>
                <div className='grid grid-cols-3 gap-4'>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center'>
                  <FaRupeeSign className='text-purple-600 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>Total Donations</p>
                  <h2 className='text-2xl font-bold text-gray-900'>₹{totalAmount}</h2>
                </div>

              </div>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center'>
                  <FaCheckCircle className='text-green-600 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>Successful Donations</p>
                  <h2 className='text-2xl font-bold text-gray-900'>{donations.length}</h2>
                </div>

              </div>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center'>
                  <FaDownload className='text-orange-500 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>Receipts Available</p>
                  <h2 className='text-2xl font-bold text-gray-900'>{donations.length}</h2>
                </div>

              </div>

            </div>
            </div>

            <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>

              <div className='p-5 border-b border-gray-100 flex items-center justify-between'>

                <h2 className='text-xl font-bold text-gray-800'>
                  Recent Money Donations
                </h2>

                <button className='text-purple-600 text-sm font-medium hover:underline'>
                  View All
                </button>

              </div>

              <div className='overflow-x-auto'>

                <table className='w-full text-left'>

                  <thead className='bg-gray-50 border-b border-gray-200'>
                    <tr className='text-sm text-gray-600'>
                      <th className='px-6 py-4 font-semibold'>Donor</th>
                      <th className='px-6 py-4 font-semibold'>Amount</th>
                      <th className='px-6 py-4 font-semibold'>Payment Method</th>
                      <th className='px-6 py-4 font-semibold'>Date</th>
                      <th className='px-6 py-4 font-semibold'>Transaction ID</th>
                      <th className='px-6 py-4 font-semibold text-center'>
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-100'>

                    {donations.map((donation, index) => (
                      <tr key={index} className='hover:bg-gray-50 transition'>

                        <td className='px-6 py-4'>

                          <div className='flex items-center gap-3'>

                            <img
                              src={`https://i.pravatar.cc/100?img=${index + 30}`}
                              alt={donation.donor}
                              className='w-10 h-10 rounded-full object-cover'
                            />

                            <span className='font-medium text-gray-900'>
                              {donation.donor}
                            </span>

                          </div>

                        </td>

                        <td className='px-6 py-4 font-semibold text-gray-900'>
                          ₹{donation.amount}
                        </td>

                        <td className='px-6 py-4 text-gray-700'>
                          {donation.method}
                        </td>

                        <td className='px-6 py-4 text-gray-700'>
                          {new Date(donation.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>

                        <td className='px-6 py-4 text-sm font-mono text-gray-600'>
                          {donation.transaction}
                        </td>

                        <td className='px-6 py-4 text-center'>
                          <span className='px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700'>
                            {donation.status}
                          </span>
                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Money2