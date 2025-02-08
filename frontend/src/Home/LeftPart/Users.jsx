import React from 'react'
import User from './User'

function Users() {
  return (
	<div>
        <h1 className='px-5 py-2 bg-slate-600 rounded-md font-semibold text-white'>Messages</h1>
        <br/>
		<div className='flex1 overflow-y-auto '>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
			<User/>
		</div>
	</div>
  )
}

export default Users