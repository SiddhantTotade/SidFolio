import React from 'react'
import Carousel from 'react-grid-carousel'
import airForce from '../assets/airForce.jpg'
import pythonBasic from '../assets/pythonBasic.jpg'
import reactClone from '../assets/reactClone.jpg'
import loweParticipation from '../assets/loweParticipation.jpg'
import cloudNativeApp from '../assets/cloudNativeApp.jpg'
import developCloudApp from '../assets/developCloudApp.jpg'
import cloudIntroduction from '../assets/cloudIntroduction.jpg'
import javaCertificate from '../assets/javaCertificate.jpg'
import aiCertificate from '../assets/aiCertificate.jpg'


export const AchievementsAndCertificates = () => {

    const breakP = [
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
            gap: 10,
            showDots: true,
            scrollSnap: true,
        },
        {
            breakpoint: 600,
            cols: 1,
            rows: 3,
            gap: 10,
            showDots: true,
            scrollSnap: true,
        }
    ]

    const techs = [
        {
            id: 1,
            source: javaCertificate,
            title: "Java - NPTEL",
            style: "shadow-gray-500"
        },
        {
            id: 2,
            source: cloudIntroduction,
            title: "Cloud Introduction - IBM",
            style: "shadow-gray-500"
        },
        {
            id: 3,
            source: cloudNativeApp,
            title: "Cloude Native Application - IBM",
            style: "shadow-gray-500"
        },
        {
            id: 4,
            source: pythonBasic,
            title: "Python Basics - IBM",
            style: "shadow-gray-500"
        },
        {
            id: 5,
            source: developCloudApp,
            title: "Develop Cloud Application - IBM",
            style: "shadow-gray-500"
        },
        {
            id: 6,
            source: aiCertificate,
            title: "Artificial Intelligence Basics - IBM",
            style: "shadow-gray-500"
        },
        {
            id: 7,
            source: loweParticipation,
            title: "Lowe's Paticipation",
            style: "shadow-gray-500"
        },
        {
            id: 8,
            source: reactClone,
            title: "React Clone - Accio Job",
            style: "shadow-gray-500"
        },
        {
            id: 9,
            source: airForce,
            title: "Air Force Quiz",
            style: "shadow-gray-500"
        },
    ]

    return (
        <div name='certificates' className='bg-white w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-600'>
                <div className=''>
                    <p className='text-4xl font-bold border-b-4 border-gray-600 p-2 inline'>Certificates</p>
                    <p className='py-8'>These are my achievements and certificates that I earned till the date.</p>
                </div>
                <div className='block text-center py-8 px-12 sm:px-0'>
                    <Carousel mobileBreakpoint={breakP} responsiveLayout={breakPoint} cols={3} rows={3} gap={10} showDots={true} scrollSnap={true} hideArrow={false}>
                        {
                            techs.map(({ id, source, title, style }) => (
                                <Carousel.Item>
                                    <a href={source} target="_blank" rel="noreferrer">
                                        <div key={id} className={`m-5 shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                            <img src={source} alt="" className='w-20 mx-auto h-20' />
                                            <p className='mt-4'>{title}</p>
                                        </div>
                                    </a>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
