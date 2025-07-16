import React from 'react'
import design from '../assets/webdesigns.jpg'
import react from '../assets/react.png'
import backend from '../assets/backend.jpg'

const Services = () => {
    return (
        <>
            <div className="bg-[#1f1f1f]" id='services'>
                <div className="container mx-auto">
                    <div className="py-20">
                        <h2 className='text-center text-4xl font-bold'>My Services</h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 pt-16 md:gap-8 gap-5 md:mx-0 mx-3 text-center">
                            <div className="w-full bg-zinc-900 p-6 shadow-lg border border-white/20 rounded-lg flex flex-col gap-5 cursor-pointer hover:shadow-xl hover:border-2">
                                <div className="w-full text-center">
                                    <img src={design} alt="" className='w-24 h-24 object-cover text-center inline-block' />
                                </div>
                                <h2 className='text-2xl'>Web Design</h2>
                                <p className='text-md text-white/60 text-justify'>"Transform your vision into a stunning, responsive website with my expertise in HTML, CSS, and JavaScript. I specialize in leveraging Bootstrap and jQuery plugins to build dynamic, user-friendly interfaces that perform flawlessly across all devices."</p>
                            </div>

                            <div className="w-full bg-zinc-900 p-6 shadow-lg border border-white/20 rounded-lg flex flex-col gap-5 cursor-pointer hover:shadow-xl hover:border-2">
                                <div className="w-full text-center">
                                    <img src={react} alt="" className='w-24 h-24 object-cover text-center inline-block' />
                                </div>
                                <h2 className='text-2xl'>Frontend Development</h2>
                                <p className='text-md text-white/60 text-justify'>"Build powerful and scalable web applications with my Full Stack React Development expertise. I utilize modern technologies like robust backend integration and Context API for efficient state management, ensuring smooth, responsive, and high-performing user experiences across platforms."</p>
                            </div>

                            <div className="w-full bg-zinc-900 p-6 shadow-lg border border-white/20 rounded-lg flex flex-col gap-5 cursor-pointer hover:shadow-xl hover:border-2">
                                <div className="w-full text-center">
                                    <img src={backend} alt="" className='w-24 h-24 object-cover text-center inline-block' />
                                </div>
                                <h2 className='text-2xl'>Backend Development</h2>
                                <p className='text-md text-white/60 text-justify'>"I specialize in developing robust, secure, and scalable backend systems using PHP and the Laravel framework. From building RESTful APIs to handling complex database operations with MySQL, I ensure efficient data management and smooth server-side performance. My focus is on creating clean, maintainable code that supports fast, reliable, and secure web applications."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services