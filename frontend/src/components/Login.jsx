import React from 'react'

function Login() {
  return (
	<div className=' flex  justify-center items-center h-screen bg-slate-700'>
	<form action='' className='border-2 p-6 h-[52vh] w-[30%] rounded-md'  >
	 <h1 className='text-black font-bold text-3xl text-center'>Chat <span className='text-green-500'>App</span></h1>
	 <h3 className='text-white font-bold text-2xl'>Login</h3>
	 <br></br>
   
	 <label class="input input-bordered flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"></path></svg> 
	 <input type="text" class="grow" placeholder="Email"/></label>
	 <br></br>


	 <label class="input input-bordered flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd"></path></svg> <input type="password" class="grow"  placeholder='password'/></label>
	 <br></br>
	 <div className='flex justify-between'>
	 <p className='text-white'>New User? <span className='text-blue-500 font-semibold cursor-pointer hover:text-blue-700'>Signup</span></p>
	 <input className='bg-green-600 rounded-md p-1 text-white h-[5vh] w-[10vh] hover:bg-green-800 duration-200 cursor-pointer' type='submit' value='Login'></input>	
	 </div>	
	 </form>
	</div>
 
  )
}

export default Login