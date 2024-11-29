import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true, unique: true},
    image: {type: String, required: true}
})

const PostUser = mongoose.models.Post || mongoose.model("Post", postSchema)
export default PostUser