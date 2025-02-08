import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'

function Right() {
  return (
	<div className=' w-[70%]  bg-slate-700 text-gray-100'>
<ChatUser/>
<div className=' flex2 overflow-y-auto' style={{maxHeight:"calc(52vh-8vh)"}}>
<Messages/>
</div>
<Type/>
  </div>
  )
}

export default Right