import React from 'react'

const Friend = ({ name, username, image, email }) => {
  return (
    <div className='cursor-pointer flex justify-start items-center w-full rounded-sm py-5 px-5 h-20 bg-white border border-slate-200 mb-1 transition transform hover:-translate-y-1 hover:shadow-md'>
      <div>
        <img
          className='w-10 h-10 mr-5 rounded-full object-cover'
          src="../../images/boy.jpg"
          alt={name}
        />
      </div>
      <div>
        <ul>
          <li className='font-semibold '>{name}</li>
          <li className='text-[#003E53] text-sm'>{username}</li>
        </ul>
      </div>
    </div>
  )
}

export default Friend

