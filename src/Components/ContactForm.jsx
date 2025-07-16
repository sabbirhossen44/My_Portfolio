import React from 'react'


const ContactForm = () => {

    return (
        <>
            <div className="xl:mx-0 md:mx-2 mx-3">
                <h2 className='text-center text-4xl font-bold text-white'>Contact Me</h2>
                <form
                    action="https://getform.io/f/allzkzda" method="POST"
                    className="max-w-4xl mx-auto mt-10 bg-white md:p-10 p-5 md:py-10 py-8 rounded-lg shadow-md">
                    <div className="mb-5">
                        <label className="block text-black text-xl font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline text-xl"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline text-xl"
                            placeholder="Your Email"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="shadow appearance-none border rounded w-full py-3 px-4 text-black leading-tight focus:outline-none focus:shadow-outline text-xl"
                            placeholder="Your Message"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-5 rounded focus:outline-none focus:shadow-outline text-xl transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm