import React from 'react'
import togusbw from '../assets/togusbw.png';

const Profile = () => {
    return (
        <>
            <div className='flex flex-col items-center mt-20'>
                <img src={togusbw} alt="togu profile" srcSet="" className='w-32 rounded-full' />
                <p className='mt-3'>Hi all, I'm Togu 🤜🤛</p>
                <p className='desc-anim text-5xl w-11/12 text-center mt-3'>FULL STACK DEVELOPER</p>
            </div>

        </>
    )
}

export default Profile
