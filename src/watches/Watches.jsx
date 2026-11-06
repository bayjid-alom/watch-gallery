import React, { use } from 'react';
import WatchCard from '../ui/WatchCard';

const watchesPromise = fetch("/watch-data.json").then(res => res.json());

const Watches = () => {
    const watches = use(watchesPromise);

    return (
        <section className="w-[94%] md:w-[92%] lg:w-[88%] mx-auto mb-16 md:mb-24 lg:mb-30">

            {/* Section Heading */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                    Our Collections
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                    Explore our exclusive collection of premium timepieces,
                    where timeless craftsmanship meets modern elegance.
                </p>
            </div>

            {/* Watch Cards Container */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {watches.map(watch => (
                    <WatchCard
                        key={watch.watchId}
                        watch={watch}
                    />
                ))}
            </div>

        </section>
    );
};

export default Watches;