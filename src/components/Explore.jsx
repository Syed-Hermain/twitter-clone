import React from "react";

const Explore = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen">
            <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-10">
                <h1 className="text-xl font-bold text-gray-800">Explore</h1>
            </header>
            <div className="w-full max-w-2xl mt-4">
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Trending Topics</h2>
                    <ul className="space-y-2">
                        <li className="text-blue-500 hover:underline cursor-pointer">#ReactJS</li>
                        <li className="text-blue-500 hover:underline cursor-pointer">#TailwindCSS</li>
                        <li className="text-blue-500 hover:underline cursor-pointer">#JavaScript</li>
                        <li className="text-blue-500 hover:underline cursor-pointer">#WebDevelopment</li>
                    </ul>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Who to Follow</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-800">John Doe</p>
                                    <p className="text-sm text-gray-500">@johndoe</p>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
                                Follow
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="ml-3">
                                    <p className="font-medium text-gray-800">Jane Smith</p>
                                    <p className="text-sm text-gray-500">@janesmith</p>
                                </div>
                            </div>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;