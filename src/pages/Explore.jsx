import React from "react";
import CreatePost from "../components/CreatePost";

const Explore = () => {
    const trendingTopics = [
        { id: 1, topic: "#ReactJS" },
        { id: 2, topic: "#TailwindCSS" },
        { id: 3, topic: "#JavaScript" },
        { id: 4, topic: "#WebDevelopment" },
    ];

    const suggestions = [
        { id: 1, name: "John Doe", handle: "@johndoe", avatar: "https://via.placeholder.com/50" },
        { id: 2, name: "Jane Smith", handle: "@janesmith", avatar: "https://via.placeholder.com/50" },
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
            
            {/* Left Sidebar for CreatePost (Desktop) */}
            <div className="hidden md:block w-1/4 p-4">
                <CreatePost />
            </div>

            {/* Main Explore Section */}
            <div className="flex flex-col items-center w-full md:w-3/4">
                {/* Sticky Header */}
                <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-10">
                    <h1 className="text-2xl font-bold text-gray-800">Explore</h1>
                </header>

                {/* Trending Topics */}
                <div className="w-full max-w-2xl mt-6 space-y-6 px-4">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Trending Topics</h2>
                        <div className="space-y-4">
                            {trendingTopics.map((trend) => (
                                <div key={trend.id} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                        #
                                    </div>
                                    <div>
                                        <p className="text-blue-500 font-semibold hover:underline cursor-pointer">{trend.topic}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Who to Follow */}
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">Who to Follow</h2>
                        <div className="space-y-4">
                            {suggestions.map((user) => (
                                <div key={user.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                                    <img src={user.avatar} alt={`${user.name}'s avatar`} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-medium text-gray-800">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.handle}</p>
                                    </div>
                                    <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
                                        Follow
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile: Floating Button for CreatePost */}
            <CreatePost />
        </div>
    );
};

export default Explore;