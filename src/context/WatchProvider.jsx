import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addCartDataToLocalDB, allCartDataFromLocalDB } from '../utils/local-db-for-cart';
import { getAllWishDataFromLocalDB, setWishlistDataToLocalDB } from '../utils/local-db-for-wishlist';

export const WatchContext = createContext()

const WatchProvider = ({ children }) => {
    // const [cart, setCart] = useState([])
    const [cart, setCart] = useState(() => allCartDataFromLocalDB())
    // const [wishlist, setWishlist] = useState([])
    const [wishlist, setWishlist] = useState(() => getAllWishDataFromLocalDB())


    const handleAddToCart = (currentWatch) => {
        // to add in local storage
        addCartDataToLocalDB(currentWatch)

        const isExist = cart.find(watch => watch.watchId == currentWatch.watchId);
        if (isExist) {
            toast.warning(`${currentWatch.watchName} is already in your cart.`);
            return;
        }
        else {
            setCart([...cart, currentWatch]);
            toast.success(`${currentWatch.watchName} has been successfully added to your cart.`);
        }
    }




    const handleAddToWishlist = (currentWatch) => {
        // to add in local storage
        setWishlistDataToLocalDB(currentWatch);

        const isExistInCart = cart.find(item => item.watchId == currentWatch.watchId);
        if (isExistInCart) {
            toast.warning(`${currentWatch.watchName} is already in your cart.`);
            return;
        }

        const isExist = wishlist.find(watch => watch.watchId == currentWatch.watchId);
        if (isExist) {
            toast.warning(`${currentWatch.watchName} is already in your wishlist.`);
            return;
        }
        else {
            setWishlist([...wishlist, currentWatch]);
            toast.success(`${currentWatch.watchName} has been successfully added to your wishlist.`);
        }
    }



    const data = {
        handleAddToCart,
        cart,
        setCart,
        handleAddToWishlist,
        wishlist,
        setWishlist
    }

    return (
        <WatchContext.Provider value={data}>
            {children}
        </WatchContext.Provider>
    );
};

export default WatchProvider;