
import React, { useState } from 'react'
import Button from './Button'
import Logo from '../assets/Logo.png'
import Icon from '../assets/Icon.png'
import SideBar from './SideBar'
import UploadFile from './UploadFile'



export const Navbar = () => {
    let items=[
        {name:"Home"},
        {name:"Services"},
        {name:"About"},
        {name:"Blogs"},
        {name:"Contact"},

    ]
    let [menu,setmenu]=useState(false)
    return (
       <div className='h-screen  flex flex-col'>
                   <div className='shadow-md w-full h-11 fixed top-0 left-0 z-20 '>
                <div className='md:flex justify-between items-center bg-white py-4 md:px-10 px-7'>
                    <div className='font-bold flex w-full text-2xl items-center ml-6 text-slate-800'>
                       <div >
                       <img src={Logo} alt="" />
                       </div>
                       <div className='float-end absolute right-0 mr-5 md:mr-7'>
                       <img src={Icon} alt="" />
                       </div>
                    </div>      
                    <div onClick={()=>{setmenu(!menu)}} className='text-3xl absolute left-1 mx-3  top-6 cursor-pointer md:hidden'>
                    <ion-icon name={menu?"menu-outline":"close"}></ion-icon>
                    </div>
                </div>
                

            </div>
          <div className='flex justify-between  w-full h-full'>
         
            <SideBar menu={menu}/>
            <UploadFile menu={menu}/>
            </div>

        
          
            </div>

       
    )
}