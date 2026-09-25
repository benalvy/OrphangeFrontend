import React, { useEffect, useState } from 'react'
import Sidebar3 from '../Components/Sidebar3'
import { approveOrphanageAPI, getAllOrphanagesAdminAPI } from '../../Services/allAPI'

function BrowseorphanAdmin() {

    const [orphanages, setOrphanages] = useState([])
    const [loading, setLoading] = useState(true)
    const [approvingId, setApprovingId] = useState(null)
    const getAllOrphanages = async () => {

        try {

            const response = await getAllOrphanagesAdminAPI()

            console.log("All orphanages:", response)

            setOrphanages(response.data)

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }
    }


    const handleApprove = async (id) => {

        try {

            setApprovingId(id)

            const response = await approveOrphanageAPI(id)

            console.log(response)
            setOrphanages(prev =>
                prev.map(orphanage =>
                    orphanage._id === id
                        ? {
                            ...orphanage,
                            approval: "approved"
                        }
                        : orphanage
                )
            )

        } catch (error) {

            console.log(error)

            alert("Failed to approve orphanage")

        } finally {

            setApprovingId(null)

        }
    }


    useEffect(() => {
        getAllOrphanages()
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
                            Browse Orphanages
                        </h1>

                        <p className="text-gray-500 mt-1">
                            View and manage all registered orphanages
                        </p>

                    </div>
                    <div className="grid grid-cols-3 gap-5 mb-8 pt-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <p className="text-gray-500 text-sm">
                                Total Orphanages
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-2">
                                {orphanages.length}
                            </h2>

                        </div>




                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <p className="text-gray-500 text-sm">
                                Approved
                            </p>

                            <h2 className="text-3xl font-bold text-green-600 mt-2">

                                {
                                    orphanages.filter(
                                        item => item.approval === "approved"
                                    ).length
                                }

                            </h2>

                        </div>




                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

                            <p className="text-gray-500 text-sm">
                                Pending Approval
                            </p>

                            <h2 className="text-3xl font-bold text-orange-500 mt-2">

                                {
                                    orphanages.filter(
                                        item => item.approval !== "approved"
                                    ).length
                                }

                            </h2>

                        </div>

                    </div>

                    {loading ? (

                        <div className="bg-white rounded-2xl p-10 text-center">

                            <p className="text-gray-500">
                                Loading orphanages...
                            </p>

                        </div>

                    ) : orphanages.length === 0 ? (

                        <div className="bg-white rounded-2xl p-10 text-center">

                            <div className="text-5xl mb-4">
                                🏠
                            </div>

                            <h2 className="text-xl font-semibold text-gray-700">
                                No orphanages registered
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Registered orphanages will appear here.
                            </p>

                        </div>

                    ) : (

                        <div className='pt-5'>
                            <div className="grid grid-cols-2 gap-6">

                                {
                                    orphanages.map((orphanage) => (

                                        <div
                                            key={orphanage._id}
                                            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition"
                                        >

                                            {/* TOP */}

                                            <div className="flex justify-between items-start">

                                                <div className="flex gap-4">

                                                    {/* IMAGE */}

                                                    <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center overflow-hidden">

                                                        {
                                                            orphanage.Image ? (

                                                                <img
                                                                    src={orphanage.Image}
                                                                    alt={orphanage.Orphanagename}
                                                                    className="w-full h-full object-cover"
                                                                />

                                                            ) : (

                                                                <span className="text-3xl">
                                                                    🏠
                                                                </span>

                                                            )
                                                        }

                                                    </div>

                                                    <div>

                                                        <h2 className="text-xl font-bold text-gray-800">
                                                            {orphanage.Orphanagename}
                                                        </h2>

                                                        <p className="text-gray-500 text-sm mt-1">
                                                            {orphanage.Address}
                                                        </p>

                                                    </div>

                                                </div>

                                                {
                                                    orphanage.approval === "approved" ? (

                                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">

                                                            ✓ Approved

                                                        </span>

                                                    ) : (

                                                        <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">

                                                            ⏳ Pending

                                                        </span>

                                                    )
                                                }

                                            </div>




                                            <div className="border-t border-gray-100 my-5"></div>




                                            <div className="grid grid-cols-2 gap-4">

                                                <div>

                                                    <p className="text-xs text-gray-400">
                                                        NGO / Registration ID
                                                    </p>

                                                    <p className="text-sm font-medium text-gray-700 mt-1">
                                                        {orphanage.NGOID}
                                                    </p>

                                                </div>


                                                <div>

                                                    <p className="text-xs text-gray-400">
                                                        Establishment Year
                                                    </p>

                                                    <p className="text-sm font-medium text-gray-700 mt-1">
                                                        {orphanage.Year}
                                                    </p>

                                                </div>


                                                <div>

                                                    <p className="text-xs text-gray-400">
                                                        Number of Children
                                                    </p>

                                                    <p className="text-sm font-medium text-gray-700 mt-1">
                                                        {orphanage.ChildrenCount}
                                                    </p>

                                                </div>


                                                <div>

                                                    <p className="text-xs text-gray-400">
                                                        Type
                                                    </p>

                                                    <p className="text-sm font-medium text-gray-700 mt-1">
                                                        {orphanage.OrphanType}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* CONTACT */}

                                            <div className='pt-3'>
                                                <div className="mt-5 bg-gray-50 rounded-xl p-4">

                                                    <p className="text-xs text-gray-400">
                                                        Contact Person
                                                    </p>

                                                    <p className="font-medium text-gray-700 mt-1">
                                                        {orphanage.name}
                                                    </p>

                                                    <p className="text-sm text-gray-500 mt-1">
                                                        📞 {orphanage.PhoneNumber}
                                                    </p>

                                                    <p className="text-sm text-gray-500 mt-1">
                                                        ✉️ {orphanage.email}
                                                    </p>

                                                </div>
                                            </div>

                                            <div className="mt-5 pt-4">

                                                {
                                                    orphanage.approval === "approved" ? (

                                                        <div className="w-full text-center py-3 bg-green-50 text-green-600 rounded-xl font-medium">

                                                            ✓ This orphanage is approved

                                                        </div>

                                                    ) : (

                                                        <button
                                                            onClick={() =>
                                                                handleApprove(orphanage._id)
                                                            }
                                                            disabled={
                                                                approvingId === orphanage._id
                                                            }
                                                            className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transition disabled:opacity-50"
                                                        >

                                                            {
                                                                approvingId === orphanage._id
                                                                    ? "Approving..."
                                                                    : "Approve Orphanage"
                                                            }

                                                        </button>

                                                    )
                                                }

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>
                        </div>

                    )}

                </div>

            </div>

        </div>

    )
}

export default BrowseorphanAdmin