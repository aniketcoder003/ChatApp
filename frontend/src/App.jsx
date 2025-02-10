import React from 'react'
import Left from './Home/LeftPart/Left'
import Right from './Home/RIghtPart/Right'
import Signup from './components/Signup'
import Login from './components/Login'

 const App = () => {
  return (
    // <div className='flex h-screen'>
    //   <Left/>
    //   <Right/>
    // </div>
    <div>
      {/* <Signup/> */}
      <Login/>
    </div>
  )
}

export default App
