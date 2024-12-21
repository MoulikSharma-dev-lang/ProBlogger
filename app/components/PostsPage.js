"use client"
import { useState, useEffect } from "react"
import { fetchPosts, deletePost } from "../actions/postActions"

export default function PostsPage({username}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        let posts = await fetchPosts()
        setPosts(posts)
    }

    return (
        <main>
            {posts.length > 0 && posts.map((post, index) => {
                return <div className="text-center" key={index}>
                    <p className="italic">Written by {post.username}</p>
                    <h2>{post.title}</h2>
                    <br />
                    <p>{post.description}</p>
                    <br />
                    <img src={post.image} alt={post.title} className="mx-auto" width={600} height={400} />
                    <br />
                    {username === post.username && <button onClick={()=>{deletePost(post._id); alert("Post has been deleted!")}} className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-lg">Delete</button>}
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                </div>
            })}
            {posts.length === 0 && <p className="text-center font-bold text-3xl my-3">No post to display!</p>}
        </main>
    )
}