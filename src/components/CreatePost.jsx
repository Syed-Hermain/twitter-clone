import React, { useState } from "react";

const CreatePost = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For desktop dialog
  const [isInputVisible, setIsInputVisible] = useState(false); // For mobile input
  const [content, setContent] = useState("");

  return (
    <>
      {/* Desktop: Sidebar Button for Dialog */}
      <button
        className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-lg fixed left-4 top-20 hover:bg-blue-600"
        onClick={() => setIsDialogOpen(true)}
      >
        Create Post
      </button>

      {/* Mobile: Floating Button */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600"
        onClick={() => setIsInputVisible(!isInputVisible)}
      >
        ✎
      </button>

      {/* Mobile: Tweet Input (Appears when button is clicked) */}
      {isInputVisible && (
        <div className="md:hidden fixed bottom-16 right-6 w-5/6 bg-white p-4 rounded-lg shadow-lg border border-gray-300 transition transform">
          <textarea
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between mt-4">
            <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setIsInputVisible(false)}>Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>
      )}

      {/* Desktop: Dialog Box for Post Creation */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={() => setIsDialogOpen(false)}>Cancel</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;