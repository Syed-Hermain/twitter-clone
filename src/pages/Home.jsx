import React from "react";

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
];

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center py-4 border-b">Home</h1>
                <div className="p-4 space-y-4">
                    {tweets.map((tweet) => (
                        <div
                            key={tweet.id}
                            className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                        >
                            <img
                                src={tweet.avatar}
                                alt={`${tweet.username}'s avatar`}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <h2 className="font-semibold text-lg">{tweet.username}</h2>
                                <p className="text-gray-700">{tweet.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;