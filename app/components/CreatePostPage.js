"use client"
import { useState } from "react"
import { createPost } from "../actions/postActions";

export default function CreatePostPage({ username }) {
    const [postForm, setPostForm] = useState({ name: username, title: "", description: "", image: "" });

    return (
        <div>
            <h1>Create your first post on ProBlogger!</h1>
            <br />
            <br />
            <div>
                <form className="text-center" action={(e)=>{createPost(e); alert("Post has been made!")}}>
                    <input type="text" value={postForm.name} name="name" readOnly className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your username" />
                    <br />
                    <br />
                    <input type="text" value={postForm.title} onChange={(e) => { setPostForm({ ...postForm, [e.target.name]: e.target.value }) }} placeholder="Enter your post title" name="title" className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                    <br />
                    <br />
                    <input type="text" value={postForm.description} onChange={(e) => { setPostForm({ ...postForm, [e.target.name]: e.target.value }) }} placeholder="Enter your post description" name="description" className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                    <br />
                    <br />
                    <input type="text" value={postForm.image} onChange={(e) => { setPostForm({ ...postForm, [e.target.name]: e.target.value }) }} placeholder="Enter your post image url" name="image" className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                    <br />
                    <br />
                    <button type="submit" className="group relative w-20 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
                </form>
            </div>
        </div>
    )
}