import React from 'react';
import Upload from '../assets/Upload.png'


function UploadFile({menu}) {
    return (
        <div className={` h-full w-0 flex justify-center items-center md:w-4/5 ${menu ? `w-full`: `w-0 md:w-1/4`}`}>
            <div className=' h-1/3 w-3/4 md:h-1/3 md:w-2/6 flex flex-col justify-around border-dotted border p-2'>
                <div className='bg-slate-100 h-4/6 flex justify-center items-center'>
                    <img src={Upload} alt="" />
                </div>
                <div className=' h-1/6'>
                    <button className='bg-indigo-500 h-full w-full rounded-md text-white'>
                        Upload
                    </button>
                </div>
            </div>
            
        </div>
    );
}

export default UploadFile;