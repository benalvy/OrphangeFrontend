import React from 'react'
import { BsBalloonHeartFill } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className='bg-blue-950 py-10 px-[70px]'>
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <div className='flex items-center gap-2'>
                  <BsBalloonHeartFill className='text-4xl text-violet-500' />
                  <div>
                    <h1 className='text-white text-lg font-bold'>Novahomes</h1>
                    <p className='text-white'>Every child deserves a Home.</p>
                  </div>
                </div>
                <div className='px-10 pt-5'>
                  <p className='text-white'>Novahomes is a platform that connects compassionate people with orphanages in need.Together,we can build a better tomorrow for every child.</p>
                </div>
                <div className='px-10 pt-3 flex gap-4'>
                    <FaFacebookF className=" text-3xl text-white border border-white rounded-full p-1" />
                    <FaInstagram className=" text-3xl text-white border border-white rounded-full p-1" />
                    <FaTwitter className=" text-3xl text-white border border-white rounded-full p-1" />
                    <FaYoutube className=" text-3xl text-white border border-white rounded-full p-1" />
                </div>
            </div>
            <div className='col-span-8'>
              <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                  <h1 className='font-bold text-lg text-white'>Quick Links</h1>
                  <p className='text-white'>Home</p>
                  <p className='text-white'>About Us</p>
                  <p className='text-white'>Orphanages</p>
                  <p className='text-white'>How it works</p>
                  <p className='text-white'>Impact</p>
                  <p className='text-white'>Blog</p>
                  <p className='text-white'>Contact Us</p>
                </div>
                <div className='col-span-3'>
                  <h1 className='font-bold text-lg text-white'>For Donors</h1>
                  <p className='text-white'>Donate Now</p>
                  <p className='text-white'>Explore Orphanages</p>
                  <p className='text-white'>Causes</p>
                  <p className='text-white'>Success Stories</p>
                  <p className='text-white'>FAQs</p>
                </div>
                <div className='col-span-3'>
                  <h1 className='font-bold text-lg text-white'>For Orphanages</h1>
                  <p className='text-white'>Register Orphanages</p>
                  <p className='text-white'>Login</p>
                  <p className='text-white'>How it Works</p>
                  <p className='text-white'>Resources</p>
                  <p className='text-white'>FAQs</p>
                </div>
                <div className='col-span-3'>
                  <h1 className='font-bold text-lg text-white'>Legal</h1>
                  <p className='text-white'>Privacy Policy</p>
                  <p className='text-white'>Terms of Use</p>
                  <p className='text-white'>Refund Policy</p>
                </div>
              </div>
            </div>
        </div>
        <div className='pt-5'>
          <hr className='text-white' />
        </div>
        <div className='flex justify-between px-[70px] items-center pt-5 text-white'>
          <div> &copy; 2026 Novahomes.All rights reserved.</div>
          <div>Made with ❤️ for a better tomorrow</div>
        </div>
      </div>
    </>
  )
}

export default Footer
