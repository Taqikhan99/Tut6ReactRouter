import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
  return (
    <div className='p-4 bg-black text-orange-400'>
            <h1 className='text-3xl'> User : {userid}</h1>
    </div>
  )
}

export default User