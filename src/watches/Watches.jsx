import React, { use } from 'react';
import WatchCard from '../ui/WatchCard';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const watchesPromise = fetch("/watch-data.json").then(res => res.json());

const Watches = () => {
    const watches = use(watchesPromise);

    return (
        <section className="w-[94%] md:w-[92%] lg:w-[88%] mx-auto mb-16 md:mb-24 lg:mb-30">

            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Discover Our Timepieces
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                    Explore our exclusive collection of premium timepieces,
                    where timeless craftsmanship meets modern elegance.
                </p>
            </div>

            {/* Watch Cards Container */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {watches.slice(0, 8).map(watch => (
                    <WatchCard
                        key={watch.watchId}
                        watch={watch}
                    />
                ))}
            </div>


            {/* View All Button */}
            <div className="flex justify-center mt-12">
                <Link
                    to="/collections"
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B1736] via-[#253B60] to-[#C9A45C] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                    View All Watches
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </div>

        </section>
    );
};

export default Watches;