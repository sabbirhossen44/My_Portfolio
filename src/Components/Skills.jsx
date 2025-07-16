import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.webp'
import bootstrap  from '../assets/bootstrap.png'
import Tailwind_CSS  from '../assets/Tailwind_CSS.webp'
import javascript  from '../assets/javascript.webp'
import react  from '../assets/react.svg'
import php  from '../assets/PHP.webp'
import Laravel  from '../assets/Laravel.webp'
import mysql  from '../assets/mysql.webp'

const Skills = () => {
  const items = [
    {name : 'HTML' ,  img: html},
    {name : 'CSS' ,  img: css},
    {name : 'Bootstrap' ,  img: bootstrap},
    {name : 'Tailwind CSS' ,  img: Tailwind_CSS},
    {name : 'Javascript' ,  img: javascript},
    {name : 'React' ,  img: react},
    {name : 'PHP' ,  img: php},
    {name : 'Laravel' ,  img: Laravel},
    {name : 'MySql' ,  img: mysql},
  ]
  return (
    <>
      <div className="py-20" id='skills'>
        <div className="container mx-auto">
          <h2 className='text-center text-4xl font-bold'>My Skills</h2>
          <div className="mt-10">
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-2 md:mx-0 gap-5">
              {
                items.map((data, index) => (
                  <div key={index} className="text-center w-full bg-black shadow-md p-5 text-white/70 hover:text-white rounded-lg hover:border hover:border-white/40 cursor-pointer hover:shadow-xl">
                    <div className="w-full flex justify-center mb-3">
                      <img src={data.img} alt="" className='w-20 h-20' />
                    </div>
                    <p className='text-xl font-bold '>{data.name}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills