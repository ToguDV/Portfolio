import React from 'react'
import { FaBeer } from 'react-icons/fa';
import {BiHomeHeart} from 'react-icons/bi';

const ItemNavbar = () => {
  return (
    <>

        <div className='flex'>
        <BiHomeHeart className='hola mt-1 text-xl mr-2'/>
        </div>
        <li className='pr-14 text-xl flex'>Home</li>

    </>
  )
}

export default ItemNavbar