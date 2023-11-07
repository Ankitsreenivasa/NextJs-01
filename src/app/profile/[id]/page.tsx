import React from 'react'

function UserProfile({params}: any) {
  return (
    <>
        <h1 className='text-2xl text-white bg-blue-500 p-3 text-center'>Profile Page</h1>
        <div className="">
            <span className='text-2xl'>Profile <span className='bg-green-500'>{params.id}</span></span>
        </div>
    </>    
  )
}

export default UserProfile