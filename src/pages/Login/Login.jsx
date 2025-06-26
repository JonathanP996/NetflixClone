import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login'>
      <img src={Logo} className='loginLogo' alt=""/>
      <div className="loginForm">
        <form>
        <h1> {signState} </h1>
        {signState === "Sign Up"? <input type="text" placeholder='Your Name'/>: <></>}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='password'/>
          <button>{signState}</button>
          <div className="formHelp">          
          <div className="remember">
            <input type="checkbox"/>
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
          </div>
          <div className="formSwitch">
            { signState==="Sign In"?
            <p>New to Netflix? <span onClick={() => {setSignState("Sign Up")}}> Sign Up Now</span></p> :
            <p>Already have account? <span onClick={() => {setSignState("Sign In")}}> Sign In Now</span></p> }
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
