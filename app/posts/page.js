import PostsPage from "../components/PostsPage";
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

export default async function Posts() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")
    const user = jwt.verify(token.value, process.env.JWT_SECRET)
    return (
        <div>
            <PostsPage username={user.username} />
        </div>
    )
}