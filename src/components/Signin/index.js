import React from 'react'
import './signin.css'

const SignIn = (props) => {
const{setEmail,email,Password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props;
  return( <>
            <section className='login'>
              <div className='loginContainer'>
                <label>Email</label>
                <input type='email' autofocus required onChange={(e)=>setEmail(e.target.value)} value={email}/>
             <p className='errorMsg'>{emailError}</p>
             <label>password</label>
             <input type='password' required
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              value={Password} />
             <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                  {hasAccount ?(
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>
                        Dont have an account?
                        <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span>
                    </p>
                    </>
                  ):(
                    <>
                  <button onClick={handleSignup}>Sign up</button>
                 
                  <p>have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span>  </p>
                  </>)
                  }
                </div>
                </div>
                </section>
  </>
  )
}
export default SignIn;