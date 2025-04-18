import React from 'react'



const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">@johndoe</p>
              <p className="text-gray-600">Web Developer | Tech Enthusiast</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="text-center">
              <h2 className="text-lg font-bold">500</h2>
              <p className="text-gray-600">Tweets</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">1.2k</h2>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">300</h2>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <h2 className="text-xl font-bold mb-4">Tweets</h2>
        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
          <p className="text-gray-800">This is a sample tweet!</p>
          <p className="text-gray-500 text-sm mt-2">2h ago</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg mb-4">
          <p className="text-gray-800">Another tweet for the profile page!</p>
          <p className="text-gray-500 text-sm mt-2">5h ago</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;