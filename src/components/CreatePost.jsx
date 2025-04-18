import React, { useState } from "react";

const CreatePost = () => {
    const [postContent, setPostContent] = useState("");

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (postContent.trim() === "") return;
        console.log("Post submitted:", postContent);
        setPostContent("");
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <form onSubmit={handlePostSubmit}>
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="4"
                    placeholder="What's happening?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                ></textarea>
                <div className="flex justify-end mt-3">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;