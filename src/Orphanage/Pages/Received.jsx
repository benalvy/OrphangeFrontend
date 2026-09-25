import React from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FaCheckCircle, FaBoxOpen, FaDownload } from 'react-icons/fa'

function Received() {
  const receivedDonations = [
    {
      donor: 'Rahul Sharma',
      items: '2 School Uniforms, 5 Notebooks',
      receivedDate: '12 Aug 2026',
      trackingId: 'TRK10245',
      proof: 'Receipt Uploaded',
    },
    {
      donor: 'Anjali Nair',
      items: '10 Blankets, 5 Sweaters',
      receivedDate: '11 Aug 2026',
      trackingId: 'TRK10246',
      proof: 'Receipt Uploaded',
    },
    {
      donor: 'Vikram Patel',
      items: '20 kg Rice, 10 kg Dal',
      receivedDate: '10 Aug 2026',
      trackingId: 'TRK10247',
      proof: 'Receipt Uploaded',
    },
    {
      donor: 'Neha Verma',
      items: '15 Hygiene Kits',
      receivedDate: '09 Aug 2026',
      trackingId: 'TRK10248',
      proof: 'Receipt Uploaded',
    },
  ]

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
                  Received Donations
                </h1>

                <p className='text-gray-500 mt-1'>
                  View all essential item donations that have been successfully received.
                </p>
              </div>

              <div className='bg-green-100 text-green-700 px-4 py-2 rounded-xl font-medium text-sm'>
                {receivedDonations.length} Donations Received
              </div>

            </div>
            </div>

            <div className='pb-3'>
                <div className='grid grid-cols-3 gap-4'>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center'>
                  <FaCheckCircle className='text-green-600 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>Completed Donations</p>
                  <h2 className='text-2xl font-bold text-gray-900'>4</h2>
                </div>

              </div>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center'>
                  <FaBoxOpen className='text-purple-600 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>This Week</p>
                  <h2 className='text-2xl font-bold text-gray-900'>4</h2>
                </div>

              </div>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4'>

                <div className='w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center'>
                  <FaDownload className='text-orange-500 text-2xl' />
                </div>

                <div>
                  <p className='text-sm text-gray-500'>Proof Files</p>
                  <h2 className='text-2xl font-bold text-gray-900'>4</h2>
                </div>

              </div>

            </div>
            </div>

            <div className='space-y-4'>

              {receivedDonations.map((donation, index) => (
                <div className='pb-3'>
                    <div
                  key={index}
                  className='bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition'
                >

                  <div className='flex items-start justify-between gap-4'>

                    <div className='flex items-start gap-4'>

                      <img
                        src={`https://i.pravatar.cc/100?img=${index + 40}`}
                        alt={donation.donor}
                        className='w-14 h-14 rounded-full object-cover'
                      />

                      <div className='space-y-2'>

                        <div>
                          <h3 className='font-semibold text-lg text-gray-900'>
                            {donation.donor}
                          </h3>

                          <p className='text-sm text-gray-500'>
                            Received on {donation.receivedDate}
                          </p>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm'>

                          <div className='bg-gray-50 rounded-xl p-3'>
                            <p className='text-gray-500 mb-1'>Items Received</p>
                            <p className='font-medium text-gray-800'>
                              {donation.items}
                            </p>
                          </div>

                          <div className='bg-gray-50 rounded-xl p-3'>
                            <p className='text-gray-500 mb-1'>Tracking ID</p>
                            <p className='font-medium text-gray-800'>
                              {donation.trackingId}
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>

                    <span className='px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 whitespace-nowrap'>
                      Received
                    </span>

                  </div>

                  <div className='flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-gray-100'>

                    <div className='text-sm text-gray-600'>
                      📄 {donation.proof}
                    </div>

                    <div className='flex gap-2'>

                      <button className='border border-purple-300 text-purple-700 hover:bg-purple-50 px-4 py-2 rounded-xl text-sm font-medium transition'>
                        View Proof
                      </button>

                      <button className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition'>
                        Send Thank You
                      </button>

                    </div>

                  </div>

                </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Received
