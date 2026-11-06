// Retrieves all cart items from local storage or returns an empty array
const allCartDataFromLocalDB = () => {
    const allCartList = localStorage.getItem("cartData");
    if (allCartList) return JSON.parse(allCartList);
    return [];
};

// Adds the selected watch to the cart while preventing duplicates
const addCartDataToLocalDB = (watch) => {
    const allCartWatch = allCartDataFromLocalDB();
    const isExist = allCartWatch.find(item => item.watchId == watch.watchId);
    if (!isExist) {
        allCartWatch.push(watch);
        localStorage.setItem("cartData", JSON.stringify(allCartWatch))
    }
};

export { allCartDataFromLocalDB, addCartDataToLocalDB };