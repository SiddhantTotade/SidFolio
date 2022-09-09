import React from 'react'
// import Carousel from 'react-elastic-carousel'
import Carousel from 'react-grid-carousel'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import cProg from '../assets/cProg.png'
import jQuery from '../assets/jquery.png'
import bootStrap from '../assets/bootstrap.png'
import github from '../assets/github.png'
import whiteGit from '../assets/whiteGit.png'
import tailwind from '../assets/tailwind.png'
import django from '../assets/django.png'

export const Experience = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
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
            style: "shadow-blue-600"
        },
        {
            id: 5,
            source: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            source: whiteGit,
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
            style: "shadow-emerald-900"
        },
        {
            id: 9,
            source: jQuery,
            title: "JQuery",
            style: "shadow-emerald-900"
        },
        {
            id: 10,
            source: cProg,
            title: "C Programming",
            style: "shadow-emerald-900"
        },
    ]

    return (
        <div name='experience' className='bg-white w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-600'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-600 p-2 inline'>Experience</p>
                    <p className='py-6'></p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    <Carousel cols={2} rows={2} gap={10}>
                        {
                            techs.map(({ id, source, title, style }) => (
                                <Carousel.Item>
                                    <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                        <img src={source} alt="" className='w-20 mx-auto' />
                                        <p className='mt-4'>{title}</p>
                                    </div>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
