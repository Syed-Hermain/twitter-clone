import React from "react";
import CreatePost from "../components/CreatePost"; // Import CreatePost component

const tweets = [
    {
        id: 1,
        username: "john_doe",
        content: "Just had the best coffee ever! ☕ #morningvibes",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 2,
        username: "jane_smith",
        content: "Loving the new React features! 🚀 #codinglife",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 3,
        username: "tech_guru",
        content: "TailwindCSS makes styling so much easier! 🎨 #webdev",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 4,
        username: "john_doe",
        content: "Just had the best coffee ever! ☕ #morningvibes",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 5,
        username: "jane_smith",
        content: "Loving the new React features! 🚀 #codinglife",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 6,
        username: "tech_guru",
        content: "TailwindCSS makes styling so much easier! 🎨 #webdev",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 7,
        username: "john_doe",
        content: "Just had the best coffee ever! ☕ #morningvibes",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 8,
        username: "jane_smith",
        content: "Loving the new React features! 🚀 #codinglife",
        avatar: "https://via.placeholder.com/50",
    },
    {
        id: 9,
        username: "tech_guru",
        content: "TailwindCSS makes styling so much easier! 🎨 #webdev",
        avatar: "https://via.placeholder.com/50",
    }
];

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 flex">
            {/* Left Sidebar for CreatePost (Desktop) */}
            <div className="hidden md:block w-1/4 p-4">
                <CreatePost />
            </div>

            {/* Main Feed */}
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg flex-1 mt-10 ml-10">
                <h1 className="text-2xl font-bold text-center py-4 border-b">Home</h1>
                
                {/* It was here before, the create post */}
                
                {/* Tweets */}
                <div className="p-4 space-y-4">
                    {tweets.map((tweet) => (
                        <div key={tweet.id} className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm">
                            <img src={tweet.avatar} alt={`${tweet.username}'s avatar`} className="w-12 h-12 rounded-full" />
                            <div>
                                <h2 className="font-semibold text-lg">{tweet.username}</h2>
                                <p className="text-gray-700">{tweet.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Create Post Button */}
            <div className="md:hidden p-4">
                    <CreatePost />
                </div>

        </div>
    );
};

export default Home;