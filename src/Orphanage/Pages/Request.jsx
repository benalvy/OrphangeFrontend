import React, { useEffect, useState } from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FaCheck } from 'react-icons/fa'
import {
  approveEssentialAPI,
  getallessentialsAPI,
  getalluserAPI
} from '../../Services/allAPI'

function Request() {

  const [user, setuser] = useState([])
  const [donate, setdonate] = useState([])

  const getalluser = async () => {
    try {

      const result = await getalluserAPI()

      console.log("USERS:", result.data)

      setuser(result.data)

    } catch (error) {

      console.log(error)

    }
  }

  const getallessentials = async () => {
    try {

      const result = await getallessentialsAPI()

      console.log("ESSENTIAL REQUESTS:", result.data)

      setdonate(result.data)

    } catch (error) {

      console.log(error)

    }
  }

  const handleApprove = async (id) => {

    try {

      await approveEssentialAPI(id)
      getallessentials()

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    getallessentials()
    getalluser()

  }, [])


  return (

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

                  Donation Requests

                </h1>

                <p className='text-gray-500 mt-1'>

                  Review and respond to donor essential item requests.

                </p>

              </div>


              <div className='bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-medium text-sm'>

                {donate.length} Requests

              </div>

            </div>

          </div>


          <div className='space-y-4'>


            {donate.length === 0 && (

              <div className='bg-white rounded-2xl border border-gray-200 p-10 text-center'>

                <h3 className='text-lg font-semibold text-gray-700'>

                  No Donation Requests

                </h3>

                <p className='text-gray-500 mt-2'>

                  No essential donation requests found.

                </p>

              </div>

            )}



            {donate.map((request, index) => {

              const donor = user.find(
                u => u.email === request.email
              )


              return (

                <div
                  key={request._id || index}
                  className='bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition'
                >


                  <div className='flex items-start justify-between gap-4'>

                    <div className='flex items-start gap-4'>


                      <img
                        src={
                          donor?.profileImage ||
                          'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                        }
                        alt='Donor'
                        className='w-14 h-14 rounded-full object-cover'
                      />


                      <div className='space-y-2'>
                        <div>

                          <h3 className='font-semibold text-lg text-gray-900'>

                            {donor?.username ||
                              'Unknown Donor'}

                          </h3>


                          <p className='text-sm text-gray-500'>

                            Donation request submitted on{' '}

                            {request.Date
                              ? request.Date.slice(0, 10)
                              : 'Unknown date'}

                          </p>

                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 text-sm'>

                          <div className='bg-gray-50 rounded-xl p-3'>

                            <p className='text-gray-500 mb-1'>

                              Item

                            </p>

                            <p className='font-medium text-gray-800'>

                              {request.item || '—'}

                            </p>

                          </div>

                          <div className='bg-gray-50 rounded-xl p-3'>

                            <p className='text-gray-500 mb-1'>

                              Message

                            </p>

                            <p className='font-medium text-gray-800'>

                              {request.message || '—'}

                            </p>

                          </div>


                        </div>


                      </div>

                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        request.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >

                      {request.status === 'pending'
                        ? 'Pending'
                        : 'Received'}

                    </span>


                  </div>

                  {request.status === 'pending' && (

                    <div className='flex flex-wrap gap-3 mt-5 pt-4 border-t border-gray-100'>

                      <button
                        onClick={() =>
                          handleApprove(request._id)
                        }
                        className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition'
                      >

                        <FaCheck />

                        Mark as Received

                      </button>

                    </div>

                  )}


                </div>

              )

            })}


          </div>

        </div>

      </div>

    </div>

  )
}

export default Request