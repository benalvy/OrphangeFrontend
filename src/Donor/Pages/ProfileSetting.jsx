import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { toast } from 'react-toastify'
import { getProfileAPI, updateProfileAPI } from '../../Services/allAPI'

function ProfileSettings() {

    const [profile, setProfile] = useState({
        username: "",
        email: "",
        password: "",
        profileImage: "",
        phoneNumber: "",
        dob: "",
        location: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfile((prev) => ({ ...prev, [name]: value }))
    }

    const fetchProfile = async () => {
        try {
            const result = await getProfileAPI()
            setProfile({
                username: result.data.username || "",
                email: result.data.email || "",
                password: "", // never pre-fill password
                profileImage: result.data.profileImage || "",
                phoneNumber: result.data.phoneNumber || "",
                dob: result.data.dob ? result.data.dob.slice(0, 10) : "", 
                location: result.data.location || ""
            })
        } catch (error) {
            console.log(error)
            toast.error("Could not load profile")
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const handleSave = async (e) => {
        e.preventDefault()
        try {
            const { username, phoneNumber, dob, location, profileImage, password } = profile

            const result = await updateProfileAPI({ username, phoneNumber, dob, location, profileImage, password })

            if (result.status == 200) {
                toast.success("Profile updated successfully")
                setProfile((prev) => ({ ...prev, password: "" }))
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <div className='grid grid-cols-12 min-h-screen'>
                <div className='col-span-2'>
                    <Sidebar />
                </div>
                <div className='col-span-10 px-[10px] py-2'>
                    <div>
                        <h1 className='text-2xl font-bold pt-3 ps-3'>Profile Setting</h1>
                    </div>
                    <div className='grid grid-cols-12 gap-6 p-4'>

                        <div className='col-span-12 space-y-6'>

                            <div className='flex gap-8 border-b border-gray-200 pb-3 text-sm font-medium'>
                                <button className='text-purple-600 border-b-2 border-purple-600 pb-2'>
                                    Personal Information
                                </button>
                            </div>

                            <form onSubmit={handleSave} className='bg-white rounded-2xl shadow-sm border border-gray-100 p-5'>

                                <h2 className='text-xl font-semibold mb-6 text-gray-800'>
                                    Personal Information
                                </h2>

                                <div className='grid grid-cols-12 gap-6'>

                                    <div className='col-span-3 flex flex-col items-center text-center'>
                                        <img
                                            src={profile.profileImage || 'https://i.pravatar.cc/200?img=12'}
                                            alt='profile'
                                            className='w-28 h-28 rounded-full object-cover border-4 border-purple-100'
                                        />
                                    </div>

                                    <div className='col-span-9 grid grid-cols-2 gap-4'>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Username
                                            </label>
                                            <input
                                                name='username'
                                                type='text'
                                                value={profile.username}
                                                onChange={handleChange}
                                                placeholder='name'
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Password
                                            </label>
                                            <input
                                                name='password'
                                                type='password'
                                                value={profile.password}
                                                onChange={handleChange}
                                                placeholder='Leave blank to keep current password'
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                        {/* <div className='col-span-2'>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Email Address
                                            </label>
                                            <input
                                                type='email'
                                                value={profile.email}
                                                disabled
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-100 text-gray-500 cursor-not-allowed'
                                            />
                                        </div> */}

                                        <div className='col-span-2'>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Profile Pic
                                            </label>
                                            <input
                                                name='profileImage'
                                                type='text'
                                                value={profile.profileImage}
                                                onChange={handleChange}
                                                placeholder='link'
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Phone Number
                                            </label>
                                            <input
                                                name='phoneNumber'
                                                type='text'
                                                value={profile.phoneNumber}
                                                onChange={handleChange}
                                                placeholder='+91 98765 43210'
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                        <div>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Date of Birth
                                            </label>
                                            <input
                                                name='dob'
                                                type='date'
                                                value={profile.dob}
                                                onChange={handleChange}
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                        <div className='col-span-2'>
                                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                                Location
                                            </label>
                                            <input
                                                name='location'
                                                type='text'
                                                value={profile.location}
                                                onChange={handleChange}
                                                placeholder='Pune, Maharashtra, India'
                                                className='w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className='mt-6'>
                                    <button type='submit' className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition'>
                                        Save Changes
                                    </button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSettings