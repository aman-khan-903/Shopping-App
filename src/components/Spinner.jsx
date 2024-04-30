import React from 'react'
import './Spinner.css'; 

const Spinner = () => {
  return (
    <div className='flex items-center justify-center  h-[calc(100vh-180px)]'>
        <div className='spinner'></div>
    </div>
  )
}

export default Spinner