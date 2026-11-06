import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaRegStar } from 'react-icons/fa';
import { Heart, ShoppingBag } from 'lucide-react';
import { WatchContext } from '../../context/WatchProvider';

const WatchDetails = () => {

    const { handleAddToCart, handleAddToWishlist } = useContext(WatchContext);

    const { ID } = useParams();
    const watches = useLoaderData();

    const expectedWatch = watches.find(
        watch => watch.watchId === Number(ID)
    );

    if (!expectedWatch) {
        return (
            <div className="flex min-h-[400px] items-center justify-center">
                <h2 className="text-xl font-semibold text-gray-700">
                    Watch not found!
                </h2>
            </div>
        );
    }

    const {
        watchName,
        brand,
        image,
        description,
        price,
        reviews,
        ratingAvg,
        category,
        watchType,
        movement,
        material,
        stock
    } = expectedWatch;



    return (


        <section className="mx-auto mt-5 mb-12 w-[94%] py-8 md:w-[92%] md:py-10 lg:w-[88%]">

            <div className="grid grid-cols-1 items-start justify-between gap-7 md:grid-cols-2 md:gap-8 lg:gap-12">

                {/* Watch Image */}
                <div className="w-full overflow-hidden rounded-2xl bg-[#F3F5F7]">
                    <img
                        src={image}
                        alt={watchName}
                        className="h-[350px] w-full object-cover object-center md:h-[440px] lg:h-[500px]"
                    />
                </div>

                {/* Watch Information */}
                <div className="flex flex-col">

                    {/* Brand and Category */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                            {brand}
                        </span>

                        <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                            {category}
                        </span>
                    </div>

                    {/* Watch Name */}
                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
                        {watchName}
                    </h1>

                    <p className="mt-2 text-sm font-medium text-gray-500">
                        {watchType} Watch • {movement} Movement
                    </p>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                            <FaRegStar className="text-amber-500" />
                            <span className="text-sm font-bold text-gray-800">
                                {ratingAvg}
                            </span>
                        </div>

                        <span className="text-sm text-gray-400">
                            ({reviews} Reviews)
                        </span>
                    </div>

                    <div className="mt-5 border-t border-gray-200" />

                    {/* Description */}
                    <p className="mt-5 text-sm leading-7 text-gray-500 md:text-base">
                        <span className="font-bold text-gray-800">
                            Description:{' '}
                        </span>
                        {description}
                    </p>

                    {/* Watch Specifications */}
                    <div className="mt-6">
                        <h3 className="mb-4 text-base font-bold text-gray-900">
                            Watch Specifications
                        </h3>

                        <div className="space-y-3 text-sm">

                            <div className="flex gap-3">
                                <span className="w-32 shrink-0 text-gray-500">
                                    Brand:
                                </span>
                                <span className="font-semibold text-gray-800">
                                    {brand}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="w-32 shrink-0 text-gray-500">
                                    Watch Type:
                                </span>
                                <span className="font-semibold text-gray-800">
                                    {watchType}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="w-32 shrink-0 text-gray-500">
                                    Movement:
                                </span>
                                <span className="font-semibold text-gray-800">
                                    {movement}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="w-32 shrink-0 text-gray-500">
                                    Material:
                                </span>
                                <span className="font-semibold text-gray-800">
                                    {material}
                                </span>
                            </div>

                            <div className="flex gap-3">
                                <span className="w-32 shrink-0 text-gray-500">
                                    Available Stock:
                                </span>
                                <span className="font-semibold text-gray-800">
                                    {stock} Pieces
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="mt-6 border-t border-gray-200" />

                    {/* Price */}
                    <div className="mt-5">
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            Price
                        </p>

                        <h2 className="mt-1 text-2xl font-bold text-blue-800">
                            ৳{price.toLocaleString()}
                        </h2>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">

                        <button
                            onClick={() => handleAddToCart(expectedWatch)}
                            className="btn h-11 w-fit border-none bg-[#172554] px-5 text-white shadow-none hover:bg-[#1E3A8A]">
                            <ShoppingBag size={18} />
                            Add to Cart
                        </button>

                        <button
                            onClick={() => handleAddToWishlist(expectedWatch)}
                            className="btn h-11 w-fit border border-[#172554] bg-white px-5 text-[#172554] shadow-none hover:bg-blue-50">
                            <Heart size={18} />
                            Add to Wishlist
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default WatchDetails;