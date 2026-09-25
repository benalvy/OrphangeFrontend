import React, { useEffect, useState } from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FiSearch, FiBell } from 'react-icons/fi'
import { FaClipboardList, FaGift, FaBoxOpen } from 'react-icons/fa'
import { getCurrentOrphanageAPI, getNeedsAPI } from '../../Services/allAPI'
import { Link } from 'react-router-dom'
function Dashboard2() {
  const [orphanage, setOrphanage] = useState(null)
  const [needs, setneeds] = useState([])
  const getCurrentOrphanage = async () => {
    try {
      const response = await getCurrentOrphanageAPI()
      console.log("Current orphanage:", response.data)
      setOrphanage(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getallneedsoforphanage = async () => {
    try {
      const result = await getNeedsAPI()
      setneeds(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    getCurrentOrphanage()
    getallneedsoforphanage()

  }, [])
  return (
    <>
      <div className='min-h-screen bg-white'>
        <div className='grid grid-cols-12'>

          <div className='col-span-2'>
            <Sidebar2 />
          </div>

          <div className='col-span-10 p-4 space-y-4'>

            <div className=''>
              <div className='bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-5 flex items-center justify-between'>

                <div>
                  <h1 className='text-4xl font-bold text-gray-900'>
                    Welcome Back,
                    <span className='text-purple-700'>{orphanage?.Orphanagename}</span>
                  </h1>

                  <p className='text-gray-600 mt-3 max-w-xl'>
                    Manage your orphanage needs and respond to donor requests.
                  </p>
                </div>

                <img
                  src='https://cdn-icons-png.flaticon.com/512/4202/4202841.png'
                  alt='children'
                  className='w-44 hidden md:block'
                />

              </div>
            </div>

            <div className='pt-3 pb-3'>
              <div className='grid grid-cols-3 gap-4'>

                <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between'>

                  <div className='flex items-center gap-4'>

                    <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center'>
                      <FaClipboardList className='text-purple-600 text-2xl' />
                    </div>

                    <div>
                      <p className='text-sm text-gray-500'>Active Needs</p>
                      <h2 className='text-3xl font-bold text-gray-900'>{needs.length}</h2>
                      <p className='text-xs text-gray-500'>Needs currently active</p>
                    </div>

                  </div>

                  <span className='text-purple-500 text-xl'>›</span>
                </div>

                <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between'>

                  <div className='flex items-center gap-4'>

                    <div className='w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center'>
                      <FaGift className='text-orange-500 text-2xl' />
                    </div>

                    <div>
                      <p className='text-sm text-gray-500'>Pending Requests</p>
                      <h2 className='text-3xl font-bold text-gray-900'>8</h2>
                      <p className='text-xs text-gray-500'>Waiting for approval</p>
                    </div>

                  </div>

                  <span className='text-orange-500 text-xl'>›</span>
                </div>

                <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between'>

                  <div className='flex items-center gap-4'>

                    <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center'>
                      <FaBoxOpen className='text-green-600 text-2xl' />
                    </div>

                    <div>
                      <p className='text-sm text-gray-500'>Donations Received</p>
                      <h2 className='text-3xl font-bold text-gray-900'>22</h2>
                      <p className='text-xs text-gray-500'>Completed donations</p>
                    </div>

                  </div>

                  <span className='text-green-600 text-xl'>›</span>
                </div>

              </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>

              <div className='col-span-12 bg-white rounded-2xl border border-gray-200 p-5'>

                <div className='flex justify-between items-center mb-4'>
                  <h2 className='text-xl font-bold text-gray-800 pb-2'>
                    Current Needs
                  </h2>

                  <button className='text-purple-600 text-sm font-medium hover:underline'>

                  </button>
                </div>
                { 
                  needs.length == 0 ?
                    <div className='text-center'>No current needs</div>
                    :
                    (
                      <div className='grid grid-cols-3 gap-4 max-h-72 overflow-y-auto pr-1'>
                        {needs.map((item, index) => (
                          <div
                            key={index}
                            className='border border-gray-200 rounded-2xl overflow-hidden'
                          >

                            <img
                              src={item.ImageURL}
                              alt={item.title}
                              className='h-36 w-full object-cover'
                            />

                            <div className='p-4'>

                              <h3 className='font-semibold text-gray-800'>
                                {item.Item}
                              </h3>

                              <p className='text-sm text-gray-500 mt-2'>
                                {item.Required}
                              </p>

                              <p className='text-sm text-gray-500'>
                                Priority:{item.priority}
                              </p>

                              <div className='flex gap-2 mt-4'>

                                <Link to={'/manage'} className='flex-1 text-center border border-purple-500 text-purple-600 py-2 rounded-lg text-lg font-semibold hover:bg-purple-50'>
                                  Edit
                                </Link>

                                <button className='flex-1 bg-green-100 text-green-700 py-2 rounded-lg text-sm hover:bg-green-200'>
                                  Fulfilled
                                </button>

                              </div>

                            </div>
                          </div>
                        ))}

                      </div>
                    )
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard2