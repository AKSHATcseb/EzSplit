import React from 'react'

const RequestedFriend = ({ name, username, image, email }) => {
    return (
        <>
            <div className='cursor-pointer flex justify-between items-center w-full rounded-sm py-5 px-5 h-20 bg-white border border-slate-200 mb-1 transition transform hover:-translate-y-1 hover:shadow-md'>
                <div className='flex justify-start items-center'>
                    <div >
                        <img
                            className='w-10 h-10 mr-5 rounded-full object-cover'
                            src="../../images/boy.jpg"
                            alt={name}
                        />
                    </div>
                    <div>
                        <ul>
                            <li className='font-semibold'>{name}</li>
                            <li className='text-slate-600 text-sm'>{username}</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5'>
                    <img className='w-8' src="../../images/check.png" alt="" />
                    <img className='w-7' src="../../images/remove.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default RequestedFriend
