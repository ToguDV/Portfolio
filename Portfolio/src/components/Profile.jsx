import React from 'react'
import togusbw from '../assets/togusbw.png';
import Type from './Type';
import { BsCodeSlash } from 'react-icons/bs';

const Profile = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col items-center mt-20'>
                <img src={togusbw} alt="togu profile" srcSet="" className='w-32 rounded-full' />
                <p className='mt-3'>Hey, I'm Togu 👋</p>
                <Type className='desc-anim text-5xl w-11/12 text-center mt-3'></Type>

                <Link to="/projects" className='btn-projects mt-5'>
                    <span className='flex justify-center items-center'>
                        <BsCodeSlash className='mr-1' />
                        Projects
                    </span>
                </Link>
            </div>

        </>
    )
}

export default Profile
