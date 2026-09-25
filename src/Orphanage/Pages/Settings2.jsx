import React, { useState, useEffect } from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FaSave, FaCamera } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { getCurrentOrphanageAPI, updateOrphanageAPI } from '../../Services/allAPI'

function Settings2() {

    const [orphanage, setOrphanage] = useState({
        Image: "",
        Orphanagename: "",
        NGOID: "",
        name: "",
        PhoneNumber: "",
        Address: "",
        ChildrenCount: "",
        Year: ""
    })

    const fetchOrphanage = async () => {

        try {

            const result = await getCurrentOrphanageAPI()

            setOrphanage({
                Image: result.data.Image || "",
                Orphanagename: result.data.Orphanagename || "",
                NGOID: result.data.NGOID || "",
                name: result.data.name || "",
                PhoneNumber: result.data.PhoneNumber || "",
                Address: result.data.Address || "",
                ChildrenCount: result.data.ChildrenCount || "",
                Year: result.data.Year || ""
            })

        } catch (error) {

            console.log(error)

            toast.error("Unable to load orphanage details")

        }

    }


    useEffect(() => {
        fetchOrphanage()
    }, [])

    const handleChange = (e) => {

        const { name, value } = e.target

        setOrphanage({
            ...orphanage,
            [name]: value
        })

    }

    const handleSave = async () => {

        try {

            const result = await updateOrphanageAPI(orphanage)

            toast.success("Profile updated successfully")

            setOrphanage({
                Image: result.data.Image || "",
                Orphanagename: result.data.Orphanagename || "",
                NGOID: result.data.NGOID || "",
                name: result.data.name || "",
                PhoneNumber: result.data.PhoneNumber || "",
                Address: result.data.Address || "",
                ChildrenCount: result.data.ChildrenCount || "",
                Year: result.data.Year || ""
            })

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
            <div className='min-h-screen bg-white'>

                <div className='grid grid-cols-12'>

                    <div className='col-span-2'>
                        <Sidebar2 />
                    </div>

                    <div className='col-span-10 p-5 space-y-5'>

                        <div className='pb-3'>
                            <div className='bg-white rounded-2xl border border-gray-200 p-5'>

                                <h1 className='text-3xl font-bold text-gray-900'>
                                    Profile Settings
                                </h1>

                                <p className='text-gray-500 mt-1'>
                                    Update your orphanage profile information and contact details.
                                </p>

                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-200 p-6 space-y-6'>

                            <div className='flex items-center gap-5 pb-6 border-b border-gray-100'>

                                <div className='relative'>

                                    <img
                                        src={orphanage.Image}
                                        alt='Orphanage'
                                        className='w-24 h-24 rounded-2xl object-cover border border-gray-200'
                                    />

                                </div>

                                <div>

                                    <h2 className='text-xl font-semibold text-gray-900'>
                                        {orphanage.Orphanagename}
                                    </h2>

                                    <p className='text-sm text-gray-500 mt-1'>
                                        Upload a clear logo or building image for donors to recognize your orphanage.
                                    </p>

                                </div>


                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2'>
                                    Orphanage ImageURL
                                </label>

                                <input
                                    type='text'
                                    name='Image'
                                    value={orphanage.Image}
                                    onChange={handleChange}
                                    placeholder='Paste image URL'
                                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                />
                            </div>

                            <div className='space-y-4'>

                                <h3 className='text-lg font-semibold text-violet-800'>
                                    Basic Information
                                </h3>

                                <div className='grid grid-cols-2 gap-4'>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Orphanage Name
                                        </label>

                                        <input
                                            type='text'
                                            name='Orphanagename'
                                            value={orphanage.Orphanagename}
                                            onChange={handleChange}
                                            placeholder='Sunshine Home for Children'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Registration ID
                                        </label>

                                        <input
                                            type='text'
                                            name='NGOID'
                                            value={orphanage.NGOID}
                                            onChange={handleChange}
                                            placeholder='NGO-2025-001'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3'
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className='space-y-4 pt-6 border-t border-gray-100'>

                                <h3 className='text-lg font-semibold text-violet-800'>
                                    Contact Information
                                </h3>

                                <div className='grid grid-cols-2 gap-4'>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Contact Person
                                        </label>

                                        <input
                                            type='text'
                                            name='name'
                                            value={orphanage.name}
                                            onChange={handleChange}
                                            placeholder='Maria Joseph'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Phone Number
                                        </label>

                                        <input
                                            type='text'
                                            name='PhoneNumber'
                                            value={orphanage.PhoneNumber}
                                            onChange={handleChange}
                                            placeholder='+91 98765 43210'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                        />
                                    </div>

                                    <div className='col-span-2'>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Address
                                        </label>

                                        <textarea
                                            name='Address'
                                            value={orphanage.Address}
                                            onChange={handleChange}
                                            rows='3'
                                            placeholder='Sunshine Home for Children, MG Road, Pune, Maharashtra, India'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className='space-y-4 pt-6 border-t border-gray-100'>

                                <h3 className='text-lg font-semibold text-violet-800'>
                                    Orphanage Details
                                </h3>

                                <div className='grid grid-cols-2 gap-4'>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Number of Children
                                        </label>

                                        <input
                                            type='number'
                                            name='ChildrenCount'
                                            value={orphanage.ChildrenCount}
                                            onChange={handleChange}
                                            placeholder='48'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2'>
                                            Established Year
                                        </label>

                                        <input
                                            type='number'
                                            name='Year'
                                            value={orphanage.Year}
                                            onChange={handleChange}
                                            placeholder='2015'
                                            className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                        />
                                    </div>

                                </div>

                            </div>

                            <div className='pt-6 border-t border-gray-100 flex justify-end'>

                                <button
                                    onClick={handleSave}
                                    className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition shadow-sm'
                                >
                                    <FaSave />
                                    Save Changes
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Settings2