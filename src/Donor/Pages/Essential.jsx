import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Topbar from '../Components/Topbar'
import { IoShirt } from 'react-icons/io5'
import { BiSolidBlanket } from 'react-icons/bi'
import { GiBookPile } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { getApprovedOrphanagesAPI, getAllNeedsAPI, donateEssentialAPI, getMyDonationsAPI } from '../../Services/allAPI'
// ⬆️ added getMyDonationsAPI to the import

function Essential() {

  const [showModal, setShowModal] = useState(false)
  const [status, setstatus] = useState(true)
  const [orphanage, setOrphanage] = useState([])
  const [need, setneed] = useState([])
  const [myDonations, setMyDonations] = useState([])   // ⬅️ added

  // Track which orphanage the modal is currently for
  const [selectedOrphanage, setSelectedOrphanage] = useState(null)

  const [donationInput, setDonationInput] = useState({
    item: "",
    Date: "",
    message: ""
  })

  const getallorphanages = async () => {
    try {
      const result = await getApprovedOrphanagesAPI()
      console.log(result.data);
      
      setOrphanage(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getallneeds = async () => {
    try {
      const response = await getAllNeedsAPI()
      console.log(response.data);
      setneed(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  // ⬇️ added: fetch the donor's own donation history
  const getmydonations = async () => {
    try {
      const result = await getMyDonationsAPI()
      setMyDonations(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getallorphanages()
    getallneeds()
    getmydonations()   // ⬅️ added
  }, [])

  // ⬇️ added: helper to find this donor's donation to a given orphanage
  const getMyDonationFor = (orphanagename) => {
    const matches = myDonations.filter(d => d.Orphanagename === orphanagename)
    if (matches.length === 0) return null
    return matches[matches.length - 1]
  }


  // Open modal for a specific orphanage
  const openDonateModal = (item) => {
    setSelectedOrphanage(item)
    setDonationInput({
      item: "",
      Date: "",
      message: ""
    })
    setShowModal(true)
  }


  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setDonationInput({
      ...donationInput,
      [name]: value
    })
  }


  // Submit donation request
  const handleDonate = async () => {

    if (!donationInput.item || !donationInput.Date) {
      toast.warning("Please select an item and date")
      return
    }

    try {

      const donationData = {
        Orphanagename: selectedOrphanage.Orphanagename,
        item: donationInput.item,
        Date: donationInput.Date,
        message: donationInput.message
      }

      const result = await donateEssentialAPI(donationData)

      toast.success("Donation request sent successfully")

      setShowModal(false)

      setDonationInput({
        item: "",
        Date: "",
        message: ""
      })

      getmydonations()   // ⬅️ added: refresh status after sending

    } catch (error) {

      console.log(error)

      if (error.response) {
        toast.error(error.response.data)
      } else {
        toast.error("Something went wrong")
      }

    }

  }


  return (
    <>
      <div className='grid grid-cols-12 min-h-screen'>

        <div className='col-span-2'>
          <Sidebar />
        </div>

        <div className='col-span-10 px-[10px] py-2'>

          <div className='p-6'>

            <h1 className='text-2xl font-bold pt-3 ps-3'>Donate Essential</h1>

            <p className='text-gray-600 mt-2'>
              Your support helps orphanages provide clothes, blankets,
              educational materials, and other essential items for children in need.
            </p>

            <div>
              {
                orphanage.map(item => {

                  const existingDonation = getMyDonationFor(item.Orphanagename)   // ⬅️ added

                  return (
                    <div key={item._id} className='pt-3'>
                      <div className='bg-white rounded-2xl shadow-md p-5 mt-6 flex items-center justify-between'>

                        <div className='flex gap-4'>

                          <img
                            className='rounded-2xl object-cover'
                            style={{ height: '150px', width: '150px' }}
                            src={item.Image}
                            alt='orphanage'
                          />

                          <div>
                            <div className='flex items-center gap-3'>
                              <h2 className='text-xl font-bold text-[#03045e]'>
                                {item.Orphanagename}
                              </h2>

                              {/* ⬇️ added: status badge */}
                              {existingDonation && (
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${existingDonation.status === "received"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                  {existingDonation.status === "received" ? "✅ Received" : "📦 Pending"}
                                </span>
                              )}
                            </div>

                            <p className='text-gray-500 text-sm mt-1 pb-3'>
                              {item.Address}
                            </p>

                            <h3 className='font-semibold mt-4 text-gray-700'>
                              Top Needs
                            </h3>

                            <div className='flex gap-4 mt-3 flex-wrap'>
                              {
                                need
                                  .filter(n => n.email === item.email)
                                  .map(n => (
                                    <div key={n._id} className='bg-purple-100 text-purple-700 px-4 py-2 rounded-xl flex items-center gap-2'>
                                      <span className='font-medium'>{n.Item}</span>
                                    </div>
                                  ))
                              }
                            </div>

                          </div>

                        </div>

                        <button
                          onClick={() => openDonateModal(item)}
                          className='bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl font-medium transition'
                        >
                          Donate Essential
                        </button>

                      </div>
                    </div>
                  )
                })
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

            <h2 className='text-2xl font-bold text-[#03045e] mb-1'>
              Donate Essentials
            </h2>

            <p className='text-gray-500 text-sm mb-5'>
              {selectedOrphanage?.Orphanagename} • {selectedOrphanage?.Address}
            </p>

            {
              status ? (
                <>
                  {/* Dropdown */}
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Select Essential Item
                    </label>

                    <select
                      name='item'
                      value={donationInput.item}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    >
                      <option value=''>Select an item</option>
                      {
                        need
                          .filter(n => n.email === selectedOrphanage?.email)
                          .map(n => (
                            <option key={n._id} value={n.Item}>{n.Item}</option>
                          ))
                      }
                    </select>
                  </div>

                  {/* Date */}
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Expected Sending Date
                    </label>

                    <input
                      type='date'
                      name='Date'
                      value={donationInput.Date}
                      onChange={handleChange}
                      className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                  </div>

                  {/* Optional Message */}
                  <div className='mb-6'>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Message (Optional)
                    </label>

                    <textarea
                      name='message'
                      value={donationInput.message}
                      onChange={handleChange}
                      rows='3'
                      placeholder='Add a short message for the orphanage'
                      className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    />
                  </div>

                  {/* Delivery Status */}
                  <div className='mb-6'>

                    <label className='block text-sm font-medium text-gray-700 mb-3'>
                      Delivery Status
                    </label>

                    <div className='grid grid-cols-1 gap-3'>
                      <div className='border-2 border-yellow-300 bg-yellow-50 rounded-xl p-4 text-center'>

                        <div className='text-yellow-600 text-2xl mb-2'>📦</div>

                        <h3 className='font-semibold text-yellow-700'>
                          Pending Essential
                        </h3>

                        <p className='text-xs text-yellow-600 mt-1'>
                          Waiting for the essential to reach orphanage
                        </p>
                      </div>
                    </div>

                    <p className='text-xs text-gray-500 mt-3'>
                      The request starts as <span className='font-medium text-yellow-600'>Pending Essential</span>.
                      After the orphanage receives the parcel, they can update it to
                      <span className='font-medium text-green-600'> Essential Reached</span> so the donor knows the items were delivered successfully.
                    </p>

                  </div>

                  <div className='flex justify-end gap-3'>

                    <button
                      onClick={() => setShowModal(false)}
                      className='px-5 py-2 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition'
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleDonate}
                      className='px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition font-medium'
                    >
                      Send Request
                    </button>

                  </div>
                </>
              ) : (
                <div className='grid grid-cols-1 gap-3'>
                  <div className='border-2 border-green-300 bg-green-50 rounded-xl p-4 text-center'>

                    <div className='text-green-600 text-2xl mb-2'>✅</div>

                    <h3 className='font-semibold text-green-700'>
                      Essential Reached
                    </h3>

                    <p className='text-xs text-green-600 mt-1'>
                      Orphanage confirms the parcel has arrived safely
                    </p>
                  </div>
                  <button
                    onClick={() => setstatus(true)}
                    className='px-5 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition font-medium'
                  >
                    New Request
                  </button>
                </div>
              )
            }
          </div>
        </div>
      )}

    </>
  )
}

export default Essential