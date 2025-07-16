import React from 'react'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import { useNavigate } from 'react-router-dom'
import Project from './Layouts/Project'

const Work = () => {
    const navigate = useNavigate();
    const items = [
        { name: 'Veer', photo: photo1, link: `https://shmino.netlify.app/` },
        { name: 'SH_SHop', photo: photo2, link: `https://github.com/sabbirhossen44/sh_e_commerce_project` },
        { name: 'Api Project', photo: photo3, link: `https://github.com/sabbirhossen44/rest_api` },
    ]
    return (
        <>
            <div className="bg-[#1f1f1f] py-20" id='work'>
                <div className="container mx-auto">
                    <h2 className='text-center text-4xl font-bold'>My Work</h2>
                    <div className="mt-10">
                        <div className="grid xl:grid-cols-3 md:grid-cols-2 md:mx-0 mx-2 gap-10">
                            {
                                items.map((data, index) => (
                                    <Project
                                        data={data}
                                        index={index}
                                    />
                                ))
                            }



                        </div>
                        <div className="w-full text-center mt-10">
                            <button
                                onClick={()=>navigate('/portfolio')}
                             className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-5 text-xl">
                                <span className="w-56 h-48 rounded bg-lime-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">See All Work</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work