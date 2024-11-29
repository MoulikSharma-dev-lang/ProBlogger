import { cookies } from "next/headers";
import DashboardPage from "../components/DashboardPage";
import jwt from "jsonwebtoken"

export default async function Dashboard() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")
    let verifiedToken;
    if (token) {
        verifiedToken = jwt.verify(token.value, process.env.JWT_SECRET)
    }
    return (
        <div>
            <DashboardPage username={verifiedToken.username} email={verifiedToken.email} />
        </div>
    )
}