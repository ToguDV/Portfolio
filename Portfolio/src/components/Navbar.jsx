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
            <ul className='flex justify-between w-3/5 max-lg:w-11/12 flex-wrap'>
                <div className='left-nav mr-5 max-lg:mb-5'>
                    <li>
                        <a className='' href='/'>Andrey Villegas</a>
                    </li>
                </div>

                <div className='mid-nav flex'>



                    <a className='flex' href='/'>
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


                    <a className='flex' href='/projects'>
                        <HiCodeBracketSquare className='nav-item text-2xl' />
                        <li className='pr-14 text-xl flex'>Projects</li>
                    </a>

                    { /*
                    <a className='flex' href='/resume'>
                        <BsFillClipboardHeartFill className='nav-item' />
                        <li className='pr-14 text-xl flex'>Resume</li>
                    </a>
                    */
                    }

                </div>


            </ul>

        </nav>
    )
}

export default Navbar