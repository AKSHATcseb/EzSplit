// import React from 'react'

// const Group = ({name, numberOfMembers, admin, members}) => {
//   return (
//     <>
//       <div className='cursor-pointer flex justify-between items-center w-full rounded-sm py-5 px-5 h-28 bg-white border border-slate-200 mb-1 hover:border hover:border-slate-500'>
//         <div>
//           <div className='text-3xl font-bold'>{name}</div>
//           <div className='text-[#003E53] mt-2'>{numberOfMembers} members</div>
//         </div>
//         <div className='rounded-full bg-red-500 text-white w-6 flex justify-center items-center'>
//           5
//         </div>
//       </div>
//     </>
//   )
// }

// export default Group


import React from 'react'

const Group = ({ name, numberOfMembers, admin, members }) => {
  return (
    <>
      <div className='cursor-pointer flex justify-between items-center w-full rounded-sm py-5 px-5 h-28 bg-white border border-slate-200 mb-1 transition transform hover:-translate-y-1 hover:shadow-md'>
        <div className='flex justify-center items-center'>
          <img className='w-20 mr-5' src="../../images/boy.jpg" alt="" />
          <div>
            <div className='text-3xl font-bold'>{name}</div>
            <div className='text-[#003E53] mt-2'>{numberOfMembers} members</div>
          </div>
        </div>
        <div className='rounded-full bg-red-500 text-white w-6 flex justify-center items-center'>
          5
        </div>
      </div>
    </>
  )
}

export default Group
