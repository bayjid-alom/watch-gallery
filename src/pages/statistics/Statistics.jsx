import React, { use } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import Footer from '../../components/footer/Footer';

const watchesPromise = fetch("/watch-data.json").then(res => res.json());



const Statistics = () => {

    const watches = use(watchesPromise);

    const chartData = watches.slice(0, 10).map(watch => ({
        name: watch.watchName,
        price: watch.price
    }));



    return (
        <>
            <section className="w-[94%] md:w-[92%] lg:w-[88%] mx-auto my-16">

                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[3px] text-[#6096D6] mb-3">
                        Watch Analytics
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1736]">
                        Watch Price Overview
                    </h2>

                    <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base leading-7 text-gray-500">
                        Explore and compare the prices of our exclusive watch collections.
                    </p>

                    <div className="w-16 h-1 bg-[#6096D6] rounded-full mx-auto mt-5"></div>
                </div>

                {/* Chart */}
                <div className="bg-[#F4F7FC] border border-[#DCE5F1] rounded-2xl p-3 md:p-8">
                    <div className="w-full h-[480px] md:h-[430px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={chartData}
                                margin={{
                                    top: 15,
                                    right: 10,
                                    left: 0,
                                    bottom: 50
                                }}
                                barCategoryGap="35%"
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke="#DCE5F1"
                                    vertical={false}
                                />

                                <XAxis
                                    dataKey="name"
                                    interval={0}
                                    angle={-90}
                                    textAnchor="end"
                                    height={110}
                                    tick={{
                                        fill: "#555F70",
                                        fontSize: 10
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                    tickMargin={12}
                                />

                                <YAxis
                                    tick={{
                                        fill: "#777F8D",
                                        fontSize: 11
                                    }}
                                    axisLine={false}
                                    tickLine={false}
                                    tickCount={5}
                                    width={55}
                                />

                                <Tooltip
                                    cursor={{ fill: "#E5EDF8" }}
                                    formatter={(value) => [
                                        `৳ ${Number(value).toLocaleString("en-BD")}`,
                                        "Watch Price"
                                    ]}
                                    contentStyle={{
                                        backgroundColor: "#0B1736",
                                        border: "none",
                                        borderRadius: "10px",
                                        color: "#ffffff",
                                        padding: "10px 14px"
                                    }}
                                    labelStyle={{
                                        color: "#93C5FD",
                                        fontWeight: "600",
                                        marginBottom: "5px"
                                    }}
                                />

                                <Bar
                                    dataKey="price"
                                    fill="#6096D6"
                                    barSize={22}
                                    radius={[5, 5, 0, 0]}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Statistics;