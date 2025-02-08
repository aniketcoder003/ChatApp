import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'

function Right() {
  return (
	<div className=' w-[70%]  bg-slate-700 text-gray-100'>
<ChatUser/>
<Messages/>
<Type/>
  </div>
  )
}

export default Right