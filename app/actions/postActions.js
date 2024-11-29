"use server"
import PostUser from "../models/Post"
import { connectDb } from "../db/connectDb"

export const createPost = async (e) => {
    const username = e.get("name")
    const title = e.get("title")
    const description = e.get("description")
    const imageUrl = e.get("image")
    connectDb()
    await PostUser.create({
        username: username,
        title: title,
        description: description,
        image: imageUrl
    })
    return {
        data: "User post has been created!",
        success: true
    }
}

export const fetchPosts = async () => {
    connectDb()
    const fetchedPosts = await PostUser.find({})
    const plainPosts = fetchedPosts.map((post) => {
        const plainPost = {
            _id: post._id.toString(),
            username: post.username,
            title: post.title,
            description: post.description,
            image: post.image
        }
        delete post._v
        return plainPost
    })
    return plainPosts
}

export const deletePost = async (id) => {
    connectDb()
    await PostUser.findByIdAndDelete(id)
    return {
        data: "Post has been deleted successfully!",
        success: true
    }
}