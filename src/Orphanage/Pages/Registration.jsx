import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCurrentOrphanageAPI, registerorphanageAPI } from '../../Services/allAPI'

function Registration() {

  const [verify, setverify] = useState("form")

  const [orphanage, setOrphanage] = useState({
    Orphanagename: "",
    NGOID: "",
    Year: "",
    ChildrenCount: "",
    OrphanType: "",
    Care: "",
    name: "",
    PhoneNumber: "",
    email: "",
    Address: ""
  })


  const handleChange = (e) => {

    const { name, value } = e.target

    setOrphanage({
      ...orphanage,
      [name]: value
    })

  }



  const handleSubmit = async (e) => {

    e.preventDefault()
    if (
      !orphanage.Orphanagename ||
      !orphanage.NGOID ||
      !orphanage.Year ||
      !orphanage.ChildrenCount ||
      !orphanage.OrphanType ||
      !orphanage.Care ||
      !orphanage.name ||
      !orphanage.PhoneNumber ||
      !orphanage.email ||
      !orphanage.Address
    ) {

      toast.warning("Please fill all the fields")

      return
    }


    try {

      console.log("Data send to backend:", orphanage)

      const response = await registerorphanageAPI(orphanage)

      console.log("Server response:", response.data)

      toast.success("Registration submitted successfully")

      setverify("pending")

    } catch (error) {

      console.log(error)

      if (error.response) {

        toast.error(error.response.data)

      } else {

        toast.error("Something went wrong")

      }

    }

  }

  const approvaloforphanage=async()=>{
    try {
      const result=await getCurrentOrphanageAPI()
      setverify(result.data.approval)
    } catch (error) {
      toast.info("Decision pending")
    }
  }


useEffect(()=>{
approvaloforphanage()
},[])




  return (
    <>


      {verify === "pending" && (

        <div className='min-h-screen flex justify-center items-center bg-purple-50'>

          <div className='text-center'>

            <div className='mb-6'>
              <span className='text-7xl'>⏳</span>
            </div>

            <h1 className='text-4xl font-bold text-yellow-600 mb-4'>
              Approval Pending
            </h1>

            <p className='text-gray-600 max-w-md mx-auto'>
              Your orphanage registration has been submitted successfully.
              Please wait while the admin verifies your information.
            </p>

          </div>

        </div>

      )}

      {verify === "rejected" && (

        <div className='min-h-screen flex justify-center items-center bg-purple-50'>

          <div className='text-center'>

            <div className='mb-6'>
              <img src="https://cdn.pixabay.com/animation/2023/09/26/13/00/13-00-13-140_512.gif" alt="" />
            </div>

            <h1 className='text-4xl font-bold text-yellow-600 mb-4'>
              Request Rejected
            </h1>

          </div>

        </div>

      )}



      {verify === "approved" && (

        <div className='min-h-screen flex justify-center items-center bg-green-50'>

          <div className='text-center'>

            <div className='mb-6'>
              <span className='text-7xl'>✅</span>
            </div>

            <h1 className='text-4xl font-bold text-green-600 mb-6'>
              Registration Approved
            </h1>

            <p className='text-gray-600 mb-6'>
              Your orphanage has been successfully verified by the admin.
            </p>

            <Link
              to='/dashboard2'
              className='inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold'
            >
              Go to Dashboard
            </Link>

          </div>

        </div>

      )}


      {verify === "form" && (

        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 p-4 md:p-8'>

          <div className='max-w-8xl mx-auto'>

            {/* Header */}

            <div className='mb-10 text-center'>

              <div className='w-16 h-16 mx-auto rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl mb-4'>
                🏠
              </div>

              <h1 className='text-3xl md:text-4xl font-bold text-gray-900 pb-3'>
                Orphanage Registration
              </h1>

              <p className='text-gray-500 mt-3 max-w-2xl mx-auto pb-3'>
                Please provide accurate information about your orphanage.
                Our team will review your details and verify your documents.
              </p>

            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>

              <div className='lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 space-y-8'>


                <section className='space-y-5'>

                  <h2 className='text-lg font-semibold text-purple-700 flex items-center gap-2'>
                    ℹ️ Basic Information
                  </h2>


                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Orphanage Name *
                      </label>

                      <input
                        type='text'
                        name='Orphanagename'
                        value={orphanage.Orphanagename}
                        onChange={handleChange}
                        placeholder='Enter orphanage name'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Registration / NGO ID *
                      </label>

                      <input
                        type='text'
                        name='NGOID'
                        value={orphanage.NGOID}
                        onChange={handleChange}
                        placeholder='Enter registration or NGO ID'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>


                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Establishment Year *
                      </label>

                      <input
                        type='number'
                        name='Year'
                        value={orphanage.Year}
                        onChange={handleChange}
                        placeholder='Select year'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Number of Children *
                      </label>

                      <input
                        type='number'
                        name='ChildrenCount'
                        value={orphanage.ChildrenCount}
                        onChange={handleChange}
                        placeholder='Enter number of children'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Type of Orphanage *
                      </label>

                      <select
                        name='OrphanType'
                        value={orphanage.OrphanType}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      >

                        <option value=''>
                          Select type of orphanage
                        </option>

                        <option value='Boys Home'>
                          Boys Home
                        </option>

                        <option value='Girls Home'>
                          Girls Home
                        </option>

                        <option value='Mixed Home'>
                          Mixed Home
                        </option>

                      </select>

                    </div>
                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Care Provided *
                      </label>

                      <select
                        name='Care'
                        value={orphanage.Care}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      >

                        <option value=''>
                          Select care provided
                        </option>

                        <option value='Education'>
                          Education
                        </option>

                        <option value='Shelter'>
                          Shelter
                        </option>

                        <option value='Healthcare'>
                          Healthcare
                        </option>

                        <option value='Food & Nutrition'>
                          Food & Nutrition
                        </option>

                      </select>

                    </div>

                  </div>

                </section>
                <section className='space-y-5'>

                  <h2 className='text-lg font-semibold text-purple-700 flex items-center gap-2'>
                    👥 Contact Information
                  </h2>


                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Contact Person Name *
                      </label>

                      <input
                        type='text'
                        name='name'
                        value={orphanage.name}
                        onChange={handleChange}
                        placeholder='Enter full name'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Phone Number *
                      </label>

                      <input
                        type='text'
                        name='PhoneNumber'
                        value={orphanage.PhoneNumber}
                        onChange={handleChange}
                        placeholder='Enter phone number'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='md:col-span-2 space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Email Address *
                      </label>

                      <input
                        type='email'
                        name='email'
                        value={orphanage.email}
                        onChange={handleChange}
                        placeholder='Enter email address'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      />

                    </div>

                    <div className='md:col-span-2 space-y-2'>

                      <label className='text-sm font-medium text-gray-700'>
                        Address *
                      </label>

                      <textarea
                        name='Address'
                        value={orphanage.Address}
                        onChange={handleChange}
                        rows='3'
                        placeholder='Enter complete address'
                        className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
                      />

                    </div>

                  </div>

                </section>

                <div className='pt-4'>

                  <button
                    onClick={handleSubmit}
                    className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition shadow-lg'
                  >
                    Submit for Verification
                  </button>

                </div>

              </div>

              <div className='bg-gradient-to-b from-purple-50 to-pink-50 rounded-3xl border border-purple-100 p-6 h-fit sticky top-6'>


                <div className='text-center mb-6'>

                  <img
                    src='https://cdn-icons-png.flaticon.com/512/4202/4202841.png'
                    alt='children'
                    className='w-36 mx-auto mb-4'
                  />

                  <h2 className='text-2xl font-bold text-purple-700'>
                    Why Verification?
                  </h2>

                  <p className='text-sm text-gray-600 mt-3'>
                    We verify every orphanage to ensure donors can contribute with trust and confidence.
                  </p>

                </div>


                <div className='space-y-5 text-sm'>

                  {[
                    ['⭐', 'Trusted Platform', 'Only verified orphanages are visible to donors.'],
                    ['🛡️', 'Child Safety', 'We prioritize the safety and well-being of every child.'],
                    ['📋', 'Transparency', 'Ensures transparency in donations and resource distribution.'],
                    ['🤝', 'Stronger Community', 'Build lasting relationships with donors and well-wishers.']
                  ].map(([icon, title, desc]) => (

                    <div
                      key={title}
                      className='flex gap-3'
                    >

                      <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0'>
                        {icon}
                      </div>

                      <div>

                        <p className='font-semibold text-gray-800'>
                          {title}
                        </p>

                        <p className='text-gray-600 text-xs mt-1'>
                          {desc}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>


                <div className='pt-4'>

                  <div className='mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-5'>

                    <h3 className='font-semibold text-gray-800 mb-4 flex items-center gap-2'>
                      ⏳ What happens next?
                    </h3>

                    <ul className='space-y-3 text-sm text-gray-700'>

                      <li className='flex gap-2'>
                        <span className='text-green-600'>✔</span>
                        Documents reviewed within 2–3 business days.
                      </li>

                      <li className='flex gap-2'>
                        <span className='text-green-600'>✔</span>
                        You will be notified after admin approval.
                      </li>

                      <li className='flex gap-2'>
                        <span className='text-green-600'>✔</span>
                        Once approved, you can add needs and receive donations.
                      </li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  )
}

export default Registration