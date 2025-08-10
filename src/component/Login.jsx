import React,{useState} from 'react';

import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
          <img src="https://wallpapers.com/images/high/netflix-background-gs7hjuwvv2g0e9fj.webp"  
          class="w-screen h-screen object-cover block "
          />
        </div>
        <form className='absolute p-12 bg-black/70 w-3/12 mx-auto my-29 right-0 left-0 text-white'>
          <h1 className='font-bold text-3xl py-3'>{isSignInForm ?"Sign In" : "Sign Up"}</h1>
          {!isSignInForm && ( <input type = "text" placeholder='Full Name' className='p-2 my-4 bg-gray-700 w-full rounded-lg'/> )}
          <input type = "text" placeholder='Email Address' className='p-2 my-4 bg-gray-700 w-full rounded-lg'/> 
          <input type = "password" placeholder='Password' className='p-2 my-4 bg-gray-700 w-full rounded-lg' />
          <button className='p-3 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In" : "Sign Up"}</button>
          <p className='py-4 cursor-pointer' onClick= {toggleSignInForm}>
            {isSignInForm ?"New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
          </p>
        </form>
    </div>
  );
};

export default Login;