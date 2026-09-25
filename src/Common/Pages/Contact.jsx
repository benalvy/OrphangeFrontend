import React, { useState, useRef } from 'react'
import Header from '../Components/Header'
import { BsHeartFill } from 'react-icons/bs'
import { FaHandHoldingHeart, FaRegClock } from 'react-icons/fa'
import { MdMarkEmailUnread } from 'react-icons/md'
import { IoCall, IoPeople } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { GrSend } from 'react-icons/gr'
import { FcOnlineSupport } from 'react-icons/fc'
import { PiHandHeartFill, PiSpeakerHighFill } from 'react-icons/pi'
import Footer from '../Components/Footer'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

function Contact() {

    const formRef = useRef()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.warning("Please fill in all fields")
            return
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                toast.success("Message sent successfully!")
                setFormData({ name: "", email: "", subject: "", message: "" })
            })
            .catch((error) => {
                console.log(error)
                toast.error("Something went wrong, please try again")
            })
    }

    return (
        <>
            <Header></Header>
            <div>
                <div className='text-center pt-[100px]'>
                    <h1 className='text-6xl font-bold'>We Would Love To</h1>
                    <h1 className='text-6xl font-bold text-violet-700'>Hear From You</h1>
                    <p className='text-gray-600 pt-8'>Whether you have a question,need suport,</p>
                    <p className='text-gray-600'>want to partner with us,or just want to say hello</p>
                    <p className='text-gray-600'>were here for you.</p>
                    <p className='font-bold flex items-center justify-center gap-3 pt-4'><BsHeartFill className="text-3xl text-violet-700" />Together we can build a better tomorrow.</p>
                </div>
                <div className='px-[70px] pt-[100px] pb-10'>
                    <div className='grid grid-cols-12 border rounded-3xl border-gray-200 shadow-md'>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-violet-100 rounded-full p-3'>
                                    <MdMarkEmailUnread className='text-6xl text-violet-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold'>Email Us</h1>
                                    <h1 className='text-gray-600'>we reply within 24 hrs <br /> <span className='text-violet-800'>hello@novahomes.org</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-green-100 rounded-full p-3'>
                                    <IoCall className='text-6xl text-green-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold '>Call Us</h1>
                                    <h1 className='text-gray-600'>Mon-Sat,9:00-6:00 PM <br /><span className='text-green-700'>+9186546565</span></h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-orange-100 rounded-full p-3'>
                                    <FaLocationDot className='text-6xl text-orange-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold '>Visit Us</h1>
                                    <h1 className='text-gray-600'>Novahomes 123 Kindness Street Bnglr,Karnataka</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <div className='flex items-center gap-4 px-8 py-10'>
                                <div className='bg-blue-100 rounded-full p-3'>
                                    <FaRegClock className='text-6xl text-blue-600' />
                                </div>
                                <div>
                                    <h1 className='text-2xl font-bold'>Working Hours</h1>
                                    <h1 className='text-gray-600'>Monday-Saturday <br />9:00 AM-6:00 PM</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-12 px-[70px] pb-[100px] gap-4'>
                        <form ref={formRef} onSubmit={handleSubmit} className='col-span-7 px-[40px] border border-gray-200 rounded-3xl shadow-md'>
                            <h1 className='pt-4 text-3xl font-semibold'>Send Us a Message</h1>
                            <div className='flex pt-4 gap-6 pb-4'>
                                <div>
                                    <label htmlFor="" className='font-semibold'>Your Name*</label> <br />
                                    <input
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        className='border p-2 rounded-lg border-gray-300'
                                        style={{ width: "360px" }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className='font-semibold'>Email Address*</label> <br />
                                    <input
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className='border p-2 rounded-lg border-gray-300'
                                        style={{ width: "360px" }}
                                    />
                                </div>
                            </div>
                            <div className='pb-6'>
                                <label htmlFor="" className='font-semibold'>Subject*</label><br />
                                <select
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className='border w-full py-2 rounded-lg border-gray-300'
                                >
                                    <option value="">Select a subject</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Donation Question">Donation Question</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Volunteer">Volunteer</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className='pb-6'>
                                <label htmlFor="" className='font-semibold'>Your Message*</label><br />
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-full border border-gray-300 rounded-lg p-4'
                                    style={{ height: "200px" }}
                                ></textarea>
                            </div>
                            <div className='flex justify-between items-center pb-6'>
                                <button type='submit' className='flex items-center gap-1 bg-violet-700 p-2 rounded-lg text-white font-semibold'><GrSend />Send Message</button>
                                <h1 className='font-semibold text-gray-500'>Your information is safe with us.</h1>
                            </div>
                        </form>
                        <div className='col-span-5'>
                            <div className='grid grid-cols-12 gap-4'>
                                <div className='col-span-12 flex border px-[50px] pt-10 pb-10 gap-5 border-gray-200 rounded-2xl shadow-md'>
                                    <div>
                                        <FaHandHoldingHeart className='text-8xl bg-violet-100 rounded-full p-3 text-violet-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Were Here to Help</h1>
                                        <p className='pb-2 text-gray-600'>Have questions about donations,orphanages,partnerships,or anything else?Our team is ready to assist you.</p>
                                        <button className='bg-violet-700 px-3 py-1 rounded-lg text-white'>FAQs</button>
                                    </div>
                                </div>
                                <div className='col-span-12 flex px-[40px] border rounded-lg border-gray-200 shadow-md p-2 gap-2'>
                                    <div>
                                        <IoPeople className='text-6xl bg-violet-100 rounded-full p-3 text-violet-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Partnerships & Collaborations</h1>
                                        <p className='pb-2 text-gray-600'>partner@novahomes.org</p>
                                    </div>
                                </div>
                                <div className='col-span-12 flex px-[40px] border rounded-lg border-gray-200 shadow-md p-2 gap-2'>
                                    <div>
                                        <FcOnlineSupport className='text-6xl bg-green-100 rounded-full p-3 text-violet-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Orphanage Support</h1>
                                        <p className='pb-2 text-gray-600'>support@novahomes.org</p>
                                    </div>
                                </div>
                                <div className='col-span-12 flex px-[40px] border rounded-lg border-gray-200 shadow-md p-2 gap-2'>
                                    <div>
                                        <PiSpeakerHighFill className='text-6xl bg-violet-100 rounded-full p-3 text-violet-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Media & Press</h1>
                                        <p className='pb-2 text-gray-600'>media@novahomes.org</p>
                                    </div>
                                </div>
                                <div className='col-span-12 flex px-[40px] border rounded-lg border-gray-200 shadow-md p-2 gap-2'>
                                    <div>
                                        <PiHandHeartFill className='text-6xl bg-red-100 rounded-full p-3 text-red-600' />
                                    </div>
                                    <div>
                                        <h1 className='font-bold'>Volunteer With Us</h1>
                                        <p className='pb-2 text-gray-600'>volunteer@novahomes.org</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Contact