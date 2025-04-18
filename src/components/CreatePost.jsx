import React, { useState } from "react";

const CreatePost = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // For desktop modal
  const [isInputVisible, setIsInputVisible] = useState(false); // For mobile input box
  const [content, setContent] = useState(""); // Post content
  const [wordCount, setWordCount] = useState(0); // Word count tracker
  const [media, setMedia] = useState(null); // Uploaded media

  // Handle content change & word count
  const handleContentChange = (e) => {
    const words = e.target.value.split(/\s+/).filter(word => word !== "").length;
    if (words <= 50) {
      setContent(e.target.value);
      setWordCount(words);
    }
  };

  // Handle media upload
  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(URL.createObjectURL(file)); // Preview media
    }
  };

  // Remove selected media
  const removeMedia = () => setMedia(null);

  // Reset everything on cancel
  const handleCancel = () => {
    setIsDialogOpen(false);
    setIsInputVisible(false);
    setContent("");
    setWordCount(0);
    setMedia(null);
  };

  return (
    <>
      {/* Desktop: Sidebar Button for Dialog */}
      <button
        className="hidden md:block bg-blue-500 text-white px-5 py-3 rounded-lg fixed left-6 top-24 font-medium shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600"
        onClick={() => setIsDialogOpen(true)}
      >
        + Create Post
      </button>

      {/* Mobile: Floating Button */}
      <button
        className="md:hidden fixed bottom-6 right-6 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110 hover:bg-blue-600"
        onClick={() => setIsInputVisible(!isInputVisible)}
      >
        ✎
      </button>

      {/* Mobile: Tweet Input (Appears when button is clicked) */}
      {isInputVisible && (
        <div className="md:hidden fixed bottom-16 right-6 w-5/6 bg-white p-4 rounded-lg shadow-lg border border-gray-300 transition-opacity opacity-100">
          <textarea
            className="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What's happening? (Max 50 words)"
            value={content}
            onChange={handleContentChange}
          />
          {/* Real-time word count */}
          <p className="text-sm text-gray-500 mt-1">Words: {wordCount}/50</p>

          {/* Media Upload for Mobile */}
          <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} className="mt-2" />
          {media && (
            <div className="mt-2">
              <img src={media} alt="Preview" className="w-full rounded-lg" />
              <button className="mt-2 text-red-500 text-sm underline" onClick={removeMedia}>
                Remove Image/Video
              </button>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button className="bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400" onClick={handleCancel}>Cancel</button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600">
              Post
            </button>
          </div>
        </div>
      )}

      {/* Desktop: Dialog Box for Post Creation */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96 transition-transform transform scale-100 hover:scale-105">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Create a Post</h2>
            <textarea
              className="w-full h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What's happening? (Max 50 words)"
              value={content}
              onChange={handleContentChange}
            />
            {/* Real-time word count */}
            <p className="text-sm text-gray-500 mt-1">Words: {wordCount}/50</p>

            {/* Media Upload for Desktop */}
            <input type="file" accept="image/*,video/*" onChange={handleMediaUpload} className="mt-2" />
            {media && (
              <div className="mt-2">
                <img src={media} alt="Preview" className="w-full rounded-lg" />
                <button className="mt-2 text-red-500 text-sm underline" onClick={removeMedia}>
                  Remove Image/Video
                </button>
              </div>
            )}

            <div className="flex justify-between mt-4">
              <button className="bg-gray-300 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400" onClick={handleCancel}>Cancel</button>
              <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600">
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