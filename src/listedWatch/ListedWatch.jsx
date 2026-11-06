import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cartlist from './Cartlist';
import Wishlist from './Wishlist';
import Footer from '../components/footer/Footer';

const ListedWatch = () => {

    const [sortingType, setSortingType] = useState("default")

    return (

        <>

            <div className='mt-13 w-[94%] md:w-[92%] lg:w-[88%] mx-auto'>


                {/* Dropdown */}
                <div className="flex justify-end mb-4">
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn m-0 whitespace-nowrap min-h-0 h-9 w-40 border border-gray-200 rounded-lg bg-white text-gray-700 text-sm font-medium shadow-none hover:bg-gray-50 hover:border-gray-300"
                        >
                            Sort by : {sortingType}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu mt-1 w-40 rounded-lg bg-white border border-gray-100 p-2 shadow-md text-left text-sm text-gray-600 z-10"
                        >
                            <li onClick={() => setSortingType("rating")}>
                                <a className=" whitespace-nowrap hover:bg-gray-100">Rating</a>
                            </li>

                            <li onClick={() => setSortingType("price")}>
                                <a className=" whitespace-nowrap hover:bg-gray-100">Price</a>
                            </li>

                            <li onClick={() => setSortingType("name")}>
                                <a className=" whitespace-nowrap hover:bg-gray-100">Name</a>
                            </li>
                        </ul>
                    </div>
                </div>




                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Shopping Cart</Tab>
                            <Tab>Wishlist</Tab>
                        </TabList>

                        <TabPanel>
                            <Cartlist sortingType={sortingType}></Cartlist>
                        </TabPanel>
                        <TabPanel>
                            <Wishlist sortingType={sortingType}></Wishlist>
                        </TabPanel>
                    </Tabs>

                </div>

            </div>





            <Footer></Footer>
        </>
    );
};

export default ListedWatch;