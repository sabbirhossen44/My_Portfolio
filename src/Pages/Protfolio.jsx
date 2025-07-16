import React, { useState } from 'react'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'
import photo4 from '../assets/photo4.jpg'
import photo5 from '../assets/photo5.jpg'
import photo6 from '../assets/photo6.jpg'
import photo7 from '../assets/photo7.jpg'
import photo8 from '../assets/photo8.jpg'
// import { useNavigate } from 'react-router-dom'
import Project from '../Components/Layouts/Project'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Protfolio = () => {
    // const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'PSD to Html','Figma to Html', 'React', 'Laravel'];

    const items = [
        { name: 'Veer', photo: photo1, link: `https://shmino.netlify.app/` ,category: 'Figma to Html',},
        { name: 'SH_SHop', photo: photo2, link: `https://github.com/sabbirhossen44/sh_e_commerce_project` , category: 'Laravel',},
        { name: 'Api Project', photo: photo3, link: `https://github.com/sabbirhossen44/rest_api` , category: ['Laravel', 'React'] },
        { name: 'View', photo: photo4, link: `https://sabbirhossen44.github.io/UYLabPsd_Html2-1/` , category: ['PSD to Html'] },
        { name: 'Aspire', photo: photo5, link: `https://sabbirhossen44.github.io/figma_to_html_project_aspire/` , category: ['Figma to Html'] },
        { name: 'C-Point', photo: photo6, link: `https://sabbirhossen44.github.io/phd_to_html_project_C-Point/` , category: ['PSD to Html'] },
        { name: 'Dreams', photo: photo7, link: `https://sabbirhossen44.github.io/PSD_Project_-Dreams/` , category: ['PSD to Html'] },
        { name: 'Petroli', photo: photo8, link: `https://petroli.netlify.app/` , category: ['React'] },
    ]


    const filteredProjects = selectedCategory === 'All'
        ? items
        :  items.filter(item => item.category.includes(selectedCategory));
    return (
        <>
            <Header/>
            <div className="bg-[#1f1f1f] py-20 mt-10" id='portfolio'>
                <div className="container mx-auto">
                    <h2 className='text-center text-4xl font-bold'>Portfolio</h2>
                    <div className="mt-10">
                        <div className="flex justify-center flex-wrap gap-4 mb-10">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded bg-lime-700 hover:bg-lime-600 transition ${selectedCategory === cat ? 'bg-lime-500' : ''
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="grid xl:grid-cols-3 md:grid-cols-2 md:mx-0 mx-2 gap-10">
                            {
                                filteredProjects.map((data, index) => (
                                    <Project
                                        data={data}
                                        index={index}
                                    />
                                ))
                            }



                        </div>
                        {/* <div className="w-full text-center mt-10">
                            <button
                                onClick={() => navigate('/portfolio')}
                                className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-3 px-5 text-xl">
                                <span className="w-56 h-48 rounded bg-lime-700 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">See All Work</span>
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Protfolio