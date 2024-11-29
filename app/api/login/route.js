import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { connectDb } from "@/app/db/connectDb";
import LoginUser from "@/app/models/Login";
import bcrypt from "bcrypt"

export async function POST(request) {
    try {
        const cookieStore = await cookies()
        const data = await request.json()
        connectDb()
        const hashedPassword = bcrypt.hashSync(data.password, 10)
        await LoginUser.create({
            username: data.username,
            email: data.email,
            password: hashedPassword
        })
        const token = jwt.sign({username: data.username, email: data.email}, process.env.JWT_SECRET)
        cookieStore.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production" ? true : false,
            path: "/",
            maxAge: 60 * 60 * 24 * 7
        })
        return NextResponse.json({data: "User logged in successfully!", success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Error while logging in user", success: false, error: error})
    }
}