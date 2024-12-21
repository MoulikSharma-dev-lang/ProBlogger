import { cookies } from "next/headers"
import Link from "next/link"
import Script from "next/script"
import Dropdown from "./Dropdown"

export default async function Navbar() {
    const cookieStore = await cookies()
    return (
        <nav className="bg-blue-950 text-white py-3">
            <ul className="flex justify-around py-3 gap-3">
                <Link href={"/"}><li className="font-bold text-2xl">Home</li></Link>
                <Link href={"/about"}><li className="font-bold text-2xl">About</li></Link>
                <Link href={"/contact"}><li className="font-bold text-2xl">Contact</li></Link>
                {!cookieStore.get("token") && <Link href={"/login"}><li className="font-bold text-2xl">Login</li></Link>}
                {cookieStore.get("token") && <Dropdown />}
            </ul>
        </nav>
    )
}