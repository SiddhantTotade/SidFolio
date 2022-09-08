import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <div name="home" className='h-screen w-full'>
            <div className='max-w-screen-md mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-gray-200'>I'm a Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus aliquid cumque illum impedit voluptatum expedita nemo non, atque quae aut, perspiciatis corrupti, ratione dicta sunt. Reiciendis necessitatibus tempora accusamus commodi officia vel veritatis dicta, maiores assumenda nulla aliquam voluptatem laborum nostrum explicabo aperiam illo debitis. Eius numquam fugiat natus commodi.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                        </Link>
                    </div>
                </div>
                <div className='px-12'>
                    <img src={HeroImage} alt="my profile pic" className='rounded-2xl mx-auto w-2/3 md:w-150' />
                </div>
            </div>
        </div>
    )
}
