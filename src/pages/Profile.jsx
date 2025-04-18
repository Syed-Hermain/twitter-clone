import React from "react";
import CreatePost from "../components/CreatePost";

const tweets = [
  {
    id: 1,
    content: "Learning React is so much fun! 🚀",
    avatar: "https://via.placeholder.com/50",
    username: "john_doe",
  },
  {
    id: 2,
    content: "Exploring TailwindCSS for better styling! 🎨",
    avatar: "https://via.placeholder.com/50",
    username: "jane_smith",
  },
];

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">

      {/* Left Sidebar for CreatePost (Desktop) */}
      <div className="hidden md:block w-1/4 p-4">
        <CreatePost />
      </div>

      {/* Main Profile Section */}
      <div className="flex flex-col items-center w-full md:w-3/4">
        {/* Sticky Header */}
        <header className="w-full bg-white shadow-md py-4 px-6 sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        </header>

        {/* Profile Info */}
        <div className="w-full max-w-2xl mt-6 px-4 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile Avatar"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
              <p className="text-gray-500">@johndoe</p>
              <p className="text-gray-600 mt-2">
                Just a developer who loves React and TailwindCSS!
              </p>
            </div>
          </div>

          {/* User's Tweets */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">My Tweets</h2>
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
                  <h3 className="font-semibold text-gray-800">{tweet.username}</h3>
                  <p className="text-gray-700">{tweet.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Floating Button for CreatePost */}
      <CreatePost />
    </div>
  );
};

export default Profile;