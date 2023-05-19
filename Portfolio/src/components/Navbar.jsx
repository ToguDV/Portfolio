import React from 'react'
import logo from './../assets/react.svg'
import ItemNavbar from './ItemNavbar'
import { BiHomeHeart } from 'react-icons/bi';
import { HiCodeBracketSquare } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { BsFillClipboardHeartFill } from 'react-icons/bs';

const Navbar = () => {
    return (
        <nav className='nav flex justify-center mt-8  border-b-2 pb-5'>
            <ul className='flex justify-between w-3/5'>
                <div className='left-nav '>
                    <li>
                        <p>Andrey Villegas</p>
                    </li>
                </div>

                <div className='mid-nav flex'>



                    <a className='flex'>
                        <BiHomeHeart className='nav-item text-2xl' />
                        <li className='pr-14 text-xl flex'>Home</li>
                    </a>

                    { /*
                    <a className='flex'>
                        <CgProfile className='nav-item text-2xl' />
                        <li className='pr-14 text-xl flex'>About</li>
                    </a>
                    */
                    }


                    <a className='flex'>
                        <HiCodeBracketSquare className='nav-item text-2xl' />
                        <li className='pr-14 text-xl flex'>Projects</li>
                    </a>
                    <a className='flex'>
                        <BsFillClipboardHeartFill className='nav-item' />
                        <li className='pr-14 text-xl flex'>Resume</li>
                    </a>

                </div>


            </ul>

        </nav>
    )
}

export default Navbar