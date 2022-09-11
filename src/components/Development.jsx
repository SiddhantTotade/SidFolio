import React from 'react'
// import Carousel from 'react-elastic-carousel'
import Carousel from 'react-grid-carousel'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import cProg from '../assets/cProg.png'
import cPP from '../assets/cpp.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import jQuery from '../assets/jquery.png'
import bootStrap from '../assets/bootstrap.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import django from '../assets/django.png'

export const Development = () => {

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

    const techs = [
        {
            id: 1,
            source: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            source: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            source: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
            point: "stop"
        },
        {
            id: 4,
            source: reactImage,
            title: "React",
            style: "shadow-sky-400"
        },
        {
            id: 5,
            source: tailwind,
            title: "Tailwind",
            style: "shadow-sky-700"
        },
        {
            id: 6,
            source: github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
        {
            id: 7,
            source: django,
            title: "Django",
            style: "shadow-emerald-900"
        },
        {
            id: 8,
            source: bootStrap,
            title: "Bootstrap",
            style: "shadow-purple-900"
        },
        {
            id: 9,
            source: jQuery,
            title: "JQuery",
            style: "shadow-sky-800"
        },
        {
            id: 10,
            source: cProg,
            title: "C Programming",
            style: "shadow-indigo-800"
        },
        {
            id: 11,
            source: cPP,
            title: "C++",
            style: "shadow-sky-800"
        },
        {
            id: 12,
            source: java,
            title: "Java",
            style: "shadow-red-500"
        },
        {
            id: 13,
            source: python,
            title: "Python",
            style: "shadow-yellow-400"
        },
    ]

    return (
        <>
            <div name='development' className='bg-white w-full h-screen text-gray-600 dark:bg-black transition-all'>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
                    <div className=''>
                        <p className='text-3xl md:text-4xl font-bold border-b-4 border-gray-600 dark:text-gray-500 p-2 inline'>Development</p>
                        <p className='pt-6 md:py-8 dark:text-gray-300'>Technologies that I learned and use for development.</p>
                    </div>
                    <div className='text-center md:px-0'>
                        <Carousel mobileBreakpoint={breakPoints} responsiveLayout={breakPoint} cols={3} rows={3} gap={0} showDots={true} scrollSnap={true} hideArrow={false}>
                            {
                                techs.map(({ id, source, title, style }) => (
                                    <Carousel.Item>
                                        <div key={id} className={`m-5 shadow-md hover:scale-110 duration-500 rounded-lg ${style}`}>
                                            <img src={source} alt="" className='w-20 mx-auto' />
                                            <p className='mt-2 md:mt-4 dark:text-gray-300'>{title}</p>
                                        </div>
                                    </Carousel.Item>
                                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}
