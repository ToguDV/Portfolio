import React from 'react'
import { ImGithub, ImLinkedin2 } from 'react-icons/im';
import { BsDiscord } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Social = () => {
  return (
    <>
    
    <div className='social-container flex items-center flex-col mt-16'>
        <h1 className='text-4xl font-bold text-white'>FIND ME ON</h1>
        <p className='mt-3 text-white'>Connect with me on social media.</p>
        <div className='social-links mt-6 flex'>
            <a className='social-item rounded-full bg-white w-10 h-10 flex items-center justify-center ml-2 mr-2'>
                <ImGithub className='w-7 h-7 text-blue-500'></ImGithub>
            </a>

            <a className='social-item rounded-full bg-white w-10 h-10 flex items-center justify-center ml-2 mr-2'>
                <ImLinkedin2 className='w-7 h-7 text-blue-600'></ImLinkedin2>
            </a>

            <a className='social-item rounded-full bg-white w-10 h-10 flex items-center justify-center ml-2 mr-2'>
                <BsDiscord className='w-7 h-7 text-indigo-500'></BsDiscord>
            </a>

            <a className='social-item rounded-full bg-white w-10 h-10 flex items-center justify-center ml-2 mr-2'>
                <AiOutlineMail className='w-7 h-7 text-purple-500'></AiOutlineMail>
            </a>


        </div>
    </div>

    </>
  )
}

export default Social