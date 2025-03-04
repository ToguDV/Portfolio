import React from 'react'
import togusbw from '../assets/togusbw.png';
import Type from './Type';
import { BsCodeSlash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col items-center mt-20'>
                <img src={togusbw} alt="togu profile" srcSet="" className='w-32 rounded-full' />
                <p className='mt-3'>Hey, I'm Togu 👋</p>
                <Type className='desc-anim text-5xl w-11/12 text-center mt-3'></Type>

                <button className='btn-projects mt-5' onClick={() => navigate('/projects')}>
                    <span className='flex justify-center items-center'>
                        <BsCodeSlash className='mr-1' />
                        Projects
                    </span>
                </button>
            </div>

        </>
    )
}

export default Profile
