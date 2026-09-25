import React, { useEffect, useState } from 'react'
import Sidebar3 from '../Components/Sidebar3'
import { getAllDonorsAPI, getAllOrphanagesAdminAPI } from '../../Services/allAPI'

function AdminDash() {


    const [totalDonors, settotalDonors] = useState(0)
    const [totalOrphanages,settotalOrphanages]=useState(0)
    const monthlyData = [
        { month: "Jan", value: 4 },
        { month: "Feb", value: 7 },
        { month: "Mar", value: 5 },
        { month: "Apr", value: 9 },
        { month: "May", value: 6 },
        { month: "Jun", value: 11 },
        { month: "Jul", value: 8 },
        { month: "Aug", value: 13 }
    ]

    const getalldonors = async () => {
        try {
            const result = await getAllDonorsAPI()
            settotalDonors(result.data.length)
        } catch (error) {
            console.log(error);
        }
    }

    const getallorphanages = async () => {
        try {
            const result = await getAllOrphanagesAdminAPI()
            settotalOrphanages(result.data.length)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getalldonors()
        getallorphanages()
    }, [])
    return (
        <div className="min-h-screen bg-white">

            <div className="grid grid-cols-12">

                <div className="col-span-2">
                    <Sidebar3 />
                </div>
                <div className="col-span-10 p-8">

                    <div className="mb-8">

                        <h1 className="text-3xl font-bold text-gray-800">
                            Admin Dashboard
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Welcome back! Here's what's happening with NovaHomes.
                        </p>

                    </div>


                    <div className="grid grid-cols-2 gap-5 mb-8 pt-5">

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Total Donors
                                    </p>

                                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                        {totalDonors}
                                    </h2>
                                </div>

                                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                                    👥
                                </div>

                            </div>

                        </div>


                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <div className="flex justify-between items-center">

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Total Orphanages
                                    </p>

                                    <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                        {totalOrphanages}
                                    </h2>


                                </div>

                                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                                    🏠
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8 pt-10">


                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <div className="flex justify-between items-center mb-6">

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        Users Overview
                                    </h2>

                                    <p className="text-sm text-gray-500">
                                        Donors vs Orphanages
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-end justify-center gap-20 h-64 border-b border-gray-200">

                                <div className="flex flex-col items-center justify-end h-full">

                                    <span className="text-sm font-semibold mb-2">
                                        {totalDonors}
                                    </span>

                                    <div
                                        className="w-20 bg-purple-600 rounded-t-xl"
                                        style={{
                                            height: `${(totalDonors / 250) * 180}px`
                                        }}
                                    ></div>

                                    <p className="mt-3 text-sm text-gray-600">
                                        Donors
                                    </p>

                                </div>

                                <div className="flex flex-col items-center justify-end h-full">

                                    <span className="text-sm font-semibold mb-2">
                                        {totalOrphanages}
                                    </span>

                                    <div
                                        className="w-20 bg-blue-500 rounded-t-xl"
                                        style={{
                                            height: `${(totalOrphanages / 250) * 180}px`
                                        }}
                                    ></div>

                                    <p className="mt-3 text-sm text-gray-600">
                                        Orphanages
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <div className="mb-6">

                                <h2 className="text-xl font-semibold text-gray-800">
                                    Orphanage Registrations
                                </h2>

                                <p className="text-sm text-gray-500">
                                    Monthly registration overview
                                </p>

                            </div>

                            <div className="flex items-end justify-between h-64 border-b border-gray-200 px-3">

                                {monthlyData.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex flex-col items-center justify-end h-full"
                                    >

                                        <span className="text-xs text-gray-500 mb-2">
                                            {item.value}
                                        </span>

                                        <div
                                            className="w-8 bg-purple-500 rounded-t-md"
                                            style={{
                                                height: `${item.value * 13}px`
                                            }}
                                        ></div>

                                        <span className="text-xs text-gray-500 mt-3">
                                            {item.month}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default AdminDash