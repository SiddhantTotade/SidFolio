import React, { useState } from 'react'
import Toggle from './Toggle';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function NavBar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'portfolio',
        },
        {
            id: 4,
            link: 'development',
        },
        {
            id: 5,
            link: 'certificates',
        },
        {
            id: 6,
            link: 'contact',
        },
    ]

    return (
        <div className='flex justify-between items-center w-full px-4 h-20 z-50 text-white dark:text-gray-300 border-b border-black dark:border-b-gray-700 dark:bg-transparent opacity-100 backdrop-blur-md transition-all bg-cyan-700 fixed'>
            <div>
                <h1 className='text-4xl font-signature ml-2'>Siddhant Totade</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white dark:text-gray-300 hover:scale-105 duration-200 dark:hover:text-sky-500'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))}
                <div className='absolute right-10 top-28 border-2 rounded-lg border-sky-500 p-3 cursor-pointer'>
                    <Toggle />
                </div>
            </ul>

            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden transition-all ease-in duration-500'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar