import React from 'react';
import Leftside from '../assets/Leftside.png'
import Social from '../assets/Social.png'
import BASE from '../assets/BASE.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'
import { useNavigate } from "react-router-dom";




function SignIn() {
    let toHome=useNavigate()

    function navigate(){
        toHome('/Home')
    }
    return (
        <div className='h-screen w-full flex'>
           <div className='h-screen  w-0 md:w-2/4 overflow-hidden hidden md:block'>
           <div className='  '>
          
          <img src={Leftside} alt="" />
       
         
          

      </div>
      <div className='absolute bottom-10 left-36 h-10'><img src={Social} className='h-10' alt="" /></div> 
      <img src={BASE} className='absolute md:top-80 md:left-52 md:h-10' alt="" />
           </div>
           <div className='h-screen w-full  md:w-2/4 '>
           <div className='md:ml-24'>
            <div className='md:hidden block w-full bg-blue-500 h-12 p-0 flex items-center'>
               <h1 className='text-3xl text-white font-mono ml-4'>Base</h1>
            </div>
           <div className='md:mt-40 p-4 mt-4'>
                <h1 className='text-3xl md:text-3xl font-bold'>Sign In</h1>
                <h4 className='mt-3'>Sign to your account</h4>
            </div>
            <div className='flex mt-1 pl-4'>
               
            <div className='md:h-fit flex items-center justify-center mr-3 md:mr-8'>
                <img className='md:h-5 md:mr-3'src={Google} alt="" />
                <h1 className='text-sm'>Sign in with Google</h1>
                    </div>

             <div className='md:h-fit flex  items-center justify-center'>
                <img className='h-5 md:mr-3'src={Apple} alt="" />
                <h1 className='text-sm'>Sign in with Apple</h1>
                    </div>
                
                

            </div>
            <div className='md:h-2/5 md:w-96 p-4 rounded-xl bg-white shadow-sm mt-5'>
            <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div>
    <h1 className='text-blue-500'>Forgot Password ?</h1>
  </div>
  <div>
    <button onClick={navigate} className='w-full md:w-full bg-blue-500 md:h-10 h-10 rounded-md mt-4 text-white font-bold'>Sign In</button>
  </div>
            </div>
            <div className='pl-4'>
                <h1 className='font-semibold mt-4 md:ml-14'><span>Don't have account ?</span><span className='text-blue-500 ml-4'>Register Here</span></h1>
            </div>
           </div>
           </div>
        </div>
    );
}

export default SignIn;