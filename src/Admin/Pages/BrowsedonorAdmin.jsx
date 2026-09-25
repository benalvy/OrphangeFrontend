import React, { useEffect, useState } from 'react'
import Sidebar3 from '../Components/Sidebar3'
import { getAllDonorsAPI } from '../../Services/allAPI'


function BrowseDonor() {

    const [donors, setDonors] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true)

    const getAllDonors = async () => {

        try {

            const response = await getAllDonorsAPI()

            console.log("Donors:", response.data)

            setDonors(response.data)

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }
    }


    useEffect(() => {
        getAllDonors()
    }, [])


    const filteredDonors = donors.filter((donor) => {

        const username = donor.username || ""
        const email = donor.email || ""

        return (
            username.toLowerCase().includes(search.toLowerCase()) ||
            email.toLowerCase().includes(search.toLowerCase())
        )

    })


    return (

        <div className="min-h-screen bg-white">

            <div className="grid grid-cols-12">

          

                <div className="col-span-2">
                    <Sidebar3 />
                </div>


                <div className="col-span-10 p-8">


                    <div className="flex justify-between items-center mb-8">

                        <div>

                            <h1 className="text-3xl font-bold text-gray-800">
                                Donors
                            </h1>

                            <p className="text-gray-500 mt-1">
                                View and manage all registered donors
                            </p>

                        </div>



                        <div className="bg-purple-100 rounded-xl px-6 py-4">

                            <p className="text-sm text-purple-600">
                                Total Donors
                            </p>

                            <p className="text-2xl font-bold text-purple-700">
                                {donors.length}
                            </p>

                        </div>

                    </div>



                    <div className='pt-4'>
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">

                        <div className="relative">

                            <input
                                type="text"
                                placeholder="Search donors by name or email..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-5 py-3 pl-12 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
                            />

                            <span className="absolute left-4 top-3 text-gray-400 text-xl">
                                🔍
                            </span>

                        </div>

                    </div>
                    </div>



                    {loading ? (

                        <div className="bg-white rounded-2xl p-12 text-center">

                            <p className="text-gray-500">
                                Loading donors...
                            </p>

                        </div>

                    ) : filteredDonors.length === 0 ? (

                        <div className='pt-3'>
                            <div className="bg-white rounded-2xl p-12 text-center">


                            <h2 className="text-xl font-semibold text-gray-700">
                                No donors found
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {
                                    search
                                        ? "Try searching with a different name or email."
                                        : "There are no registered donors yet."
                                }
                            </p>

                        </div>
                        </div>

                    ) : (

                        <div className='pt-5'>
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">


                            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-500">

                                <div className="col-span-4">
                                    Donor
                                </div>

                                <div className="col-span-3">
                                    Email
                                </div>

                                <div className="col-span-2">
                                    Role
                                </div>

                            </div>

                            <div>

                                {
                                    filteredDonors.map((donor) => (

                                        <div
                                            key={donor._id}
                                            className="grid grid-cols-12 gap-4 items-center px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition"
                                        >

                                           

                                            <div className="col-span-4 flex items-center gap-4">

                                                

                                                <div className="w-12 h-12 rounded-full bg-purple-100 overflow-hidden flex items-center justify-center">

                                                    {
                                                        donor.profileImage ? (

                                                            <img
                                                                src={donor.profileImage}
                                                                alt={donor.username}
                                                                className="w-full h-full object-cover"
                                                            />

                                                        ) : (

                                                            <span className="text-xl text-purple-600">
                                                                👤
                                                            </span>

                                                        )
                                                    }

                                                </div>


                                                <div>

                                                    <h3 className="font-semibold text-gray-800">
                                                        {donor.username}
                                                    </h3>

                                                    <p className="text-xs text-gray-400 mt-1">
                                                        ID: {donor._id}
                                                    </p>

                                                </div>

                                            </div>

                                            <div className="col-span-3">

                                                <p className="text-sm text-gray-600">
                                                    {donor.email}
                                                </p>

                                            </div>

                                            <div className="col-span-2">

                                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                                                    Donor
                                                </span>

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                        </div>
                        </div>

                    )}

                </div>

            </div>

        </div>

    )
}

export default BrowseDonor