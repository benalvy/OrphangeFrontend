import React from 'react'
import { Link } from 'react-router-dom'
function PaymentError() {
  return (
    <>
      <div className='container min-h-screen flex justify-center items-center'>
        <div className='md:grid grid-cols-2 px-20 justify-center items-center my-10'>
            <div>
                <h1 className='text-vlue-500 md:text:4xl font-bold'>OOps</h1>
                <p className='text-2xl my-10'>Something went Wrong</p>
                <div className='pt-3 '>
                    <Link to={'/money'} className='flex items-center bg-blue-700 w-60 p-2 text-white font-bold rounded'>Back</Link>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentError
