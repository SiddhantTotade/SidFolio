import React from 'react'

export const Contact = () => {

    const handleSubmit = (event) => {
        event.target.name.value = ""
        event.target.email.value = ""
        event.target.message.value = ""
    }

    return (
        <div name='contact' className='w-full h-screen bg-white p-4 text-gray-600 dark:bg-slate-700 transition-all'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600'>Contact</p>
                    <p className='py-8'>To make a conversation with me. Submit the below details and I'll contact you.</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} action="https://getform.io/f/4804e731-5f9e-4e3f-8b11-e2da49168e90" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input res required type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 border-gray-300 rounded-md text-black focus:outline-none' />
                        <input required type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 border-gray-300 rounded-md text-black focus:outline-none' />
                        <textarea required name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 border-gray-300 rounded-md text-black focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
