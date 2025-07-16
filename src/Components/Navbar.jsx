
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const navLinks = [
        { label: 'Home', href: '#home', link: '/', active: true },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Skills', href: '#skills' },
        { label: 'Work', href: '#work' },
    ];

    return (
        <nav className="w-full fixed top-0 z-50 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to='/'><span className="bg-white flex text-black px-2 py-1 rounded-md"><FaCode className='text-3xl' /></span></Link>
                    {/* <span className="bg-white text-black flex px-2 py-1 rounded-md"><FaCode /></span> */}
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-4 bg-white/10 text-sm px-4 py-3 rounded-2xl backdrop-blur-lg ring-1 ring-white/5">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`px-3 py-2 rounded-xl text-lg cursor-pointer font-medium transition-colors hover:bg-white hover:text-black ${activeLink === link.href
                                    ? 'bg-white text-black'
                                    : 'text-white/70 hover:text-black'
                                    }`}
                            >
                                {link.label}
                            </a>

                        </li>
                    ))}
                </ul>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <span>
                        <Link
                            to="/contact"
                            className="bg-white text-black px-4 py-2.5 text-lg rounded-xl hover:bg-zinc-100 transition"
                        >
                            Contact Me
                        </Link>
                    </span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 bg-zinc-800 border-t border-white/10">
                    <ul className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    onClick={() => { setActiveLink(link.href), setMenuOpen(false) }}
                                    className={`block px-4 py-2 rounded-md text-sm transition-colors ${activeLink === link.href
                                        ? 'bg-white text-black'
                                        : 'text-white/70 hover:text-white'
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li>

                            <Link
                                to="/contact"
                                className="block mt-2 px-4 py-3 text-center bg-white text-black rounded-md text-sm hover:bg-zinc-100 transition"
                            >
                                <span>Contact Me</span>
                            </Link>

                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
