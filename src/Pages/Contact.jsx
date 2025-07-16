import React from 'react'
import Footer from '../Components/Footer'
import HeaderC from '../Components/HeaderC'
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { TbPhoneCall } from "react-icons/tb";
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    return (
        <>
            <HeaderC />
            <div className="pt-24 pb-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 max-w-6xl md:mx-auto mx-4 py-14 gap-10 md:gap-10 xl:10">
                        <div className="border shadow-md rounded-lg py-5 px-5 text-center hover:shadow-xl">
                            <div className="w-full flex flex-col gap-5">
                                <SlLocationPin className='text-center w-full font-semibold text-5xl' />
                                <h2 className='text-3xl font-semibold'>Address</h2>
                                <p className='text-white/80 text-balance'>Dhaka Khilkhet, Dhaka</p>
                            </div>
                        </div>
                        <div className="border shadow-md rounded-lg py-5 px-5 text-center hover:shadow-xl">
                            <div className="w-full flex flex-col gap-5">
                                <TfiEmail className='text-center w-full font-semibold text-5xl' />
                                <h2 className='text-3xl font-semibold'>Email</h2>
                                <div className="">
                                    <p className='text-white/80 text-balance'>
                                        <a href="mailto:sh3235662@gmail.com" className="">
                                            sh3235662@gmail.com
                                        </a>
                                    </p>
                                    <p className='text-white/80 text-balance'>
                                        <a href="mailto:sabbir114@gmail.com" className="">
                                            sabbir114@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border shadow-md rounded-lg py-5 px-5 text-center hover:shadow-xl">
                            <div className="w-full flex flex-col gap-5">
                                <TbPhoneCall className='text-center w-full font-semibold text-5xl' />
                                <h2 className='text-3xl font-semibold'>Call Now</h2>
                                <div className="">
                                    <p className='text-white/80 text-balance'>
                                        <a href="tel:+8801408411241" className="hover:underline">+880 14084 11241</a>
                                    </p>
                                    <p className='text-white/80 text-balance'>
                                        <a href="tel:+8801519602124" className="hover:underline">+880 15196 02124</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1f1f1f]">
                <div className="py-12">
                    <div className="container mx-auto">
                        <ContactForm/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact