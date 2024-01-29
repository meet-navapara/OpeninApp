import React from 'react';

function SideBar({menu}) {
    let menuItems=[
        {name:"Dashboard",icon:'clipboard'},
        {name:"Upload",icon:'cloud-upload'},
        {name:"Invoice",icon:'logo-paypal'},
        {name:"Schedule",icon:'browsers'},
        {name:"Calendar",icon:'calendar-number'},
        {name:"Notification",icon:'notifications'},
        {name:"Setting",icon:'settings'},


    ]
    return (
        <div className={`bg-slate-50 h-full  w-3/4 s md:w-1/5 ${menu ? ` w-0 h-0 hidden`: `w-3/4`}`}>
          <div className=' h-3/4 w-3/4 relative top-28 ml-10 pt-3'>
          <ul className=''>
                {menuItems.map(({name,icon})=>{
                    return(
                        <li key={name} className='mt-9'>
                            <span className='relative left-0 mr-3 text-sm text-gray-500'>
                            <ion-icon name={icon}></ion-icon>
                            </span>
                            <span className='text-sm text-gray-500'>{name}</span>
                        </li>

                    )
                })}
            </ul>
          </div>

        </div>
    );
}

export default SideBar;