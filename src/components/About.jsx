import React from 'react'

export const About = () => {
    return (
        <>
            <div name="about" className='w-full h-screen bg-white text-gray-600 dark:bg-black transition-all'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className='mt-28'>
                        <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 dark:text-gray-500'>About</p>
                    </div>
                    <p className='pt-6 md:mt-10 text-sm text-stone-900 dark:text-gray-300 font-poppins'>
                        I'm a self taught full stack web developer from raipur chhattisgarh INDIA. I've done my schooling of class 10th from KENDRIYA VIDYALAYA No. - 1, Raipur and 12th from MAHARISHI VIDYA MANDIR, Raipur. Currently I'm pursuing B.Tech in Computer Science and Engineering from MATS University and also learning, mastering and lifting my steps towards web.
                    </p>
                    <br />
                    <p className=' text-sm text-stone-900 dark:text-gray-300 font-poppins'>
                        I'm creative and have enthusiastic personality that keen me and helps me to learn about new technologies. I've learned most of my skills from internet and I know where to find good stuffs. I know frontend and backend and used my skills to create intermidiary stuffs on it. I love to work on new ideas and projects and also love to know about people and their profession that helps me to develop different outlooks. Apart from this, I also love to play football and I'm a BEATBOXER.
                    </p>
                </div>
            </div>
        </>
    )
}
