import React, { useState } from 'react'
import { IoIosHeartEmpty, IoMdHeart } from 'react-icons/io'
import login from '../../assets/login.png'
import { GoPeople } from 'react-icons/go'
import { FcGoogle } from 'react-icons/fc'
import { MdOutlineFacebook } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerAPI, loginAPI } from '../../Services/allAPI'
import { toast } from 'react-toastify'

function Auth({ inside }) {
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: ""
    },
    validationSchema: Yup.object({
      username: inside && Yup.string().min(3, "Must be atleast 3 charachters").required("Username required"),
      email: Yup.string().email("Invalid email").required('Email required'),
      password: Yup.string().required("Password required"),
      role: inside && Yup.string().required("Please select account type")
    }),
    onSubmit: (values) => {
      if (inside) {
        handleRegister(values)
      } else {
        handleLogin(values)
      }
    }
  })

  const handleRegister = async (userData) => {
    try {
      const result = await registerAPI(userData)
      if (result.status == 201) {
        toast.success("Register Successful")
        form.resetForm()
        navigate("/login")
      } else {
        toast.error('Something went wrong')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogin = async (userData) => {
    try {
      const result = await loginAPI(userData)
      if (result.status == 200) {
        toast.success("Login success")
        sessionStorage.setItem("user", JSON.stringify(result.data.user))
        sessionStorage.setItem("token", result.data.token)
        form.resetForm()
        if (result.data.user.role == "admin") {
          navigate("/admindash")
        } else if(result.data.user.role == "orphanage") {
          navigate("/registration")
        }
        else{
          navigate("/dashboard")
        }
      } else if (result.status === 409) {
        toast.error("Invalid credentials")
      } else if (result.status === 400) {
        toast.error('Account does not exist, please register')
      } else {
        toast("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='pt-[60px] px-4 sm:px-8 md:px-12 lg:px-[100px] xl:px-[180px]'>
      <div className='grid grid-cols-1 lg:grid-cols-12 shadow-lg rounded-3xl overflow-hidden'>
        <div className='hidden lg:block lg:col-span-6 bg-violet-50 pt-[10px] ps-[30px] rounded-3xl'>
          <div className='flex items-center gap-2'>
            <IoMdHeart className='text-4xl md:text-5xl text-violet-600' />
            <div>
              <h1 className='font-bold text-xl md:text-2xl'>Nova<span className='text-violet-600'>Homes</span></h1>
              <p className='text-gray-600 text-sm md:text-base'>Together we build better tomorrow.</p>
            </div>
          </div>

          <h1 className='ps-2 md:ps-[30px] font-bold text-2xl md:text-3xl pt-6'>Welcome to <span className='text-violet-700'>NovaHomes</span></h1>
          <p className='ps-2 md:ps-[30px] pt-1 text-gray-700 text-sm md:text-base'>Join our community and be a part of <br />changing lives. Every act of kindness <br /> creates a better tomorrow.</p>

          <div className='flex items-center gap-2 pt-4 ps-4 md:ps-8'>
            <div className='bg-violet-200 rounded-full p-2 flex items-center'>
              <IoIosHeartEmpty className='text-3xl md:text-4xl text-violet-600' />
            </div>
            <div>
              <h1 className='pt-8 font-semibold text-base md:text-lg'>Support Orphanages</h1>
              <p className='text-gray-600 text-sm md:text-base'>Help orphanages with donation.</p>
            </div>
          </div>
          <div className='flex items-center gap-2 pt-3 ps-4 md:ps-8'>
            <div className='bg-violet-200 rounded-full p-2 flex items-center'>
              <GoPeople className='text-3xl md:text-4xl text-violet-600' />
            </div>
            <div>
              <h1 className='font-semibold text-base md:text-lg'>Change lives</h1>
              <p className='text-gray-600 text-sm md:text-base'>Your support bring hope and care.</p>
            </div>
          </div>
          <div className='pt-4'>
            <img
              className='w-full max-w-[500px] h-auto max-h-[300px] object-contain mx-auto'
              src={login}
              alt=""
            />
          </div>
        </div>

        <div className='col-span-1 lg:col-span-6 border rounded-3xl border-gray-300'>
          <div className='pt-6 md:pt-[40px] px-4 sm:px-8 md:px-[40px] lg:px-[60px]'>
            <div className='border rounded-2xl border-gray-300 shadow-md'>
              <h1 className="font-bold text-2xl md:text-3xl text-center pt-3">Welcome back!</h1>
              <p className='text-center text-gray-700 text-sm md:text-base px-4'>Login to your account or create a new one</p>
              <div className='px-4 sm:px-8 md:px-[60px] lg:px-[100px] pt-5'>
                <div className='flex justify-evenly items-center gap-3 sm:gap-9 border border-gray-300 p-2 rounded-lg'>
                  {
                    inside ?
                      <>
                        <Link to={'/login'} className='flex justify-center font-semibold'>Login</Link>
                        <Link to={'/register'} className='flex justify-center font-semibold bg-violet-600 px-[50px] py-1 text-white rounded'>Register</Link>
                      </>
                      :
                      <>
                        <Link to={'/login'} className='flex justify-center font-semibold bg-violet-600 px-[50px] py-1 text-white rounded'>Login</Link>
                        <Link to={'/register'} className='flex justify-center font-semibold'>Register</Link>
                      </>
                  }
                </div>
              </div>

              <form onSubmit={form.handleSubmit}>
                <div className='px-4 sm:px-6 md:px-[40px] pt-4 pb-3'>
                  {
                    inside &&
                    <>
                      <label htmlFor="" className='font-semibold'>Username</label><br />
                      <input
                        name='username'
                        value={form.values.username}
                        onChange={form.handleChange}
                        type="text"
                        placeholder='Enter Username'
                        className='border w-full border-gray-300 py-2 rounded-lg ps-2 mb-1'
                      />
                      {form.errors.username && <div className="text-red-500 text-sm mb-2">{form.errors.username}</div>}

                      <label htmlFor="" className='font-semibold'>Account Type</label><br />
                      <select
                        name='role'
                        value={form.values.role}
                        onChange={form.handleChange}
                        className='border w-full border-gray-300 py-2 rounded-lg ps-2 mb-1'
                      >
                        <option value=''>Select account type</option>
                        <option value='orphanage'>Orphanage</option>
                        <option value='donor'>Donor</option>
                      </select>
                      {form.errors.role && <div className="text-red-500 text-sm mb-2">{form.errors.role}</div>}
                    </>
                  }
                  <label htmlFor="" className='font-semibold'>Email Address</label><br />
                  <input
                    name='email'
                    value={form.values.email}
                    onChange={form.handleChange}
                    type="text"
                    placeholder='Enter email Id'
                    className='border w-full border-gray-300 py-2 rounded-lg ps-2'
                  />
                  {form.errors.email && <div className="text-red-500 text-sm mb-1">{form.errors.email}</div>}

                  <label htmlFor="" className='font-semibold'>Password</label><br />
                  <input
                    name='password'
                    value={form.values.password}
                    onChange={form.handleChange}
                    type="password"
                    placeholder='Enter Password'
                    className='border w-full border-gray-300 py-2 rounded-lg ps-2'
                  />
                  {form.errors.password && <div className="text-red-500 text-sm mb-1">{form.errors.password}</div>}

                  <div className='flex justify-end'>
                    <h1 className='font-semibold text-violet-700 text-sm md:text-base'>Forgot Password?</h1>
                  </div>
                  <button type='submit' className='mt-2 w-full text-center bg-violet-600 font-bold text-white py-2 rounded cursor-pointer'>
                    {inside ? <>Register</> : <>Login</>}
                  </button>
                </div>
              </form>

              <h1 className='text-center'>OR</h1>
              <div className='flex flex-col sm:flex-row px-4 sm:px-[30px] gap-2 justify-center pt-3'>
                <div className='flex items-center justify-center border py-2 px-2 rounded border-gray-300'>
                  <FcGoogle className='text-2xl shrink-0' />
                  <h1 className='font-semibold text-sm sm:text-base'>Swipe with Google</h1>
                </div>
                <div className='flex items-center justify-center gap-1 border py-2 px-2 rounded border-gray-300'>
                  <MdOutlineFacebook className='text-2xl text-blue-600 shrink-0' />
                  <h1 className='font-semibold text-sm sm:text-base'>Swipe with Facebook</h1>
                </div>
              </div>
              {
                inside ?
                  <h1 className='text-center pt-3 pb-5 px-4 text-sm sm:text-base'>Already have an Account? <Link to={'/login'} className='text-violet-600 font-semibold'>Login</Link></h1>
                  :
                  <h1 className='text-center pt-3 pb-5 px-4 text-sm sm:text-base'>Dont have an Account? <Link to={'/register'} className='text-violet-600 font-semibold'>Register Now</Link></h1>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth