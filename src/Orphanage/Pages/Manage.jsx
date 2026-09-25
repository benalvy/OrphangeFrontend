import React, { useState, useEffect } from 'react'
import Sidebar2 from '../Components/Sidebar2'
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { addNeedAPI, getNeedsAPI, updateNeedAPI, deleteNeedAPI } from '../../Services/allAPI'

function Manage() {

  const [showModal, setShowModal] = useState(false)

  const [needs, setNeeds] = useState([])

  const [editId, setEditId] = useState(null)

  const [needInput, setNeedInput] = useState({
    Item: "",
    category: "",
    priority: "",
    Required: "",
    ImageURL: "",
    description: ""
  })

  const fetchNeeds = async () => {

    try {

      const result = await getNeedsAPI()

      setNeeds(result.data)

    } catch (error) {

      console.log(error)

      toast.error("Unable to fetch needs")

    }

  }


  useEffect(() => {
    fetchNeeds()
  }, [])

  const handleChange = (e) => {

    const { name, value } = e.target

    setNeedInput({
      ...needInput,
      [name]: value
    })

  }

  const openAddModal = () => {

    setEditId(null)

    setNeedInput({
      Item: "",
      category: "",
      priority: "",
      Required: "",
      ImageURL: "",
      description: ""
    })

    setShowModal(true)

  }

  const openEditModal = (need) => {

    setEditId(need._id)

    setNeedInput({
      Item: need.Item,
      category: need.category,
      priority: need.priority,
      Required: need.Required,
      ImageURL: need.ImageURL,
      description: need.description
    })

    setShowModal(true)

  }

  const handleSaveNeed = async () => {

    if (
      !needInput.Item ||
      !needInput.category ||
      !needInput.priority ||
      !needInput.Required ||
      !needInput.description
    ) {

      toast.warning("Please fill all required fields")

      return
    }

    try {

      if (editId) {

        const result = await updateNeedAPI(editId, needInput)

        toast.success("Need updated successfully")

        setNeeds(
          needs.map((need) =>
            need._id === editId ? result.data : need
          )
        )

      } else {
        const result = await addNeedAPI(needInput)

        toast.success("Need added successfully")

        setNeeds([...needs, result.data])

      }

      setNeedInput({
        Item: "",
        category: "",
        priority: "",
        Required: "",
        ImageURL: "",
        description: ""
      })

      setEditId(null)

      setShowModal(false)

    } catch (error) {

      console.log(error)

      if (error.response) {

        toast.error(error.response.data)

      } else {

        toast.error("Something went wrong")

      }

    }

  }

  const handleDeleteNeed = async (id) => {

    const confirmDelete = window.confirm("Are you sure you want to delete this need?")

    if (!confirmDelete) return

    try {

      await deleteNeedAPI(id)

      toast.success("Need deleted successfully")

      setNeeds(needs.filter((need) => need._id !== id))

    } catch (error) {

      console.log(error)

      toast.error("Failed to delete need")

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

            <div className='pb-4'>

              <div className='bg-white rounded-2xl border border-gray-200 p-5 flex items-center justify-between'>

                <div>
                  <h1 className='text-3xl font-bold text-gray-900'>
                    Manage Needs
                  </h1>

                  <p className='text-gray-500 mt-1'>
                    Add, update, or remove needs for your orphanage.
                  </p>
                </div>

                <button
                  onClick={openAddModal}
                  className='bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 font-medium transition'
                >
                  <FaPlus />
                  Add New Need
                </button>

              </div>

            </div>
            <div className='bg-white rounded-2xl border border-gray-200 overflow-hidden'>

              <div className='overflow-x-auto'>

                <table className='w-full text-left'>

                  <thead className='bg-gray-50 border-b border-gray-200'>
                    <tr className='text-sm text-gray-600'>
                      <th className='px-6 py-4 font-semibold'>Need Item</th>
                      <th className='px-6 py-4 font-semibold'>Category</th>
                      <th className='px-6 py-4 font-semibold'>Priority</th>
                      <th className='px-6 py-4 font-semibold'>Required</th>
                      <th className='px-6 py-4 font-semibold text-center'>
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className='divide-y divide-gray-100'>

                    {needs.length === 0 && (

                      <tr>
                        <td colSpan={5} className='px-6 py-6 text-center text-gray-400'>
                          No needs added yet
                        </td>
                      </tr>

                    )}

                    {needs.map((need, index) => (
                      <tr key={need._id || index} className='hover:bg-gray-50 transition'>

                        <td className='px-6 py-4 font-medium text-gray-900'>
                          {need.Item}
                        </td>

                        <td className='px-6 py-4'>
                          <span className='px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700'>
                            {need.category}
                          </span>
                        </td>

                        <td className='px-6 py-4 text-gray-700'>
                          {need.priority}
                        </td>

                        <td className='px-6 py-4 text-gray-700'>
                          {need.Required}
                        </td>

                        <td className='px-6 py-4'>

                          <div className='flex justify-center gap-2'>

                            <button
                              onClick={() => openEditModal(need)}
                              className='w-9 h-9 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-600 flex items-center justify-center transition'
                            >
                              <FaEdit size={14} />
                            </button>

                            <button
                              onClick={() => handleDeleteNeed(need._id)}
                              className='w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center transition'
                            >
                              <FaTrash size={14} />
                            </button>

                          </div>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

        {showModal && (
          <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4'>

            <div className='bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 relative'>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className='absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold'
              >
                ×
              </button>

              <div className='mb-6'>

                <h2 className='text-2xl font-bold text-gray-900'>
                  {editId ? "Edit Need" : "Add New Need"}
                </h2>

                <p className='text-gray-500 mt-1'>
                  {editId
                    ? "Update the details of this requirement."
                    : "Add a new requirement for your orphanage."}
                </p>

              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Need Item
                  </label>

                  <input
                    type='text'
                    name='Item'
                    value={needInput.Item}
                    onChange={handleChange}
                    placeholder='Enter need item'
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Category
                  </label>

                  <select
                    name='category'
                    value={needInput.category}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  >
                    <option value=''>Select category</option>
                    <option value='Food'>Food</option>
                    <option value='Clothes'>Clothes</option>
                    <option value='Education'>Education</option>
                    <option value='Hygiene'>Hygiene</option>
                    <option value='Healthcare'>Healthcare</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Priority
                  </label>

                  <select
                    name='priority'
                    value={needInput.priority}
                    onChange={handleChange}
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  >
                    <option value=''>Select priority</option>
                    <option value='High'>High</option>
                    <option value='Medium'>Medium</option>
                    <option value='Low'>Low</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Required Quantity
                  </label>

                  <input
                    type='text'
                    name='Required'
                    value={needInput.Required}
                    onChange={handleChange}
                    placeholder='e.g. 30 sets'
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  />
                </div>

                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Image URL
                  </label>

                  <input
                    type='text'
                    name='ImageURL'
                    value={needInput.ImageURL}
                    onChange={handleChange}
                    placeholder='Paste image URL here'
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  />
                </div>


                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Description
                  </label>

                  <textarea
                    name='description'
                    value={needInput.description}
                    onChange={handleChange}
                    rows='4'
                    placeholder='Describe the need...'
                    className='w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
                  />
                </div>

              </div>

              <div className='flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100'>

                <button
                  onClick={() => setShowModal(false)}
                  className='px-5 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition'
                >
                  Cancel
                </button>

                <button
                  onClick={handleSaveNeed}
                  className='px-5 py-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition font-medium'
                >
                  {editId ? "Update Need" : "Save Need"}
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </>
  )
}

export default Manage