import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { signIn, signUp } from '../../firebase'

const Login = () => {

  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState==="Sign In"){
      await signIn(email, password);
    }
    else{
      await signUp(name, email, password);
    }
  }

  return (
    <div className='login'>
      <img src={Logo} className='loginLogo' alt=""/>
      <div className="loginForm">
        <form>
        <h1> {signState} </h1>
        {signState === "Sign Up"? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'/>: <></>}
          <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
          <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
          <button onClick={user_auth} type="submit">{signState}</button>
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
