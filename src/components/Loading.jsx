import React from 'react';
import { Rings } from  'react-loader-spinner'

function Loading() {
  return (
    <div className='flex justify-center items-center'>
        <Rings color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Loading




