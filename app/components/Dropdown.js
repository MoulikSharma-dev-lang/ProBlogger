"use client"
import { useState } from "react"
import Link from "next/link"

export default function Dropdown() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="relative inline-block text-left">
            <button onClick={() => { setShowDropdown(!showDropdown) }} id="dropdownButton" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                Welcome!
            </button>

            {showDropdown && <div id="dropdownMenu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                    <Link href="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
                    <Link href="/posts" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Posts</Link>
                    <Link href="/createpost" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Create Post</Link>
                </div>
            </div>}
        </div>
    )
}