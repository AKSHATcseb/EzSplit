import React from 'react'

const OneNotification = () => {
  return (
        <>
            <div className='cursor-pointer flex justify-between items-center w-full rounded-sm py-5 px-5 h-20 bg-white border border-slate-200 mb-1 transition transform hover:-translate-y-1 hover:shadow-md'>
                <div className='flex justify-start items-center'>
                    <div >
                        <img className=' w-10 mr-5 rounded-full ' src="../../images/boy.jpg" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li className='font-semibold'>Akshat accepted your friend request</li>
                            <li className='text-slate-600 text-sm'>at 10:22 AM</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img className=' w-3 ' src="../../images/blueCircle.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default OneNotification
