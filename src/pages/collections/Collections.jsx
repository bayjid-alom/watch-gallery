import React, { Suspense, use } from 'react';
import WatchCard from '../../ui/WatchCard';
import Footer from '../../components/footer/Footer';

const watchesPromise = fetch("/watch-data.json").then(res => res.json());
const Collections = () => {
    const watches = use(watchesPromise);

    return (
        <>
            <section className='w-[94%] md:w-[92%] lg:w-[88%] mx-auto my-13'>


                {/* Section Heading */}
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                        All Collections
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
                        Explore our exclusive collection of premium watches, where timeless craftsmanship meets modern design and elegance.
                    </p>
                </div>




                <div className="all-watch-container grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        watches.map(watch => <WatchCard watch={watch}></WatchCard>)
                    }
                </div>


            </section>


            <Footer></Footer>

        </>
    );
};

export default Collections;