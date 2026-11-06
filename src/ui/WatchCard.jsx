import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const WatchCard = ({ watch }) => {

    const { watchId, watchName, brand, image, description, price, ratingAvg, category } = watch;

    return (
        <Link
            to={`/watch-details/${watchId}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >

            {/* Watch Image */}
            <div className="h-56 w-full overflow-hidden bg-[#F1F5F9] md:h-48">
                <img
                    src={image}
                    alt={watchName}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Watch Information */}
            <div className="p-4">

                {/* Category and Brand */}
                <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                        {category}
                    </span>

                    <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                        {brand}
                    </span>
                </div>

                {/* Watch Name */}
                <div className="mt-3">
                    <h3 className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-700">
                        {watchName}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500">
                        {description}
                    </p>
                </div>

                {/* Dashed Divider */}
                <div className="my-4 border-t border-dashed border-gray-300" />

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-blue-700">
                        ৳{price.toLocaleString()}
                    </span>

                    <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-gray-700">
                            {ratingAvg}
                        </span>

                        <FaRegStar className="text-sm text-amber-500" />
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default WatchCard;