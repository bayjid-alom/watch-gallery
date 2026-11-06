import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ListedWatch from "../listedWatch/ListedWatch";
import WatchDetails from "../pages/watchDetails/WatchDetails";
import Collections from "../pages/collections/Collections";
import Statistics from "../pages/statistics/Statistics";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "/listed-watches",
                Component: ListedWatch
            },
            {
                path: "/watch-details/:ID",
                loader: () => fetch("/watch-data.json"),
                Component: WatchDetails
            },
            {
                path: "/collections",
                Component: Collections
            },
            {
                path: "/statistics",
                Component: Statistics
            }
        ],
        errorElement: <div>
            <h2 className="flex font-extrabold justify-center mt-25 text-6xl text-red-500">404!</h2>
        </div>
    }
])