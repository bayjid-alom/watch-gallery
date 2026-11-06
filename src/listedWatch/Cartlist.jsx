
import React, { useContext } from 'react';
import { Link, Links } from 'react-router';
import { WatchContext } from '../context/WatchProvider';
import {
    Star,
    Watch,
    ArrowRight,
    Clock,
    ShoppingBag
} from 'lucide-react';

const Cartlist = () => {

    const { cart } = useContext(WatchContext);

    return (
        <div className="mb-10 mx-auto py-8">

            {/* Empty Message */}
            {
                cart.length === 0 && (
                    <div className="flex flex-col items-center justify-center text-center bg-[#F8F8F6] border border-gray-200 rounded-2xl py-16 md:py-20">

                        <Watch size={44} className="text-[#B89B5E] mb-4" />

                        <h2 className="text-xl md:text-2xl font-bold font-serif text-[#0B1736]">
                            Your Watch Collection Is Empty!
                        </h2>

                        <p className="text-sm text-gray-500 max-w-md mt-3 leading-6">
                            You haven't added any watches to your cart yet.
                            Explore our exclusive collection and discover
                            a timepiece that matches your style.
                        </p>

                        <Link
                            to="/collections"
                            className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1736] hover:bg-[#16294F] text-white text-sm font-semibold transition-colors"
                        >
                            Explore Collection
                            <ArrowRight size={16} />
                        </Link>

                    </div>
                )
            }






            {/* Cart Watch Cards */}
            <div className="space-y-4">

                {
                    cart.map(watch => (

                        <div
                            key={watch.watchId}
                            className="flex flex-col sm:flex-row gap-4 md:gap-5 border border-gray-200 rounded-xl p-3 md:p-3.5 hover:shadow-sm transition-shadow"
                        >

                            {/* Watch Image */}
                            <div className="w-full aspect-square sm:w-36 sm:h-36 lg:w-44 lg:h-44 shrink-0 flex items-center justify-center bg-[#F5F5F2] rounded-xl p-3 md:p-4">

                                <img
                                    src={watch.image}
                                    alt={watch.watchName}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                            </div>

                            {/* Watch Information */}
                            <div className="flex-1 min-w-0 flex flex-col">

                                {/* Watch Name and Brand */}
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold font-serif text-[#0B1736]">
                                        {watch.watchName}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        By {watch.brand}
                                    </p>
                                </div>

                                {/* Watch Category and Type */}
                                <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-3">

                                    <span className="text-sm font-bold text-gray-900">
                                        Details
                                    </span>

                                    <span className="bg-[#F7F3E9] text-[#9B7B3D] text-xs font-medium px-3 py-1 rounded-full">
                                        {watch.category}
                                    </span>

                                    <span className="flex items-center gap-1.5 text-xs text-gray-600">
                                        <Watch size={14} />
                                        {watch.watchType}
                                    </span>

                                </div>

                                {/* Watch Specifications */}
                                <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-gray-500">

                                    <div className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        <span>{watch.movement}</span>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <Watch size={14} />
                                        <span>{watch.material}</span>
                                    </div>

                                </div>

                                <div className="border-t border-gray-200 mt-3 mb-2.5" />

                                {/* Rating, Price and Stock */}
                                <div className="flex flex-wrap items-center gap-2">

                                    <span className="flex items-center gap-1 bg-orange-50 text-orange-500 text-xs px-3 py-1.5 rounded-full">
                                        <Star size={13} fill="currentColor" />
                                        {watch.ratingAvg}
                                    </span>

                                    <span className="bg-[#F7F3E9] text-[#9B7B3D] text-xs font-semibold px-3 py-1.5 rounded-full">
                                        ৳{watch.price.toLocaleString()}
                                    </span>

                                    <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                                        Stock: {watch.stock}
                                    </span>

                                    <span className="bg-blue-50 text-blue-500 text-xs px-3 py-1.5 rounded-full">
                                        {watch.reviews} Reviews
                                    </span>


                                    <Link
                                        to={`/watch-details/${watch.watchId}`}
                                        className="bg-blue-50 text-blue-500 text-xs px-3 py-1.5 rounded-full">
                                        View details
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default Cartlist;
