import React from 'react';
import { useState } from 'react';
import { useSignUp } from '../hooks/useSignUp';
import { useLogin } from '../hooks/useLogin';
 function SignInUpForm(){
    const [isSignUp, setIsSignUp] = useState(false);
    const [role,setRole]=useState('student');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const { signUp ,isLoading ,error } =useSignUp();
    const { login ,isLoading2 ,error2 } =useLogin();
    const hanleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSignUpClick =()=>{
      setIsSignUp(true);
      setEmail('')
      setPassword('');
      setName('');
      setRole('student')
    };
    const handleSignInClick = () => {
      setIsSignUp(false);
      setEmail('')
      setPassword('');
      setName('');
      setRole('student')
    };
    const signUpHandle = async(e) => {
      e.preventDefault();
      await signUp(name,email,password,role);
    };
    const logIn=async(e)=>{
        e.preventDefault();
        await login(email ,password);
    }

    return (
      <div className='body'>
              <div className={`Container ${isSignUp ? 'right-panel-active' : ''}`}>
          <div className="form-container sign-up-container">
            <form  className="form" action="#">
              <h1 className='h1'>Create Account</h1>
              <span className='span'>or use your email for registration</span>
              <input className='input' onChange={hanleNameChange} type="text" placeholder="Name" />
              <input className='input' onChange={handleEmailChange} type="email" placeholder="Email" />
              <input className='input' onChange={handlePasswordChange} type="password" placeholder="Password" />
              <div className='radioContainer'>
                 <label>Instructor</label> <input  name ='role' onClick={(e)=>setRole(e.target.value)} type='radio' value={"instructor"}/>
                 <label>Student</label><input  name ='role' onClick={(e)=>setRole(e.target.value)} type='radio' checked={true} value={'student'}/>
             </div>
              <button disabled={isLoading} onClick={signUpHandle} className='button'>Sign Up</button>
              {error && <div className='error'>{error.response.data.error}</div>}

            </form>
          </div>
          <div className="form-container sign-in-container">
            <form className="form" action="#">
              <h1  className='h1'>Sign in</h1>
              <span className='span'>or use your account</span>
              <input className='input'  onChange={handleEmailChange} type="email" placeholder="Email" />
              <input className='input'  onChange={handlePasswordChange} type="password" placeholder="Password" />
              <button disabled={isLoading2} onClick={logIn} className='button'>Sign In</button>
              {error2 && <div className='error'>{error2.response.data.error}</div>}
            </form>
          </div>
          <div className=".Overlay-h-container">
            <div className=".Overlay-h">
            <div className={`.Overlay-h-panel .Overlay-h-left ${isSignUp ? '' : 'hidden'}`}>
                <h1 className='h1' >Welcome Back!</h1>
                <p className='p'>To keep connected with us please login with your personal info</p>
                <button className="ghost" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className={`.Overlay-h-panel .Overlay-h-right ${isSignUp ? 'hidden' : ''}`}>
                <h1  className='h1'>Hello, Friend!</h1>
                <p className='p' >Enter your personal details and start journey with us</p>
                <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }


export default SignInUpForm;