import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'

export const Home = () => {
    return (
        <>
            <div name="home" className='h-screen max-w-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 dark:bg-black transition-all'>
                {/* <div className='hidden dark:block' >
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div> */}
                <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
                    <div className='mt-48 md:mt-0 sm:mt-80' >
                        <img src={HeroImage} alt="my profile pic" className='rounded-2xl mx-auto w-2/3 sm:w-80 md:w-2/3' />
                    </div>
                    <div className='flex flex-col justify-center h-full w-11/12 md:mr-4'>
                        <p className='text-sm tracking-[.3em] md:tracking-remfour font-magic dark:text-sky-500 text-cyan-700 uppercase py-3 pt-10 md:py-2'>all the magic happens here.</p>
                        <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'>I'm a Full Stack Web Developer</h2>
                        <p className='text-stone-900 dark:text-gray-300 py-4 max-w-md font-poppins'>
                            Hiii...I'm SIDDHANT TOTADE. I'm a coder and a full stack web developer. I love to learn new technologies and create web applications.
                            <div className='hidden dark:block dark:rotate-12 dark:w-1/5 dark:md:w-1 border-2 border-red-600 dark:h-96 dark:top-80 dark:absolute'>
                                {[...Array(5)].map((x, i) =>
                                    <div class="star"></div>
                                )}
                            </div>
                        </p>
                        <div>
                            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md hover:scale-110 duration-500 dark:bg-sky-500 bg-cyan-700 cursor-pointer'>
                                Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
