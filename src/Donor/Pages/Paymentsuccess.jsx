import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { verifySessionAPI } from '../../Services/allAPI'

function Paymentsuccess() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [donation, setDonation] = useState(null)

  useEffect(() => {
    const verify = async () => {
      if (!sessionId) return
      try {
        const result = await verifySessionAPI(sessionId)
        if (result.status == 200) {
          setDonation(result.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    verify()
  }, [sessionId])

  return (
    <div className='container min-h-screen flex justify-center items-center'>
      <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
        <div>
          <h1 className='text-vlue-500 md:text:4xl font-bold'>Congratulations</h1>
          <p className='text-2xl my-10'>
            {donation
              ? `Thank you for donating Rs.${donation.amount} to ${donation.Orphanagename}.`
              : "Thank you for donating."}
          </p>
          <div className='pt-3'>
            <Link to={'/money'} className='flex items-center bg-blue-700 w-60 p-2 text-white font-bold rounded'>Donate more</Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Paymentsuccess