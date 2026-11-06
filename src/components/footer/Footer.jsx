import React from 'react';
import { Link } from 'react-router';
import footerLogo from "../../assets/images/watch-logo.avif";
import {
    FaExternalLinkAlt,
    FaFacebookF,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';

const Footer = () => {
    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/listed-watches', name: 'Listed Watches' },
        { path: '/statistics', name: 'Statistics' },
        { path: '/collections', name: 'Collections' }
    ];

    return (
        <footer className="w-full bg-[#0B1736] text-white">
            <div className="mx-auto w-[94%] py-14 text-center md:w-[92%] md:py-16 md:text-left lg:w-[88%]">

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

                    {/* Brand Information */}
                    <div className="flex flex-col items-center md:items-start">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <img
                                src={footerLogo}
                                alt="Watch Gallery Logo"
                                className="h-10 w-10 rounded-lg object-contain"
                            />
                            <h2 className="text-xl font-extrabold tracking-tight">
                                Watch <span className="text-blue-400">Gallery</span>
                            </h2>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Discover timeless elegance and exceptional craftsmanship
                            with our exclusive collection of premium timepieces.
                            Find a watch that perfectly matches your style.
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3 md:justify-start">
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaFacebookF size={15} />
                            </a>

                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaInstagram size={17} />
                            </a>

                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                            >
                                <FaTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Hidden on Mobile */}
                    <div className="hidden text-center sm:block md:text-left">
                        <h3 className="mb-5 text-base font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="flex flex-col items-center gap-4 md:items-start">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-400 transition-colors duration-300 hover:text-blue-400"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Discover More */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h3 className="mb-5 text-base font-bold text-white">
                            Discover More
                        </h3>

                        <p className="mb-5 max-w-xs text-sm leading-7 text-gray-400">
                            Explore the world of premium watches and discover
                            exceptional timepieces from renowned collections.
                        </p>

                        <a
                            href="https://www.cortinawatch.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-500"
                        >
                            Explore Watches
                            <FaExternalLinkAlt size={13} />
                        </a>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-10 border-t border-white/10"></div>

                {/* Copyright */}
                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <p className="text-xs leading-6 text-gray-400 md:text-sm">
                        © {new Date().getFullYear()} Watch Gallery. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-400 md:text-sm">
                        Designed & Developed by{' '}
                        <span className="font-semibold text-blue-400">
                            Bayjid Alom
                        </span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;