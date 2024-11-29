import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import CreatePostPage from "../components/CreatePostPage"

export default async function CreatePost(){
    const cookieStore = await cookies()
    const token = cookieStore.get("token")
    const user = jwt.verify(token.value, process.env.JWT_SECRET)
    return (
        <div>
            <CreatePostPage username={user.username} />
        </div>
    )
}