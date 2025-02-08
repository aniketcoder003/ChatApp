import React from 'react'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
	<div className='h-[15vh]'>
		<div className='px-4 py-6'>
     <form className=''>
	    <div className='flex space-x-3'>
			<label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg p-2 flex items-center gap-2 w-[80%]">
			<input type="text" className="grow outline-none" placeholder="Search" />
			</label>
			<button><FaSearch className='text-5xl hover:bg-gray-100 p-2 rounded-full duration-300 '/></button>
			</div>
	 </form>

	</div>
	</div>
  )
}

export default Search