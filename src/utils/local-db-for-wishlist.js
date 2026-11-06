const getAllWishDataFromLocalDB = () => {
    const allWishlistData = localStorage.getItem("wishData")
    if (allWishlistData) return JSON.parse(allWishlistData);
    return [];
}

const setWishlistDataToLocalDB = (watch) => {

    const allWishData = getAllWishDataFromLocalDB()
    const isExist = allWishData.find(item => item.watchId == watch.watchId);

    if (!isExist) {
        allWishData.push(watch);
        localStorage.setItem("wishData", JSON.stringify(allWishData))
    }
}

export { getAllWishDataFromLocalDB, setWishlistDataToLocalDB };