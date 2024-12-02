"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const [loginForm, setLoginForm] = useState({ username: "", email: "", password: "" });

    async function handleSubmit(e) {
        e.preventDefault()
        if (!loginForm.username || !loginForm.email || !loginForm.password) {
            alert("Please write all information!")
        } else {
            let data = await fetch("/api/login", { method: "POST", body: JSON.stringify(loginForm), headers: { 'Content-Type': 'application/json' } })
            let res = await data.json()
            router.push("/dashboard")
        }
    }

    return (
        <div>
            <h1>Login to create beautiful blogs!</h1>
            <br />
            <br />
            <div>
                <form className="space-y-6 text-center" onSubmit={handleSubmit}>
                    <div>
                        <div className="mt-1">
                            <input value={loginForm.username} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} name="username" type="text" className="appearance-none rounded-md relative w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your username" />
                        </div>
                    </div>
                    <div>
                        <div className="mt-1">
                            <input value={loginForm.email} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} name="email" type="email" className="appearance-none rounded-md relative w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your email address" />
                        </div>
                    </div>
                    <div>
                        <div className="mt-1">
                            <input value={loginForm.password} onChange={(e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }} name="password" type="password" className="appearance-none rounded-md relative w-96 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="group relative w-96 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}