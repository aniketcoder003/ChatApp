import React from 'react'

function User() {
  return (
	<>
<div className='flex space-x-3 px-4 py-2 hover:bg-slate-700 duration-300 cursor-pointer'>
				<div className="avatar online">
				<div className="w-14 rounded-full">
					<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
				</div>
				</div>
				<div>
					<h1 className='font-bold text-white'>Aniket</h1>
					<span>aniketcoder003@gmail.com</span>
				</div>


		</div>

	</>
  )
}

export default User