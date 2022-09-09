import React from 'react'
import amazonClone from '../assets/amazonClone.png'
import periodicTableGUI from '../assets/periodicTableGUI.png'
import videoChatting from '../assets/videoChatting.png'
import todoApplication from '../assets/todoApplication.png'

export const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: amazonClone,
            code: `https://github.com/SiddhantTotade/amazon_clone`,
            demo: `https://amazon-clone-1994.herokuapp.com/`
        },
        {
            id: 2,
            src: periodicTableGUI,
            code: `https://github.com/SiddhantTotade/Periodic-Table-Java-GUI`,
            demo: `https://github.com/SiddhantTotade/Periodic-Table-Java-GUI`

        },
        {
            id: 3,
            src: videoChatting,
            code: `https://github.com/SiddhantTotade/video_chat_app_deploy`,
            demo: `https://pyvid.herokuapp.com/`
        },
        {
            id: 4,
            src: todoApplication,
            code: `https://github.com/SiddhantTotade/todo_list`,
            demo: `https://my-work-list.herokuapp.com/`
        },
        // {
        //     id: 5,
        //     src: reactSmooth
        // },
        // {
        //     id: 6,
        //     src: reactWeather
        // },
    ];

    return (
        <div name="portfolio" className='bg-white w-full text-gray-600 md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                </div>
                <div className='py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md hover:scale-110 duration-500' />
                            <div className='flex items-center justify-center'>
                                <button onClick={() => window.open(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button onClick={() => window.open(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
