import React from 'react';
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram ,FaWhatsapp  } from 'react-icons/fa';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <>
            <div className="container mx-auto" id='home'>
                <section className="min-h-screen bg-zinc-900 text-white flex items-center px-4 md:px-16">
                    <div className="w-full grid grid-cols-1 md:grid-cols-[20%,40%,40%]  gap-8 items-center">
                        
                        <div className="flex md:flex-col gap-4 justify-center items-center md:items-start order-3 md:order-1">
                            {[
                                { icon: <FaFacebookF />, href: `https://www.facebook.com/sabbir.hossen.261584` },
                                { icon: <FaGithub />, href: `https://github.com/sabbirhossen44` },
                                { icon: <FaWhatsapp  />, href: `https://wa.me/8801408411241` },
                                // { icon: <FaTwitter />, href: '#' },
                                { icon: <FaInstagram />, href: '#' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target='_blank'
                                    className="w-10 h-10 bg-teal-700 text-white flex justify-center items-center border border-white/20 hover:bg-lime-600 transition rounded-sm"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        
                        <div className="text-center md:text-left space-y-4 order-2">
                            <h1 className="text-3xl md:text-5xl font-semibold text-center">
                                Hi, I am <span className="text-teal-400 font-bold">Sabbir Hossen</span>
                            </h1>
                            <p className="text-gray-400 text-xl text-center">I specialize in Web Design & Web Development.</p>
                            <div className="text-center">
                                <a
                                    href="#"
                                    className="inline-block bg-teal-700 text-white font-medium px-6 py-3 rounded-full hover:bg-lime-600 transition"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        
                        <div className="flex justify-center md:justify-center order-1 md:order-3">
                            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-teal-600 overflow-hidden">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Hero