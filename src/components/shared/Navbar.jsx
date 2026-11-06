import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from "../../assets/images/watch-logo.avif"
import MyNavlink from './MyNavlink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/collections', name: 'Collections' },
        { path: '/listed-watches', name: 'Listed Watches' },
        { path: '/statistics', name: 'Statistics' }
    ];

    
    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm backdrop-blur-md">
            <nav className="relative mx-auto flex min-h-[68px] w-[94%] items-center justify-between gap-3 md:w-[92%] lg:w-[88%]">


                {/* Logo and Brand */}
                <a
                    href="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2"
                >
                    <img
                        className="h-9 w-9 rounded-md object-cover md:h-10 md:w-10"
                        src={logo}
                    />
                    <h2 className="text-base font-extrabold tracking-tight text-[#172554] md:text-lg">
                        Watch <span className="text-[#2563EB]">Gallery</span>
                    </h2>
                </a>



                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 md:flex lg:gap-7">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <MyNavlink to={link.path}>
                                {link.name}
                            </MyNavlink>
                        </li>
                    ))}
                </ul>


                {/* Explore Watches Button */}
                <a
                    href="https://www.cortinawatch.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#172554] hover:shadow-md md:inline-flex"
                >
                    Explore Watches
                    <ArrowUpRight size={16} />
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-lg p-2 text-[#1D4ED8] transition-colors hover:bg-blue-50 md:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-full w-full border-t border-blue-100 bg-white px-5 py-5 shadow-lg md:hidden">

                        <ul className="flex flex-col items-start gap-5">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <MyNavlink
                                        to={link.path}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </MyNavlink>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Explore Button */}
                        <a
                            href="https://www.cortinawatch.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1D4ED8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#172554]"
                        >
                            Explore Watches
                            <ArrowUpRight size={16} />
                        </a>

                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;