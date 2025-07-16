import React from 'react';
import bg_img from '../assets/bg_img.png';

const About = () => {
    return (
        <>
            <div
                style={{ backgroundImage: `url(${bg_img})` }}
                className="relative bg-cover bg-no-repeat bg-center bg-fixed"
                id='about'
            >
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content Layer */}
                <div className="relative z-10">
                    <div className="container mx-auto px-4 py-20 text-white text-center flex flex-col gap-8">
                        <h2 className="text-5xl font-bold">About</h2>
                        <p className="md:text-lg text-md text-justify md:text-center max-w-6xl mx-auto text-white/70">
                            "I’m a passionate web developer with a strong foundation in front-end technologies such as HTML, CSS, JavaScript, and React. I specialize in creating responsive, intuitive, and visually appealing user interfaces using frameworks like Tailwind CSS and Bootstrap. My experience with jQuery enables me to enhance interactivity and deliver seamless user experiences. On the back end, I work with PHP and Laravel, and possess a solid understanding of MySQL for managing data and building robust, scalable web applications. With a full-stack mindset, I aim to bridge design and functionality to deliver a complete"
                        </p>
                        <div className="text-center">
                            <button
                                className='text-xl bg-teal-700 hover:bg-teal-900 hover:shadow-xl px-8 py-3 shadow-md rounded-lg'
                            >Hire Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
