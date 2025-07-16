import React from 'react'

const Project = ({data , index}) => {
    return (
        <>
            <div key={index} className="relative w-full h-96  overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                {/* Background Image */}
                <img
                    src={data.photo}
                    alt="Portfolio"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <a href={data.link} target='_blank'>
                    <div className="absolute w-[90%] h-[90%] m-auto inset-0 bg-black/50 bg-opacity-90 flex items-center justify-center 
                                            opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out origin-center rounded-lg">
                        <div className="text-center text-white ">
                            <h2 className="text-xl font-bold border-b">
                                {data.name}
                            </h2>
                            {/* <hr className="mt-2 border-t-2 border-white w-10 mx-auto" /> */}
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Project