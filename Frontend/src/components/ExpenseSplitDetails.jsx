import React from 'react'

const ExpenseSplitDetails = () => {

    return (
        <>
            <div className='cursor-pointer flex justify-between items-start w-full rounded-sm py-5 px-5 h-40 bg-white border border-slate-200 mb-1 '>

                <div className='flex justify-start items-center'>
                    <div>
                        <ul>
                            <li className='font-semibold mb-2 text-lg'>Expense Title</li>
                            <li className='text-[#003E53] text-sm mb-1'>Paid AMIT</li>
                            <li className='text-[#003E53] text-sm'>at 10:22 AM</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <div className='text-2xl font-bold '>
                        $120
                    </div>
                    <div className=' mb-1 text-[#003E53]'>
                        splited among 4 with $30 each
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-blue-700 py-2 px-4 text-white rounded-md font-semibold hover:bg-blue-600 transition text-sm mt-4  ">
                        <img src="../../images/paynow.png" alt="Add" className="w-5 h-5" />
                        <span>Pay now</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default ExpenseSplitDetails
