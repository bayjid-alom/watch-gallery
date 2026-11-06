import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock } from 'lucide-react';

const Banner = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0B1736] mb-18 md:mb-24 lg:mb-28">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1762708052123-7332966eaecb?auto=format&fit=crop&fm=jpg&q=85&w=2000"
                    alt="Luxury Blue Watch"
                    className="h-full w-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1736] via-[#0B1736]/90 to-[#0B1736]/30"></div>
            </div>

            {/* Banner Content */}
            <div className="relative z-10 mx-auto flex min-h-[100svh] max-h-[100svh] w-[94%] items-center py-16 md:min-h-[570px] md:max-h-none md:w-[92%] lg:min-h-screen lg:w-[88%]">

                <div className="max-w-2xl">

                    {/* Small Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                        <Clock size={16} />
                        TIMELESS ELEGANCE
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        Every Second
                        <br />
                        <span className="text-blue-400">
                            Tells a Story.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-lg text-sm leading-7 text-gray-300 md:text-base md:leading-8">
                        Discover exceptional timepieces that combine timeless
                        craftsmanship, modern design, and unmatched elegance.
                        Find the perfect watch that reflects your personality.
                    </p>

                    {/* Button */}
                    <div className="mt-9">
                        <Link
                            to="/collections"
                            className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-colors duration-300 hover:bg-blue-500 md:px-8 md:text-base"
                        >
                            Explore Collection
                            <ArrowRight size={19} />
                        </Link>
                    </div>

                    {/* Bottom Text */}
                    <p className="mt-8 text-xs font-medium tracking-[3px] text-blue-200/70">
                        DISCOVER YOUR PERFECT TIMEPIECE
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Banner;