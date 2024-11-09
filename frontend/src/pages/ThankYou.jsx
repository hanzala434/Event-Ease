import React from 'react'
import Button from 'react-bootstrap/Button';


const ThankYou = () => {
  return (
 <>
 <section className='mt-16'>
    <div className='flex flex-col justify-center content-center'>
        <h1 className='flex text-3xl text-red-700  font-bold justify-center'>Thank You!</h1>
        <h2 className='text-2xl m-4 text-red-700 flex justify-center'>
            Your Appointment has been sent.
            Confirmation message will be sent via Your Whatsapp Number Provided.
        </h2>
        <div className='flex justify-center'>
        <Button href='/vendors ' className='bg-red-700 hover:bg-red-500 border-red-700 flex w-96 justify-center' variation='primary'>Go Back</Button>
        </div>
    </div>
 </section>
 </>
  )
}

export default ThankYou
