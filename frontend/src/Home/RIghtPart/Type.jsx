import { IoSend } from "react-icons/io5";
function Type(){

	return (
		<div className="px-4 flex items-center space-x-2 bg-slate-900 p-2">
          <div className="w-[80%]">
		  <input
				type="text"
				placeholder="Type here"
				className="text-1xl w-[100%] outline-none rounded-3xl p-3 text-white bg-slate-800" />
		  </div>
		  <button className="w-[20%]">
		  <IoSend className="text-2xl text-slate-800  hover:text-slate-400 duration-300" />
		  </button>

		</div>
	)
}

export default Type