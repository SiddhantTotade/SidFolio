import React from 'react'

export const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-white text-gray-600 dark:bg-slate-700 transition-all'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mt-28'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-10 text-stone-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque nemo consequatur quidem ducimus! Quam non suscipit accusantium eligendi delectus praesentium similique tenetur quo facere ab cupiditate esse laborum assumenda beatae ad, quia id possimus? Officiis, possimus maiores distinctio ipsum libero, voluptatem dolorum quos provident fugiat sapiente, eos ullam et.
                </p>
                <br />
                <p className='text-xl text-stone-600'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque reiciendis laborum, amet doloribus laboriosam labore quae, pariatur commodi sint vitae mollitia illum quidem ratione voluptatem soluta, voluptas distinctio error nostrum dolorem corporis est asperiores officiis. Mollitia, est alias animi doloribus quam ad adipisci, sequi dolor, perspiciatis veniam nostrum cumque laboriosam.
                </p>
            </div>
        </div>
    )
}
