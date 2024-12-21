"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage({ username, email }) {
    const [usernameState, setUsernameState] = useState(username)
    const [emailState, setEmailState] = useState(email)
    const router = useRouter()

    async function hitApi(path, method, body) {
        let req = await fetch(path, { method: method, body: JSON.stringify(body) })
        let res = await req.json()
    }

    return (
        <main className="text-center my-3">
            <input type="text" name="username" className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value={usernameState} onChange={(e) => { setUsernameState(e.target.value) }} />
            <br />
            <br />
            <input type="email" name="email" className="appearance-none rounded-md relative w-[330px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value={emailState} onChange={(e) => { setEmailState(e.target.value) }} />
            <br />
            <br />
            <div className="text-center">
                <button onClick={() => { hitApi("/api/update", "PUT", { username: usernameState, email: emailState }); alert("Profile has been updated!") }} className="group relative w-20 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
                <br />
                <br />
                <button onClick={() => { hitApi("/api/logout", "DELETE", { username: usernameState, email: emailState }); router.push("/login"); alert("You have logged out successfully!") }} className="group relative w-20 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Logout</button>
            </div>
        </main>
    )
}