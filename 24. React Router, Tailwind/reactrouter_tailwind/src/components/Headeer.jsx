import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/purepng.com-disney-logologobrand-logoiconslogos-251519939495wtv86.png'
const Headeer = () => {

    return (
        <nav className='flex items-center justify-between px-52'>
            <div
                className='logo'
            >  <img src={logo} className='w-36' alt="disney" />
            </div>
            <div className='flex space-x-3'>
                <div className='text-lime-300 text-[24px] hover:text-[#e3e3e3]'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='text-lime-300 text-[24px] hover:text-lime-800'>
                    <Link to='/about'>About</Link>
                </div>
                <div className='text-lime-300 text-[24px] hover:text-lime-800'>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Headeer
