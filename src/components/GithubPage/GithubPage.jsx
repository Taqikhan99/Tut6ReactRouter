import React, { useEffect, useState } from 'react'

function GithubPage() {
    const [data,setData] = useState([])
    useEffect(()=>{

        fetch('https://api.github.com/users/Taqikhan99')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })

    },[])
  return (
    <>
    <div className='w-full flex justify-center gap-5  align-middle p-2'>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className='w-14'/>
        <h1 className='text-4xl font-bold'> GITHUB PAGE</h1>
    </div>
   
    <div className="container grid md:grid-cols-1 lg:grid-cols-3 gap-4  custom-container " >
        <div className='col-span-1 p-2' >
            <div className='rounded-full border border-gray-700  md: w-4/5 md: h-4/5'>
                    <img src={data.avatar_url} alt="" className="rounded-full w-full h-full object-cover"/>
            </div>
        </div>
        <div className= ' col-span-2  p-3 shadow-lg mt-2 border rounded-lg'>
            <h1 className='text-4xl text-black font-bold mb-2'> {data.name}</h1>
            <h1 className='text-2xl text-gray-600 font-semibold mb-5'> {data.login}</h1>
            <h1 className='text-lg text-gray-600 font-semibold mb-5'> {data.bio}</h1>

            <div className=' p-2 flex justify-between gap-2'>

                <div className='shadow-md  p-2 border w-1/3 h-36'>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> {data.followers}</h1>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> Followers</h1>
                </div>
                <div className='shadow-md  p-2 border w-1/3 h-36'>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> {data.following}</h1>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> Following</h1>
                </div>
                <div className='shadow-md  p-2 border w-1/3 h-36'>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> {data.public_repos}</h1>
                <h1 className='text-lg text-gray-600 font-semibold mb-5'> Repositories</h1>
                </div>

            </div>



        </div>
    </div>
    
    </>
  )
}

export default GithubPage