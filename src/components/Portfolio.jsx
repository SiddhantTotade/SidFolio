import React from 'react'
import Carousel from 'react-grid-carousel'
import amazonClone from '../assets/amazonClone.png'
import periodicTableGUI from '../assets/periodicTableGUI.png'
import videoChatting from '../assets/videoChatting.png'
import todoApplication from '../assets/todoApplication.png'
import portfolio_react from '../assets/portfolio_react.png'

export const Portfolio = () => {

    const breakPoints = [
        {
            breakpoint: 500,
        },
        {
            breakpoint: 700,
        }
    ]

    const breakPoint = [
        {
            breakpoint: 768,
            cols: 2,
            rows: 2,
            gap: 0,
            showDots: true,
            scrollSnap: true,
        },
        {
            breakpoint: 600,
            cols: 1,
            rows: 3,
            gap: 0,
            showDots: true,
            scrollSnap: true,
        }
    ]

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
        {
            id: 5,
            src: portfolio_react,
            code: `https://github.com/SiddhantTotade/my-portfolio-react`,
            demo: `https://aboutsid.netlify.app/`
        },
        // {
        //     id: 6,
        //     src: reactWeather
        // },
    ];

    return (
        <>
            <div name="portfolio" className='bg-white w-full text-gray-600 md:h-screen dark:bg-black transition-all'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className=''>
                        {/* <div class="sky" className='absolute border-2 left-96 -z-50'>
                            <div class="star" ></div>
                            <div class="star" ></div>
                            <div class="star" ></div>
                        </div> */}
                        <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500 dark:text-gray-500'>Portfolio</p>
                        <p className='pt-6 md:py-8 dark:text-gray-300'>Projects that I made from my learned skills.</p>
                    </div>
                    <div className='sm:px-0'>
                        <Carousel className='w-full m-5' mobileBreakpoint={breakPoints} responsiveLayout={breakPoint} cols={3} rows={2} gap={0} showDots={true} scrollSnap={true} hideArrow={false}>
                            {portfolios.map(({ id, src, demo, code }) => (
                                <Carousel.Item>
                                    <div key={id} className='m-5 shadow-md shadow-gray-600 rounded-lg'>
                                        <a href={src} target="_blank" rel="noreferrer">
                                            <img src={src} alt="" className='rounded-md hover:scale-110 duration-500' />
                                        </a>
                                        <div className='flex items-center justify-center'>
                                            <button onClick={() => window.open(demo)} className='w-1/2 px-6 m-4 md:py-3 duration-200 hover:scale-105 dark:text-gray-300 dark:hover:text-sky-500'>Demo</button>
                                            <button onClick={() => window.open(code)} className='w-1/2 px-6 m-4 md:py-3 duration-200 hover:scale-105 dark:text-gray-300 dark:hover:text-sky-500'>Code</button>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className='hidden dark:block dark:rotate-12 dark:w-2/5 dark:h-96 right-34 dark:absolute'>
                        {[...Array(10)].map((x, i) =>
                            <div class="star"></div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
